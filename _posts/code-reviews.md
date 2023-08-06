---
title: "Code Reviews"
excerpt: "Code reviews are part of daily developer activities. We dedicate or block time in our day to help review code and also act on any comments on Pull Requests. But why are code reviews important and what value do they bring?"
coverImage: "/assets/blog/code-reviews/cover.png"
date: "2023-07-27T13:09:00.000Z"
author:
  name: Sandeep Kumar Pani
  picture: "/assets/blog/authors/sandeep.jpg"
ogImage:
  url: "/assets/blog/code-reviews/cover.png"
---

# Code review

## What is code review? 🤔

> Code review is generally a peer review of the code changes that developers can use to learn, improve and ship better quality code.

Code reviews are part of daily developer activities. We dedicate or block time in our day to help review code and also act on any comments on Pull Requests. But why are code reviews important and what value do they bring?

## Whats the importance of code review? 😮

Code review is important for many reasons, but to highlight a few which we have experienced and seen:

- making sure that the changes cover all edge cases and are directed towards the business need
- share broader context for both the engineer writing the code and reviewing it and create tribal knowledge across the team(s).
- teaching engineers who are onboarding about best practices and guidelines to follow when shipping.

Since writing code is a collaborative effort today, code reviews also help create a sense of shared ownership and tribal knowledge across the teams to reduce points of failure if and when there is a bug or service downtime.

Given the importance of code reviews, its still surprising to see that the process of reviewing code is not an optimal experience…

## Challenges with code review today? 🏗️

Code review in the real world does not always work the way we want them to.

- There are N number of times when pushing a huge change to production you get a “LGTM” or “Ship it!” and move on with life, because the cost of context switch is either too big or its impossible to review.
- Other times, you might want to review a badly created Pull Request. You either tap a shoulder or jump on a call, to get an idea of what the change is supposed to do, and this is to start reviewing the code.
- You might even clone the branch locally just so navigation and reasoning of the bigger impact of the change is easier.

In many cases, the time sink by an engineer to gain the context and provide a valuable code review is super high and creates additional burden, especially true for senior engineers who have N other things to solve for.

We faced these challenges quite often and want to take a more “opinionated approach to code reviews” (driven by your own opinions of course!) 

We thought about this at length and pictured ways in which a solution would work for us at CodeStory and for our customers too!

## How does CodeStory help? 🚀

After talking to customers and thinking for ourselves as well, we realised that Code Review today is a hassle in many ways. Even though people want to follow the best practices and ideally do a good code review, the challenges listed above hold true and keep coming in the way!

To tackle these we are releasing 2 features today and many more to come in the short term future!

- **Easily understand the changes of the PR**
    - 10+ files changed, well how about 3-4 lines of summary of the changes and the important places to look at to kick start the review process?
    - This helps with the context switch and makes it easier for folks to start reviewing the code
- **Navigate changes in your PR**
    - Code navigation on PR review is currently limited to cmd+f (equivalent) and gorking at the call sites.
    - We found this interface quite limiting in our day to day lives and now have an extension which uses git worktrees to help jump from the PR to the branch without loosing your work.
    - This also means we can leverage all things about the editor (lsp, intellisense etc) making impact analysis easier.

## Where do we go from here 📡

This is just the start of codestory and code reviews. We are thinking of building:

- better impact analysis tools to understand how your changes effect other parts of the system.
- can we also learn from your previous PR comments and automagically catch issues before the reviews jumps in (possibly in the editor!)
- Human level linters like “Dont follow this pattern”, “don’t use this library anymore”, “add more logs here”…