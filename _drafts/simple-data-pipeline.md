---
layout: post
title: "Data Pipeline - Kafka -> HDFS/Hive"
categories: [community]
tags: [reactive spanish]
---

This is part of my experience building up a development environment to test different components to move data from apps into HDFS/Hive.

This is all the details behind the repo: 

# Infraestructure

## HDFS/Hive

First challenge is have HDFS and Hive installed.

** Meme Doggy remembering old dates

This triggers some memories of that time in my post grade trying to bring up Hadoop, I had to suffer compiling that for Windows, those days were different, Docker was not what is nowadays, and I was tied to windows, so, compile was the only option that I found to have it in my dev environment.

Fortunetly, those days are in the past. Today we can find open repos with complete infraestructure definition with Docker Compose with all the required components.

That's the case of [Bid Data Europe]() community [repository in Github](https://github.com/big-data-europe), it has some docker images defining the main building blocks around big data with HDFS and other components around it.

But, seems to be not maintained in a long time, but (doble negation!) there is a healthy community out there, and it's the case of contributor [Sebastian Nagel](https://github.com/sebastian-nagel/) that is (unofficially) maintaining some of the images defied by BDE, at least the version :D.

With both repositories I was able to define following components:

- Namenode
- Datanode
- Hive
- Hive metastore
- Hive metastore postgres

### Challenges

- Java version
One of the things I tried is bring up some of the components working on top of Java11, just because... unfortunetly, Hive doesn't like newer Java versions and everything blows up

- DNS names, containers names and network configuration
Errors with docker compose contianers naming convention and some rules around URI

- Visualize content in Hive
all glory to DBeaver that contains Hive connector out-of-the-box.

## Kafka

### Basic Kafka infraestructure

For the development environment I'm trying to build, there is not need, at least initially, to have multiple kafka nodes, with just one it's enough.

There is a thon of kafka images out there, all of them with their own flavors, but, the most stable and up-to-date ones are the docker images built by [Confluent inc]().

- zookeper
- broker

- schema register
- connect

### Challenges

- M1
Guess who doesn't have support yet for M1(arm64) chips? this processero architecture is not in sight of Kafka

- 6GB RAM for Docker 
By default, docker installation has configured 2GB share of our RAM for virtualization propoueses, but, as stated by Confluent documentation [***Search this](), it is required 6GB, and don't try otherwise, you will be full of errors and 


# Producing messages

## Simple messages

Instead of using the kafka producer, I decided to create an small application just to send messages throguh kafka, that will be finally send to HDFS and Hive.

### Challenges

- .NET 6 cannot send messages to kafka

I started the application with C#10 over .NET (dotnet) 6, unfortunetly, [currently is not supported communication with kafka][commit-remove-dotnet-6] (there is a workaround that is use .NET 6 x64 over Rosseta 2)



[commit-remove-dotnet-6]: https://github.com/qjuanp/data-pipeline/commit/0012bb3a9e1f3ebf9d359640d53474d333ea8fb2


- Schemas and Topics

One of the requirements for structured sink connectors is to have a topic with a defined schema

    - library in kafka seems not support nativelty this, looking for a workaround to solve this