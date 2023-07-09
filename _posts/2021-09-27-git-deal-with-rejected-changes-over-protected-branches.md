---
layout: post
title: "Git - Deal with rejected changes over protected branches"
categories: [notes]
tags: [git,branching]
---

![This could be your state, having a commit out of sync because is rejected by git remote](https://qjuanp.dev/assets/posts/2021-09-27-git-deal-with-rejected-changes-over-protected-branches/state.png)

**Scenario:** main([\*](https://github.com/github/renaming%20(Renaming%20the%20default%20branch%20from%20master%20-%20extended%20expkanation%20by%20Github%20about%20why%20rename%20master%20as%20main%20in%20all%20repos))) integration branch rejects changes when try to pushing into remote repository. This is a common practice to follow Gitflow (or other branching strategies) to enforce merge reviews into the into the main branch.

So, how to push correctly your changes into main integration branch?

Summary:

1. [Create a feature branch](#create-a-feature-branch)
2. [Reset your local main integration branch and sync up with remote main branch](#reset-main)
3. [Push your feature branch and create a Pull Request](#push-your-feature-branch-and-create-a-pr)

## Create a feature branch

![create a feature branch](https://qjuanp.dev/assets/posts/2021-09-27-git-deal-with-rejected-changes-over-protected-branches/step-1-create-branch.png)

Create a feature branch from your main integration branch, remember that branches are just named pointers to actual commits, so, new branch will be pointing out to your latest changes, which are the ones you’re trying to push correctly into the integration branch.

`git checkout -b [feature-branch-name]`

> Remember to follow your defined naming conventions to name the new feature branch.

## Reset main

![Reset main branch](https://qjuanp.dev/assets/posts/2021-09-27-git-deal-with-rejected-changes-over-protected-branches/step-2-reset-main.png)

Let’s move the local main branch pointer to the same commit that remote branch is referencing.

> In this example we assume that is just one commit behind the last commit, in that case we just need to run:

`git reset --hard HEAD~1`

Where:

- Reset will move the pointer
- `--hard` just move the pointer, discard all the changes
- `HEAD~1` one commit before current HEAD pointer

The result is something like this:

![Result of resetting main branch](https://qjuanp.dev/assets/posts/2021-09-27-git-deal-with-rejected-changes-over-protected-branches/step-2-result.png)

## Push your feature branch and create a PR

Now you can push your changes under the new branch:

`git push origin [feature-branch]`

And after that you will be able to create a PR to merge your changes with the main integration branch.
