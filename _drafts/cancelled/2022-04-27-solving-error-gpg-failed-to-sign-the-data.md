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

It took me some time to solve this issue because configure gpg is something that I always forget how to do it and basically I needed to go again and understand the relationship between all the commands and sequence involved, applications and config files impacted, so, the git command could sign every single commit automatically with my gpg key.

After some stackoverflow and gist finds<sup>[[1]][git - gpg onto mac osx: error: gpg failed to sign the data] [[2]][Git error - gpg failed to sign data] [[3]][fixing `gpg failed to sign data` error on macOS]</sup> I could undestand what was happening.

The most important command to debugg git-gpg configuration is:

`echo "test" | gpg --clearsign`

The command will give you the following output if gpg is properly configured:

![Command `echo "test" | gpg --clearsign output`](../assets/2022-04-27-solving-error-gpg-failed-to-sign-the-data/echo-test-gpg-sign.png)

If gpg is properly configured, go for git configuration, you can review following links:

- [git - gpg onto mac osx: error: gpg failed to sign the data]
- [Git error - gpg failed to sign data]

If not, you will need to check what is wrong with gpg as in my case.

## Configuring back gpg

The steps to configure gpg could be summirized as follows:

- Installation of gpg and other tools like pinentry
- Setup GPG_TTY variable

An the remaining steps are more at key setup and git configuration.

So, I did what anyone in tech world would do: restart the laptop... reinstall... and retry....

Hoever, nothing of this worked. (not a surprise)

The issue was hidden, it worked the week before and just stoped to work the following week.

I tried step by step the configuration, and there was a particular step that got my attention:

GPG_TTY variable is usually set as follow:

`export GPG_TTY=$(tty)`

Which means -> evaluate tty command to get the terminal name and assign it to the environmental variable `GPG_TTY`.

Executing the command `tty` by itself was not a problem, it was returning the terminal name, however, trying to get the content of the variable `GPG_TTY` the response was not the same


not a tty

profile vs bashrc
zprofile vs zshrc





[git - gpg onto mac osx: error: gpg failed to sign the data]: https://stackoverflow.com/questions/41502146/git-gpg-onto-mac-osx-error-gpg-failed-to-sign-the-data "StackOverflow"

[Git error - gpg failed to sign data]: https://stackoverflow.com/questions/41052538/git-error-gpg-failed-to-sign-data "StackOverflow"

[fixing `gpg failed to sign data` error on macOS]:https://gist.github.com/cezaraugusto/2c91d141ddec026753051ffcace3f1f2 "Gist"