---
title: "The Protocol That Trusts Everyone: DHCP and Network Security"
description: How DHCP works, 3 potential vulnerabilities and protections to solve that.
pubDate: 2026-10-29
tags:
  - cybersecurity
  - DHCP
  - networking
draft: false
---
Every time your laptop joins a hotel, airport or office Wi-Fi, it asks a stranger how to reach the internet and does exactly what it is told. That stranger is a DHCP server. Most of the time it is the real router. Sometimes it is not.

DHCP is one of the most useful protocols on any network, and one of the least protected. Today while doing my 90-day cybersecurity upskilling challenge I learnt about DHCP, and decided to go a step further by understanding its vulnerabilities and how we can mitigate them as users. 

## How DHCP works, in 30 seconds

When a device joins a network (such as "Airport Free WiFi"), it has no address and no idea where anything is. It gets both through a four-step exchange known as DORA (Discover, Offer, Request and Acknowledge):

1. **Discover:** the device broadcasts "Is there a DHCP server here?" to everyone on the local network.
2. **Offer:** a server replies with an IP address it can use.
3. **Request:** the device asks to keep that address.
4. **Acknowledge:** the server confirms, and sends the device **two very important settings**: the *default gateway* and the *DNS server*. The default gateway is like an exit door: it’s the device that routes your traffic outside your local network. The DNS server turns domain names like [google.com](http://google.com) into the IP addresses computers actually use.

Here is the weak spot. DHCP has no built-in authentication. The device accepts the first answer it gets, from whoever sends it. **Whoever controls that answer decides where your traffic goes.**

## Attack 1: The rogue DHCP server

Imagine a person in a shared office who connects a laptop to an empty network port and starts a fake DHCP server. When your device sends its Discover message (see step 1 from the section above), both the real router and the attacker's laptop receive it, and both answer. If the attacker answers first, your device uses the attacker's settings.

The fake settings say that the attacker's laptop is your gateway, and often your DNS server too. Now all your traffic goes through the attacker's computer before it reaches the internet. This is called a man-in-the-middle attack. The attacker can read any data that is not encrypted, see which websites you visit, or send you to fake websites that copy real login pages.

Not every rogue server is an attack. In many offices, an employee connects a home router to get more network ports. The router's own DHCP server starts giving out wrong settings, and some people on the floor lose their connection. It is the same problem, but by accident ([Firewall.cx](https://www.firewall.cx/cisco/cisco-switches/understanding-dhcp-snooping-concepts-and-how-it-works.html)).

## Attack 2: DHCP starvation

A DHCP server has a limited pool of addresses, often a few hundred. In a starvation attack, one device floods the server with thousands of requests, each pretending to come from a different device by using a made-up hardware (MAC) address. The server reserves an address for every fake device until the pool is empty. Real users who join next get nothing and cannot connect ([SecureW2](https://securew2.com/blog/dhcp-starvation-attacks)).

Free, open-source tools such as Yersinia automate this in a single command. On Wi-Fi, where hundreds of devices often share one address pool, a single compromised phone can stop new connections for an entire floor.

Starvation is rarely the end goal. It is usually step one: once the real server has nothing left to give, the attacker switches on a rogue server and becomes the only one answering to new incoming devices. The outage clears the field for Attack 1 (Rogue DHCP server).

## Attack 3: TunnelVision, when your VPN stops protecting you without telling you

Many people believe that a VPN makes public Wi-Fi safe, because a VPN encrypts your traffic and sends it through a protected connection, often called a tunnel. In May 2024, two researchers at Leviathan Security, Dani Cronce and Lizzie Moratti, showed that an attacker can use DHCP to get around this protection. They called the technique TunnelVision, and it is officially registered as the vulnerability CVE-2024-3661. The attacker does not need to break the VPN's encryption at all ([Help Net Security](https://www.helpnetsecurity.com/2024/05/08/tunnelvision-cve-2024-3661/)).

To understand the attack, you need to know about routes. Every device keeps a routing table, which is a list of rules that decides which connection each piece of traffic should use. When you turn on a VPN, it adds a rule that says: send all traffic through the encrypted tunnel. DHCP has an official feature called option 121, created in 2002, that allows a DHCP server to add its own rules to this list. In a TunnelVision attack, a rogue DHCP server uses option 121 to add rules that are more specific than the VPN's rule. Devices always follow the most specific rule, so your traffic no longer goes into the tunnel. Instead, it travels over the normal Wi-Fi connection, without the VPN's encryption, and passes through the attacker's computer ([Zscaler](https://www.zscaler.com/blogs/security-research/cve-2024-3661-k-tunnelvision-exposes-vpn-bypass-vulnerability)).

The most worrying part is that the user sees nothing wrong, because the VPN app still shows that it is connected. Websites that use HTTPS (the padlock in your browser) are still encrypted, so the attacker cannot read what you send to them, but the attacker can see which websites you visit. Websites that use plain HTTP, without the padlock, can be read completely. The attack worked on Windows, macOS, Linux and iOS. Android was not affected, because it does not support option 121.

The researchers gave practical advice for people who travel. Be careful with Wi-Fi networks in hotels, cafés and airports, because you do not know who else is connected to them. When you work with sensitive information, use your phone's personal hotspot instead. On your own hotspot, your phone is the DHCP server, so a stranger cannot send fake settings to your laptop.

## How to defend against all three

The good news is that companies can block all three attacks, and the tools they need are already built into most business network switches. A switch is the device that connects the computers, printers and Wi-Fi access points in an office using cables. Each cable goes into a numbered socket on the switch, called a port.

- **DHCP snooping.** The network administrator tells the switch which port the real DHCP server is connected to and marks that port as trusted. If DHCP server messages arrive from any other port, the switch blocks them, so the offers from a rogue DHCP server never reach anyone ([NetworkAcademy.io](https://www.networkacademy.io/ccna/network-security/dhcp-snooping)). This also stops the fake routes used in TunnelVision. However, this feature is turned off by default on many switches, so an administrator must activate it.
- **Port security and rate limiting.** In a starvation attack, one laptop pretends to be thousands of different devices. Port security sets a maximum number of devices that can use one port, and rate limiting sets a maximum number of DHCP requests that one port can send in a short time. Together, they stop a single laptop from using up all the available addresses.
- **802.1X network access control.** 802.1X is a standard that requires every device to prove its identity, for example with a company certificate or a login, before the network accepts any traffic from it. An unknown laptop cannot even ask for an IP address, so it cannot start any of these attacks.
- **VPN protection.** Many modern VPN apps can block any traffic that tries to leave the computer outside the encrypted tunnel, which protects against TunnelVision. Keep your VPN app updated, and ask your VPN provider whether it protects against TunnelVision.

For individuals, three simple habits help a lot. First, treat public Wi-Fi as unsafe, because you do not know who else is connected to it. Second, use your phone's personal hotspot when you work with sensitive information. Third, keep your computer, phone and VPN app updated, because updates often fix security problems like these.

## The takeaway

DHCP was designed in a more trusting era: answer quickly, and believe the answer. That trust is exactly what attackers exploit, whether by impersonating the router, draining its addresses or quietly steering traffic around a VPN. Security is not only about strong passwords and encryption. It also depends on the small, invisible protocols that decide where your data goes in the first place.

## Sources

- [Attackers may be using TunnelVision to snoop on users' VPN traffic](https://www.helpnetsecurity.com/2024/05/08/tunnelvision-cve-2024-3661/), Help Net Security
- [CVE-2024-3661, a.k.a. TunnelVision, Exposes a VPN Bypass Vulnerability](https://www.zscaler.com/blogs/security-research/cve-2024-3661-k-tunnelvision-exposes-vpn-bypass-vulnerability), Zscaler ThreatLabz
- [DHCP Starvation Attacks: How They Work and How to Stop Them](https://securew2.com/blog/dhcp-starvation-attacks), SecureW2
- [Understanding DHCP Snooping Concepts](https://www.firewall.cx/cisco/cisco-switches/understanding-dhcp-snooping-concepts-and-how-it-works.html), Firewall.cx
- [DHCP Snooping](https://www.networkacademy.io/ccna/network-security/dhcp-snooping), NetworkAcademy.io

