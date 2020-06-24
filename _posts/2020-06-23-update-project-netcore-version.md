---
layout: post
title: "Update project netcore version"
categories: dotnet dotnet-core
---

# Update project netcore version

> These are just notes for my future-self

Updating `Mde.Net.Reactive` project from dotnetcore 2.1 to latest dotnet core stable version (at this date: 3.1)

## Install dotnet sdk

You could use following ways to do so from cli:

- [Chocolatey](https://chocolatey.org/packages/dotnetcore-sdk#versionhistory)
    - Latest version `choco install dotnetcore-sdk`
    - Specific version `choco install dotnetcore-sdk --version=2.1.807`
- [dotnet-install scripts](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script)
    - Latest version `dotnet-install.sh --channel Current`
    - Specific version `dotnet-install.sh --channel 2.1`

> 👀 MacOS/Linux: You will need to validate if you have your dotnet sdk installation folder registered in the `PATH` 

## Update TargetFramework

This is the simplest step: Change for the `*.csproj` files following parameter to `netcoreapp3.1`


```xml
<TargetFramework>netcoreapp3.1</TargetFramework>
```

## Upgrade dependencies

Unfortunately, dotnet cli doesn't have an integrated tool to update all dependencies, so, in this case it'd be useful an external tool like [`Nukeeper`](https://nukeeper.com/)

> Install `dotnet tool install nukeeper --global`

Update all packages `nukeeper update`

## commit & push!

🙆‍♀️🎉 All set, project is already upgraded!