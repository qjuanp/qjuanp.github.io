---
layout: post
title: "MacOS Big Sur - Apple M1 - Development Setup"
categories: [notes]
tags: [development, configuration]
---

## Brew

Brew has support now for M1 chip, although it introduce some changes on its structure.

`HOMEBREW_PREFIX: /opt/homebrew`

In orther to enable M1 commands installed through `brew` following line should be added to `.zshrc`

`export PATH=/opt/homebrew/bin:$PATH`

## Git

Just run `brew install git` after restart the terminal it should be using the most updated version of git