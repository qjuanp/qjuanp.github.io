# Network device discovery and analysis

The goal of this post is determine the set of tools and processing needed to determine which devices are connected to a particular network and lookup for possible vulnerabilities.

> This is purly experimental and oriented to learn more about netoworking and security. I don't considere my self an expert in this field so, plese let me know if something can be improved in this note -> @qjuanp

Saying that, let me dig into the specific intentions around the tools and experiments, I want to:

- Identify devices connected in the network (wire or wireless connection).
- Asses device capabilities, which functionalities offer an specific device.
- Determine device vulnerabilitie, are those functionalities exposed in a safe maner.

This activities can be related with more advanced security technique like Penetration Test (Pentest).

> Pentest _def._ Security testing in which evaluators mimic real-world attacks in an attempt to identify ways to circumvent the security features of an application, system, or network. Penetration testing often involves issuing real attacks on real systems and data, using the same tools and techniques used by actual attackers. Most penetration tests involve looking for combinations of vulnerabilities on a single system or multiple systems that can be used to gain more access than could be achieved through a single vulnerability. [NIST.SP.800-115]

## Process

```mermaid
graph td

```


## Tools

zmap -> 
- scan public internet, mostly ports 80/443
- discovery http servers or specific services, it should be known the ports beforehand


nmap
- lacks of accuracy to identify devices



## Running experiment

Host discovery:

- List wich Ips will be scanning, not proper scan run:

`nmap <IPS> -sL`

- List of host, FYI it doesn't discover all the hosts

`nmap <IPs> -sn` 

- ARP ping scan technique

`nmap -sP -PR 192.168.1.1/24`

Looking in local network for HTTP servers

`zmap 192.168.0.0/24 -p 80 -o test.csv`

Looking in local network for HTTPS servers

`zmap 192.168.0.0/24 -p 443 -o test-https.csv`

`nmap -A` -> guessing OS

## Processing data

## Test results and report

# Resources


- https://rafed.github.io/devra/sections/security-tools-cheatsheet/nmap-cheatsheet/
- https://cloudsek.com/pen-testing-iot-devices-for-vulnerabilities/

- https://www.esecurityplanet.com/products/best-penetration-testing/ resource shared by yurynino in ColombiaDev
- https://github.com/Muhammd/Awesome-Pentest resource shared by yurynino in ColombiaDev

[NIST.SP.800-115]: https://doi.org/10.6028/NIST.SP.800-115 "Technical Guide to Information Security Testing and Assessment - National Institute of Standards and Technology (NIST)"