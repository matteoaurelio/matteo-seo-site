---
title: "One IP Address, Many People: What NAT Means for Your Analytics and Ads"
description: How NAT lets many devices share one public IP, and why that quietly breaks GA4 IP filters, Google Ads IP exclusions, server-side tracking and location reports.
pubDate: 2026-10-31
tags:
  - cybersecurity
  - NAT
  - networking
  - analytics
  - Google Ads
draft: false
---
Many marketing tools quietly assume that one IP address means one person, or one office. GA4 internal traffic filters work this way. So do Google Ads IP exclusions, fraud rules and "which company visited my site?" tools. Network Address Translation (NAT) is the main reason that assumption is wrong.

NAT was the next protocol in my 90-day cybersecurity upskilling challenge. I want to understand how it works, but also what it changes in the data I use every day. The new terms in this article are explained with the same example in the [cybersecurity glossary](/cybersecurity/glossary/).

## The problem NAT solves

Every device on the internet needs an address so that data can reach it. The original system, **IPv4**, has about 4.3 billion addresses. That sounded like a lot in the 1980s. Today there are far more phones, laptops, TVs and cameras than addresses.

NAT is the workaround. It lets many devices on a private network share a single public address. Almost every home and office router does it, and you have probably never noticed.

## Public and private addresses

A **public IP address** is assigned by your Internet Service Provider (ISP). It is unique in the world, and any device on the internet can send data to it. For example, 8.8.8.8 is Google's public DNS server.

A **private IP address** is reserved for local networks such as homes, offices and schools. Internet routers do not forward traffic to these addresses, so the same numbers can be reused in millions of homes without conflict. The reserved ranges are defined in RFC 1918:

| Range | CIDR notation | Typical use |
|---|---|---|
| 10.0.0.0 to 10.255.255.255 | 10.0.0.0/8 | Large company networks |
| 172.16.0.0 to 172.31.255.255 | 172.16.0.0/12 | Medium networks, cloud providers |
| 192.168.0.0 to 192.168.255.255 | 192.168.0.0/16 | Home routers |

There is a third category that most explanations skip. **Shared address space** (100.64.0.0/10) is reserved for ISPs that run their own NAT on top of yours. This is called **carrier-grade NAT (CGNAT)**, and it matters a lot for marketing data ([RFC 6598](https://www.rfc-editor.org/rfc/rfc6598)).

## How NAT works: one home, three devices

Imagine a home with three devices:

- a laptop at 192.168.1.10
- a phone at 192.168.1.11
- a game console at 192.168.1.12

The router has two sides. Its **LAN** side faces the home and has the private address 192.168.1.1. Its **WAN** side faces the internet and has the public address 203.0.113.50. (Addresses starting with 203.0.113 are reserved for examples like this one, so it never belongs to a real person.)

Now the laptop opens google.com:

1. **The laptop sends a packet.** Every packet has a header, like the label on a parcel. This one says: from 192.168.1.10, port 5555, to Google's server 142.251.46.174, port 443.
2. **The router rewrites the label.** It replaces the source with its own public address and a new port: 203.0.113.50, port 4444. It writes this change in its **NAT table**.
3. **Google replies to the router.** Google only ever sees 203.0.113.50. It has no idea a laptop exists.
4. **The router looks up its table and delivers the reply.** It sees that port 4444 belongs to the laptop, rewrites the destination back to 192.168.1.10:5555 and passes the packet on.

With all three devices online, the NAT table looks something like this:

| Inside (private) | Outside (public) | Talking to |
|---|---|---|
| 192.168.1.10:5555 (laptop) | 203.0.113.50:4444 | 142.251.46.174:443 (Google) |
| 192.168.1.11:6000 (phone) | 203.0.113.50:4445 | 198.51.100.20:443 (social app) |
| 192.168.1.12:7000 (console) | 203.0.113.50:4446 | 198.51.100.30:443 (game server) |

This is the most important point in the article: **from the outside, all three devices are one address.** The router tells their conversations apart only by port number, and websites never see those inside details.

## Types of NAT

| Type | How it works | Where you meet it |
|---|---|---|
| Static NAT | One private address always uses the same public address. | Servers that must always be reachable at the same address. |
| Dynamic NAT | Private addresses borrow a public address from a pool when they need one. | Some company networks. |
| PAT (NAT overload) | Many devices share one public address, separated by port numbers. | Almost every home and small office router. |
| Carrier-grade NAT | The ISP does PAT for many customers at once, on top of your router's NAT. | Mobile networks and many broadband providers. |

## Two common misunderstandings

**NAT lets you out, but it does not let the internet in.** When a packet arrives that matches nothing in the NAT table, the router does not know which device should receive it. To run a camera, a server or a remote desktop at home, you have to create a **port forwarding** rule: "send traffic on port 8080 to 192.168.1.20". From that moment, anyone on the internet can knock on that door. A feature called **UPnP** lets devices create these rules themselves, without asking you.

**NAT is not a firewall.** NAT often gets credit for security, but the protection comes from the router's **stateful firewall**, which remembers which conversations started inside and drops unexpected traffic from outside. NAT and the firewall usually run on the same box, so they are easy to confuse. The difference matters with IPv6, which usually has no NAT at all: the firewall alone does the job.

NAT also has costs. Hosting anything at home needs extra setup. Some protocols that expect a direct connection between devices need special handling. Troubleshooting gets harder, because one public address hides many devices. With carrier-grade NAT, port forwarding is usually impossible, and when one customer behaves badly and gets the shared address blocked, everyone who shares it is blocked too ([Wikipedia: Carrier-grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT)).

## Why this matters for analytics and marketing

Every website, ad platform and analytics tool sees only the public address. Behind that address could be one person, a family, an office of 200 people, or hundreds of mobile customers behind carrier-grade NAT. In the other direction, the same person shows up with a different address on home Wi-Fi, on mobile data and on a VPN.

> Your tools see the router, not the person.

Here are five places where this quietly changes your numbers.

### 1. Your GA4 internal traffic filter may have stopped working

GA4 lets you mark traffic from an IP address or range as internal and filter it out of your reports ([Google Analytics Help](https://support.google.com/analytics/answer/10104470)). It is the first thing most setup guides tell you to do. The problems start later:

- **Dynamic addresses.** Many home and small office connections get a new public address from the ISP from time to time, for example after a router restart. The filter keeps matching the old address, and your own visits flow back into the reports.
- **Remote and mobile teams.** The moment your team works from home, a café or a phone, their traffic comes from addresses you never entered.
- **IPv4 and IPv6.** Your device might reach your site over IPv6 even though you entered your IPv4 address. A rule in one format does not match the other.
- **Shared addresses.** If your office connection is behind carrier-grade NAT, the address you exclude may also belong to other customers of your ISP. If they visit your site, they disappear from your data too.

**What to do instead:** label internal traffic with something you control rather than the network. A common approach is to set a first-party cookie for your team, for example by visiting a private URL once, and use Google Tag Manager to send `traffic_type=internal` when that cookie is present. GA4's internal traffic filter uses the same `traffic_type` parameter, so the filter keeps working wherever your team connects from. Keep the filter in Testing mode for a week and compare before you activate it.

### 2. Google Ads IP exclusions are a blunt tool in a shared-address world

Google Ads lets you stop specific IP addresses from seeing your ads. You can exclude up to 500 addresses per campaign, and exclusions are not available for Performance Max, video, app, hotel or Smart Display campaigns ([Google Ads Help](https://support.google.com/google-ads/answer/2456098)).

Picture a competitor clicking your ads from their phone. You find the address and exclude it. Two things go wrong. That address probably belongs to a mobile carrier's NAT, so you may have just hidden your ads from many real customers who share it. And the competitor gets a new address the next time their phone reconnects, so the exclusion does not stop them anyway.

**What to do instead:** use IP exclusions for addresses that are stable and clearly not customers, such as your own office's fixed address or a partner agency. For repeated invalid clicks, look at patterns (time of day, placement, location, device) rather than single addresses, and report invalid clicks to Google.

### 3. Server-side tracking: your server becomes the NAT

When you move tracking to server-side Google Tag Manager or the Meta Conversions API, the request that reaches Google or Meta no longer comes from the visitor's browser. It comes from your server. Your server is now doing what the router does in a NAT: it hides every visitor behind its own address.

Meta asks for the visitor's address in the `client_ip_address` field, and provides libraries to help collect it ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/parameter-builder-feature-library/)). If your setup does not read the original address from the request headers (usually `X-Forwarded-For`), it sends the server's address instead. Every event then looks like it came from the same place, and matching gets worse. The fix is technical, but the check is simple: look at a few outgoing events. If `client_ip_address` is the same for different visitors, it is your server, not your customers ([Aimerce](https://www.aimerce.ai/blogs/what-the-meta-i-pv6-warning-means-for-some-events)). Also, do not shorten the address in data you send to Meta: Snowplow's documentation notes that Meta rejects a truncated IP as invalid ([Snowplow docs](https://docs.snowplow.io/docs/destinations/forwarding-events/integrations/meta-conversions/)).

One caution: an IP address counts as personal data under GDPR. Forward it only where your consent setup allows it.

### 4. City reports show where the connection appears to be, not the person

GA4 does not store IP addresses. It uses them briefly to estimate location, then discards them. For EU, Swiss and UK traffic, the address is dropped before the data is logged ([Google Analytics Help](https://support.google.com/analytics/answer/12017362)).

That location estimate is only as good as the public address. On mobile networks and behind carrier-grade NAT, the public address can be registered to a different city from the one the customer is standing in. Privacy services make it less precise again: geolocation databases map iCloud Private Relay addresses only to a rough city or region ([MaxMind](https://blog.maxmind.com/data-updates-for-apple-icloud-private-relay/)), and one study found location errors of up to thousands of miles for some Private Relay users ([arXiv](https://arxiv.org/abs/2307.04009)).

**What to do instead:** for budget decisions, trust country and region more than city. If local demand matters to your business, for example for a plumber who serves three towns, ask for it directly: a postcode field in the booking form beats any IP lookup. And never redirect visitors to a country version of your site based on IP alone. I wrote more about that in [country domains vs one multilingual site](/journal/2026-10-29-country-domains-vs-one-multilingual-site-when-each-pays-off/).

### 5. "Which company visited my site?" tools

B2B visitor identification tools take the public address and look up which company owns it. That works when people browse from an office network that the company owns. It works much less well for remote work, VPNs and mobile traffic, which all hide the employer behind a consumer ISP's address ([Leadfeeder](https://www.leadfeeder.com/guides/website-visitor-identification/)). Treat a company match as a hint for sales, not as proof of who was on the page.

## A quick checklist

- **GA4:** check that the address in your internal traffic rule is still yours, then move to a cookie-based `traffic_type` label.
- **Google Ads:** review your IP exclusions and remove mobile or shared addresses. Keep only stable ones you are sure about.
- **Server-side tracking:** confirm that `client_ip_address` contains each visitor's address, not your server's.
- **Location:** report on country and region by default. Collect a postcode where local demand matters.
- **Rules and redirects:** never block, redirect or score a visitor on IP address alone.
- **Your own network:** turn off UPnP on your router if you do not need it, and delete port forwarding rules you no longer use.

## The takeaway

An IP address identifies a connection to the internet, not a person. NAT is the reason: it was built to let many devices hide behind one address, and it does that job well. The security lesson and the marketing lesson are the same: the address you see is the router's, so any rule built on it should be treated as an estimate.

## Sources

- [RFC 1918: Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918), IETF
- [RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space](https://www.rfc-editor.org/rfc/rfc6598), IETF
- [RFC 3022: Traditional IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc3022), IETF
- [Carrier-grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT), Wikipedia
- [Filter out internal traffic](https://support.google.com/analytics/answer/10104470), Google Analytics Help
- [EU, Switzerland, or UK-focused data and privacy](https://support.google.com/analytics/answer/12017362), Google Analytics Help
- [Exclude IP addresses](https://support.google.com/google-ads/answer/2456098), Google Ads Help
- [Parameter Builder Library](https://developers.facebook.com/docs/marketing-api/conversions-api/parameter-builder-feature-library/), Meta for Developers
- [Forward events to Meta Conversions API](https://docs.snowplow.io/docs/destinations/forwarding-events/integrations/meta-conversions/), Snowplow
- [What the Meta IPv6 warning means for some events](https://www.aimerce.ai/blogs/what-the-meta-i-pv6-warning-means-for-some-events), Aimerce
- [Data updates for Apple iCloud Private Relay](https://blog.maxmind.com/data-updates-for-apple-icloud-private-relay/), MaxMind
- [Internet Localization of Multi-Party Relay Users](https://arxiv.org/abs/2307.04009), arXiv
- [What is website visitor identification?](https://www.leadfeeder.com/guides/website-visitor-identification/), Leadfeeder
