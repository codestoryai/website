---
title: "Why the IDE needs to be reimagined"
excerpt: "We're building Aide by CodeStory, an AI-powered mod of VSCode. Here's why."
coverImage: "/assets/blog/code-reviews/cover.png"
date: "2023-08-19T13:11:00.000Z"
author:
    name: Naresh Ramesh
    picture: "/assets/blog/authors/naresh.jpg"
    twitter: "https://twitter.com/ghostwriternr"
    linkedin: "https://www.linkedin.com/in/naresh-ramesh"
ogImage:
    url: "/assets/blog/code-reviews/cover.png"
---

How many times have you switched IDEs as a programmer? I've done so only thrice in 10 years. I started with Sublime Text at uni, briefly tried Atom before running back to Sublime due for it's far superior performance. And then came VSCode. I'd be amiss if I also didn't mention IntelliJ and Goland, which I used for specific projects when my employer gave licenses to the Jetbrains suite of IDEs. And of course, vim — but it's too much work to make it do all the things I get from an IDE — so my usage there is limited to quick edits (and instead use vim keybindings in all my IDEs).

<div style="display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;margin-bottom:24px;">
    <img src="/assets/blog/why-an-ide/emacs.svg" alt="Emacs" height="72px" style="width:auto;margin:12px;" />
    <img src="/assets/blog/why-an-ide/vim.svg" alt="Vim" height="72px" style="width:auto;margin:12px;" />
    <img src="/assets/blog/why-an-ide/sublime_text.svg" alt="Sublime Text" height="72px" style="width:auto;margin:12px;"/>
    <img src="/assets/blog/why-an-ide/atom.svg" alt="Atom" height="72px" style="width:auto;margin:12px;" />
    <img src="/assets/blog/why-an-ide/jb_square.svg" alt="Jetbrains" height="72px" style="width:auto;margin:12px;" />
    <img src="/assets/blog/why-an-ide/vscode.svg" alt="VSCode" height="72px" style="width:auto;margin:12px;" />
</div>

Fundamentally, **IDEs are designed to help developers with their core workflows: searching, navigating and writing code, using static analysis tools, debugging, refactoring, running tests and dev tools, and probably version control**. Each IDE has a different take on how to approach this, though. Jetbrains is famous for it's language-first IDEs with rich framework support, wherein VSCode is closer to a general purpose editor with a rich suite of extensions.

**_But how does this change in a world with AI?_**

## The dial-up era of AI

Since the [transformer paper](https://arxiv.org/abs/1706.03762), the launch of GPT models and most crucially ChatGPT, we've seen a Cambrian explosion of AI-powered developer tooling. The most famous is GitHub Copilot, which comes as an IDE extension similar to a ton of others (Tabnine, Codeium, Cody and the 1000+ results on the VSCode Marketplace). While many are just a wrapper around OpenAI's GPT APIs, the best of them [combine it with very clever techniques](https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html) to give the language models the right context to generate code.

But even with additional context, in their current form, **AI assistants generating code are like senior engineers with only a notepad**. They can still write code, but with no way to evaluate any part of their own work. That part is left to developers, who are now tasked with evaluating the correctness of the generated code.

![Replacing code with AI](/assets/blog/why-an-ide/replacing_code.gif)

A remarkable shift in how I write code has been the big drop to the cost of replacing code written by AI. Write a prompt, get some code, don't like the result? Delete it all, update the prompt and try again. This works surprisingly well! If we extrapolate this to a year from now, the time cost of iterating over large changes (across files, packages and entire codebases) drops expontentially — and what a wonderful world that would be!

But this is where the developer experience is going to be extremely crucial. **Can you imagine giving a big task to a developer, who writes the code but never runs or tests it before submitting a PR?** \*shudders\*

In order to do this well, a few key pieces need to be in place:

1. **AI assistants use rich developer tools, like we do**. Developers have created a ton of tooling over the last 30 years of computing. Unlike natural languages, code is inherently well-structured. Giving AI access to these tools will allow them to achieve a deeper understanding of code, navigating them and incrementally build software.
2. **AI assistants need to work within the IDE**: To maintain an extremely fast feedback loop with developers. At the end of the day, source code is objective truth and the IDE is the best place where both AI and developers can work together.

But that begs a question: **Do IDEs of the future look the same as they do today?**

## Imaginging the future

The IDEs of today are built around making it easy for developers to interact with their code. Red squiggly lines from pesky linters, a file tree to visualise the codebase, 30+ menu items with keyboard shortcuts for every action. All of these are visual cues for developers — we start by exposing these cues to AI assistants as well. When AI is able to access every one of these workflows, if not all, a lot of them can potentially be simplified to a large extent. For example, why does the source control need to be ordered by file & folder names? If my goal is to review my changes, why not get a walkthrough of the changes in the order in which code flows and have them be explained to me? Can't remember method names? Why not just describe it to find it?

<figure class="image">
    <img src="/images/home/nlp-search.png" alt="Search">
    <figcaption style="text-align:center;padding-top:8px;font-weight:600;">An early iteration that we tried</figcaption>
</figure>

Looking further, IDEs in the future could also bring in unstructured information from the external world (company internal documentation, ticketing systems, monitoring alerts, design goals and best practices) to feed to AI agents. And developers primarily interact with multiple AI agents within the IDE to get software. Have an API specification ready? Have 3 agents ready to go pecking on different parts of the codebase. Have an issue and need to find the root cause? Task an agent to help you find it.

## What are we doing today?

Building an IDE is no easy task. And so is switching IDEs for developers extremely used to their current IDE, with custom keybindings, extensions, themes and settings. **At CodeStory, we're starting to tackle this by modding the Open Source VSCode to build the IDE of the future — we're calling it [Aide](https://codestory.ai)**.

Unlike an extension, this gives us a lot more flexibility and control, while also providing a solid foundation built over a decade to start. With over 70% of developers using VSCode, this is also a path of least resistance (especially with 1-click migration options) to transition developers to our IDE without breaking their current workflows, and incrementally learn new ones.

This approach is not without it's problems. The VSCode Marketplace for instance is under a custom license preventing non-Microsoft products from using it — perhaps the [Open VSX Registry](https://open-vsx.org) is the answer. That still leaves some great proprietary extensions built by Microsoft out — to which we need an answer that builds on top of Open Source, but with a model that is net positive to the dev community as a whole (suggestions welcome!). With full access to the source code and help from projects like [VSCodium](https://vscodium.com), disabling telemetary should be very much possible — hopefully without treading in gray areas.

In the next few months, we want to build towards this vision and find answers to the missing pieces. Our [Changelog](/changelog) and [social media](https://twitter.com/codestoryai) will be the best place to follow along.

If you're interested, try out Aide ✨ and give us feedback! We're still in very early stages.

Cheers and thanks for reading!