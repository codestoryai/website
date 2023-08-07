---
title      : "LLMs walking the code graph with `ts-morph` 👣"
excerpt    : "To start with, we wanted the LLM to see a code repository as we humans do, as a graph of entities interconnected and linked together."
coverImage : "/assets/blog/code-reviews/cover.png"
date       : "2023-07-31T13:09:00.000Z"
author     :
    name    : Sandeep Kumar Pani
    picture : "/assets/blog/authors/sandeep.jpg"
ogImage    :
    url : "/assets/blog/code-reviews/cover.png"
---


With CodeStory we want to build a senior engineer right in your IDE!

To start with, we wanted the LLM to see a code repository as we humans do, as a graph of entities interconnected and linked together.

Using a CST parser ([tree-sitter](https://tree-sitter.github.io/tree-sitter/) for example), we are able to get all the symbols present in the language but we wanted to go a step further and give the LLM an editor like experience so it can dig into a code symbol or get references for the symbol throughout the codebase to power mass edits.

We would also use a LSP here to power the same features, but most LSPs are don’t provide accessible APIs and we wanted to pre-create the graph to power our “Explain code” feature, so how do we do that?

### Enter [ts-morph](https://github.com/dsherret/ts-morph) ‼️

We first asked GPT4 on how to do this, and LSP was the obvious answer, but running a full blown LSP without good APIs ruins the dev experience, after looking around we settled on ts-morph and Jedi for powering the code graph.

We are also exposing how we use `ts-morph` to power our code graph creation on the repo [here](https://github.com/codestoryai/typescript_parsing) (we will expose the full blown code graph linking soon, as its embedded in our private repo at the moment)

## So how does `ts-morph` help? 👋

Parsing typescript code is a bit of hit and miss unless you are very careful and take care of most complex cases as in typescript you have a lot of variations on how to do the same thing. For example you can declare a [function](https://github.com/codestoryai/typescript_parsing/blob/main/parseRepo.ts#L134) like:

```jsx
export function something() {
		console.log("interesting");
}
```

or you can [declare](https://github.com/codestoryai/typescript_parsing/blob/main/parseRepo.ts#L195) it as:

```jsx
export const something = () => {
	console.log("interesting");
}
```

and there are [cases](https://github.com/codestoryai/typescript_parsing/blob/main/parseRepo.ts#L488) like this too

```jsx
export const revisit = doSomething("interesting", {
   maxAge: 24 * 60 * 60, // one week
});
```

There are also [classes](https://github.com/codestoryai/typescript_parsing/blob/main/parseRepo.ts#L301) and [functions](https://github.com/codestoryai/typescript_parsing/blob/main/parseRepo.ts#L338-L355) inside the classes to take care of, thankfully `ts-morph` has very simple Apis and guarding against cases gets you very very far! so far infact that you can create a near perfect code-graph which works for almost 99% of the cases.

The core part of a code graph is getting a unique name for each symbol in the codebase. We do this via the type defined below:

```jsx
export interface CodeSymbolInformation {
    symbolName: string,
    symbolKind: CodeSymbolKind,
    symbolStartLine: number,
    symbolEndLine: number,
    codeSnippet:
    { languageId: string; code: string },
    extraSymbolHint: string | null,
    dependencies: CodeSymbolDependencies[],
    fsFilePath: string,
    originalFilePath: string,
    workingDirectory: string,
    displayName: string,
    originalName: string,
    originalSymbolName: string,
} 
```

As mentioned above you can see that the `symbolName` is unique to each node and we also capture the scope of the function, if its inside a class then the `symbolName` rightfully contains: `{module_name}.{class_name}.{function_name}` and if its global we simply use `{module_name}.{function_name}` 

### Getting the dependencies of a code symbol

With nodes getting created, our next step was to create the edges between them. Using `ts-morph` we can very easily get the dependencies by asking `ts-morph` to look for certain type of symbols in a block of code and giving us the type for it.

```jsx
block.getDescendantsOfKind(SyntaxKind.CallExpression).forEach((callExpression) => {
        callExpression.getDescendantsOfKind(SyntaxKind.Identifier).forEach((identifier) => {
            const symbol = identifier.getSymbol();
            if (symbol) {
                const qualifiedNamesFromAliasSymbol: CodeSymbolDependencyWithFileInformation[] | undefined = symbol.getAliasedSymbol()?.getDeclarations().map((declaration) => {
                    return {
                        codeSymbolName: declaration.getSymbol()?.getFullyQualifiedName(),
                        filePath: declaration.getSourceFile().getFilePath(),
                    };
                }).filter(
                    (codeSymbolInformation) => codeSymbolInformation.codeSymbolName !== undefined
                ).map(
                    // Stupid typescript type checker
                    (codeSymbolInformation) => codeSymbolInformation as CodeSymbolDependencyWithFileInformation
                );
```

Using the code block above ([repo link](https://github.com/codestoryai/typescript_parsing/blob/main/parseRepo.ts#L669-L744)) we are able to capture all the call expressions and get the full qualified name of the identifier of the identifier.

In short we are looking for all kinds of function calls happening inside the function which are from other functions or arrow functions in the workspace.

This allows us to get all the **edges or dependencies** of this function to other parts of the codebase.

### How does an LLM use this? 👨‍💻

Today we are limited by the context length of the LLM (100k is the max we can go, and even then inference speed drops quite a bit). 

By giving the LLM a **Code Graph** it can walk on, we are able to get the LLM to ask for more information about the symbols which it is missing or has not seen yet.

This allows the LLM to ask for:

- more information about the symbol if it has not seen
- provide better code completion and reasoning as it now has a LSP to interact with

### Where do we go from here?

Today’s LLMs are equivalent of a senior engineer writing code on a notepad, without access to dev tooling which we are used to on the editor it degrades the quality of the code completion and reasoning ability.

While on our quest to create a senior engineer we are also building these toolings for LLMs so they can better understand and reason with your codebase.

We are finishing up work on giving:

- **terminal** access to the LLM so it can run commands
- **linters** so the the code generated is closer to what a human would write
- **debuggers** so it can debug its own code
