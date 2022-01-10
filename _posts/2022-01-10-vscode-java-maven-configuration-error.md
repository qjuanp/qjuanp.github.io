---
layout: post
title: "VSCode-Java Maven configuraiton error"
categories: [notes]
tags: [development, configuration, java, maven]
---

There is no day that I not face a "funny" error developing in Java, saying that, it's not my intention generate drama nor a new whole discussion Java vs The world.... this error is merly product of my ignorance in java and the composability you could find in this development ecosystem (coff coff Msft!).

Joke aside, I found myselft in a "particular" scenario:

> When I run the cli command `mvn clean compile` project simply compile perfectly!, even the tests were running without a problem. But, when I opened up the project in a VSCode, the compiler went crazy and it was just saying that the project has a ton or compilation errors, errors like:

- "Failed to read artifact descriptor for..."
- "Missing artifact..."

VSCode-Java uses under the hood the same tools, java and maven, to verify the sources and bring us information during development, so, how can be possible get two different results if, under the hood, are basically the same tooling?

> This error can come up with certain packages available in **private repositories**.

The problem is basically that VSCode-Java/Maven tool is not able to find the default settings that are commonly stored in `~/.m2/settings.xml` or `%USER_PROFILE%\.m2\settings.xml` where the private repositories for maven are configured.

This can be specified using the VSCode setting entry:

Windows: `"java.configuration.maven.userSettings": "C:\\Users\\<UserName>\\.m2\\setttings.xml",`

> Or pointing to the specific settings.xml location that you are using for private repos.

Hope that it helps!

## References

- [redhat-developer/vscode-java#1232](https://github.com/redhat-developer/vscode-java/issues/1232)
- [redhat-developer/vscode-java#1365](https://github.com/redhat-developer/vscode-java/issues/1365)