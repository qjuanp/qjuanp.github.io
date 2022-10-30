

# Intro

Goal of this post is provide a quick look of the charastics and capabilities provided by Prometheus that made it so popular nowadays.

## What is prometheus?

Prometheus is a **tool to capture telemetry information** from applications, containers, servers and other key infraestructure components.

Having said that, there are other popular solutions in the same spectrum, so, what promethues offer differntly? to understand this, let's take a look how the tools in the telemetry spectrum usually works:

## Telemetry capture architectural pattern



Major components:

- Targets/sources
- Scraping agents
- Telemetry Capture servers



    







--- Ideas

- Describe highlevel architecture of other temeletry tools to describe the footprint covered by prometheus
- Pros and cons
    - const
        - Part of its strenght is also its weekness, the simplicity of this component makes that you will have to use additional components to define an entire observability stack
        - Can scale vertically but it
        - Short term data retention < depending of node capacity
- future work


- Uses cases
    - Network restrictions
        - uses HTTP to pull metrics
- where not to use
    - Desktop applicaiton/movile applicaiton like
        - needs the exposure of and enpoint
        - target needs to be discoverable


- Outstanding questions
    - Horizontal scale
    - Metrics security
        - if metrics is exposed throguh HTTP, how the data can be transmited through secure channels, also, how can be determinaned who can access those endpoints?

----- Preliminar notes
What is prometheus

Monitor higly dynamic container environments
Also be used in non- container infrastruicture

Mainstreem monitoring tool for container & microservices infraestructure

Where and why is prometheus used?

Why?
- Complex infraestructure
    - Hardware
    - resources


Use cases
- reach resourcers limins in one of the servers that provde a particualr service, which produce a cascade effect in other dependant services
    - How to determine the cuase of a top error in the user face service?
    - constatly monitor all the services, alert when crash
    - identify problems before ocur???
        - monitore resourcers and applicaitons > report risk alert
        - resources limits can be provided
        - network load monitoring


Architecture

- Prometheus servier
    - Time series database
    - Data retreval worker -> pooling metris from application, services, servers, pushing data into storage
    - HTTP Server that accept queries < Prometheus UI or Grafana or other tool
- Target: what is being monitred ( linux server), Apache server, single application, service like databases
    - units: 
        - CPU status
        - Memory
        - Request count
    - metric: a particular unit taken from a target
        - what is saved in database component
        - metrics entries: 
            - Type:
                - Counter: how many times X happened
                - Gauge: what is the current value of X now?
                - Histogram: How long or how big?
            - Help attributes


Pull metrics from target, 
- pulls from HTTP endpoint
- endpoint: hostaddress/metrics <- endpoint that should be exposed
- mus be in a format understandable by prometheus

Exporter
If a service doesn't expose the metrics endpoint by default
Script/ service that fetch data from target, convert to correct format, exposes the metrics endpoints

Montirop a Linuz server -> node exporter
Availabe as a contaqiner -> sidecar

Monitor Applications
- How many requests
- how many exceptions
- Hoe many server resources used?
Used client libraries to collect this information and expose throguh /metrics

Pull mechanism vs push mechanism

Psuh -> application are responsable to send the metrics > high load trafic
- monitoring can become a bootleneck
- install additional software (agents)

Pull -> multiple prometheus instances can pull metrics data
- better detection/insight if service is up and running

What about short lived jobs
Push gateway -> send data to a temporary gateway and latter will be pulled by prometheus server

Configuratoin

How does prometheus know what to scrape and when?
All configuration goes throgub prometheus.yml
- Which targets
- what interval

Prometheus use a service discovery service to find those services

Rules to creeate new time series entries and creaate alerts


Alerts
- Component: alert manager
    - read the alert rules, read the condition, send data to the notification channler

Storage
Store in Disk -> On dist Time
 - Remote Storage System
 custom Time Series format


PromQL

Learning Curve:
- PromQL
- Configuration
- Grafana Dashboards

Example configuration

Key characteristics
PROS
- Reliable -> even with another services are down
- Stand-alone and selft contained -> -> doesn't depned upon other services, nor 
- Works, even if other parts of infraestructure are broken
- no extensive setup needed
- less complex -> doesn't depend upon agents nor other infraesrtucture

const
- dificult to scale -> own storage, definition of scraping configurations per instance
- limit number of metrics monitoring

Resources:
- https://youtu.be/h4Sl21AKiDg