---
layout: post
title: "Solving: \"error: gpg failed to sign the data\""
categories: [notes]
tags: [zsh, configuration, gpg, git]
---

For a year now I've been using gpg to sign all my commits into github, but for some reason, a couple of days ago I started to recieved the following error when I was trying to create any signed commit with git:

`error: gpg failed to sign the data`

![The frustration](https://media.giphy.com/media/PmRgaD2xj0KH2pPrVF/giphy.gif)

So, I did what every gpg user genouis does in this situation...

![Google it!](https://media.giphy.com/media/J1lngEUKg9wM6Hr3eL/giphy.gif)

... but in DuckDuckGo 👀

So, this took me some time to solve this issue because configure gpg is something that I always forget how to do it and basically I need to go again and understand the relationship between all the commands involved, applications and config files impacted so the git command sign every single commit automatically with my gpg key. (Google made me dumb).

The most important command to understand what is happening is:

`echo "test" | gpg --clearsign`

The command will give you the following output if gpg is properly configured:

![Command `echo "test" | gpg --clearsign output`](../assets/2022-04-27-solving-error-gpg-failed-to-sign-the-data/echo-test-gpg-sign.png)

...and in this case proceed with the recommendations in the following links that I used to understand what was happening:

- [git - gpg onto mac osx: error: gpg failed to sign the data]
- [Git error - gpg failed to sign data]

**If NOT**, as in my case, you will need to dig



[git - gpg onto mac osx: error: gpg failed to sign the data]: https://stackoverflow.com/questions/41502146/git-gpg-onto-mac-osx-error-gpg-failed-to-sign-the-data "StackOverflow"

[Git error - gpg failed to sign data]: https://stackoverflow.com/questions/41052538/git-error-gpg-failed-to-sign-data "StackOverflow"

[]:https://gist.github.com/cezaraugusto/2c91d141ddec026753051ffcace3f1f2