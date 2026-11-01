// Glossary for the /cybersecurity/glossary/ page.
// Each group uses one running example so the terms build on each other.
//
// Network terms use one home network behind a router that does NAT:
//   Laptop    192.168.1.10
//   Phone     192.168.1.11
//   Console   192.168.1.12
//   Router    LAN 192.168.1.1  |  WAN (public) 203.0.113.50
// 203.0.113.0/24 is reserved for documentation (RFC 5737), so the public
// address in the example never belongs to a real person.
//
// Content Security Policy terms use an online shop that runs Google Ads.
//
// To add a term: add an object to the right group. The glossary page,
// its index and its structured data update automatically.

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  inTheExample: string;
  forMarketers?: string;
}

export interface GlossaryGroup {
  slug: string;
  title: string;
  intro: string;
  terms: GlossaryTerm[];
}

export const natExample = {
  devices: [
    { name: "Laptop", ip: "192.168.1.10" },
    { name: "Phone", ip: "192.168.1.11" },
    { name: "Game console", ip: "192.168.1.12" },
  ],
  routerLan: "192.168.1.1",
  routerWan: "203.0.113.50",
};

export const glossaryGroups: GlossaryGroup[] = [
  {
    slug: "addresses",
    title: "Addresses",
    intro: "How devices are identified, inside the home and on the internet.",
    terms: [
      {
        slug: "ip-address",
        term: "IP address",
        definition:
          "A number that identifies a device's connection on a network, so data can be sent to it. Think of it as the delivery address written on every piece of data.",
        inTheExample:
          "The laptop's IP address is 192.168.1.10 inside the home. On the internet it is seen as 203.0.113.50.",
        forMarketers:
          "An IP address identifies a connection, not a person. Several people can share one, and one person can use several in a day.",
      },
      {
        slug: "ipv4",
        term: "IPv4",
        definition:
          "The original addressing system of the internet. It has about 4.3 billion addresses, which is not enough for every device in the world. NAT exists mainly because of this shortage.",
        inTheExample:
          "Every address in the example (192.168.1.10, 203.0.113.50) is an IPv4 address: four numbers between 0 and 255.",
      },
      {
        slug: "ipv6",
        term: "IPv6",
        definition:
          "The newer addressing system, with so many addresses that every device can have its own public one. IPv6 networks usually do not need NAT. A firewall does the protective job instead.",
        inTheExample:
          "If the ISP supports IPv6, the laptop may also get an address like 2001:db8::10 and reach some websites without NAT.",
        forMarketers:
          "The same visitor can arrive on IPv4 one day and IPv6 the next. An IP filter written for one format will not match the other.",
      },
      {
        slug: "public-ip-address",
        term: "Public IP address",
        definition:
          "A globally unique address assigned by an Internet Service Provider. Any device on the internet can send data to it.",
        inTheExample:
          "203.0.113.50 is the router's public address. It is the only address websites ever see from this home.",
        forMarketers:
          "This is the address your analytics, ad platforms and fraud tools see: the router's, not the device's.",
      },
      {
        slug: "private-ip-address",
        term: "Private IP address (RFC 1918)",
        definition:
          "An address reserved for local networks such as homes, offices and schools. Internet routers do not forward traffic to these addresses. The reserved ranges are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255.",
        inTheExample:
          "192.168.1.10, .11 and .12 are private. Millions of other homes use exactly the same numbers, and that is fine, because they never leave the home.",
      },
      {
        slug: "cgnat",
        term: "Carrier-grade NAT (CGNAT)",
        definition:
          "NAT done by the Internet Service Provider, on top of the NAT in your router. Many customers share one public address. ISPs use the range 100.64.0.0/10 (RFC 6598) between your router and their NAT.",
        inTheExample:
          "If the ISP used CGNAT, the router's WAN address would be something like 100.72.15.9, and 203.0.113.50 would be shared with hundreds of other homes.",
        forMarketers:
          "Mobile carriers use this widely. Block or exclude one CGNAT address and you may block hundreds of real customers.",
      },
      {
        slug: "cidr",
        term: "CIDR notation",
        definition:
          "A short way to write a range of addresses. The number after the slash says how much of the address is fixed. 192.168.1.0/24 means every address from 192.168.1.0 to 192.168.1.255.",
        inTheExample:
          "The whole home network can be written as 192.168.1.0/24.",
        forMarketers:
          "GA4 internal traffic rules and Google Ads IP exclusions both accept ranges, so you will meet this notation there.",
      },
    ],
  },
  {
    slug: "devices-and-traffic",
    title: "Devices and traffic",
    intro: "The pieces that move data between the home and the internet.",
    terms: [
      {
        slug: "isp",
        term: "ISP (Internet Service Provider)",
        definition:
          "The company that connects you to the internet and assigns your public IP address.",
        inTheExample:
          "The ISP gave the router 203.0.113.50. It can change that address, for example after a restart.",
      },
      {
        slug: "router",
        term: "Router",
        definition:
          "The device that connects one network to another and decides where each piece of data goes. Home routers also do NAT, run the firewall and hand out private addresses with DHCP.",
        inTheExample:
          "The router sits between the three devices and the internet, and every packet passes through it.",
      },
      {
        slug: "lan",
        term: "LAN (Local Area Network)",
        definition:
          "The private network inside a home or office. The router's LAN interface is the side that faces your own devices.",
        inTheExample:
          "The LAN is 192.168.1.0/24, and the router's LAN interface is 192.168.1.1.",
      },
      {
        slug: "wan",
        term: "WAN (Wide Area Network)",
        definition:
          "The network outside your home, starting with your ISP. The router's WAN interface is the side that faces the internet.",
        inTheExample:
          "The WAN interface carries the public address 203.0.113.50.",
      },
      {
        slug: "default-gateway",
        term: "Default gateway",
        definition:
          "The device your computer sends traffic to when the destination is outside the local network. It is the network's exit door. DHCP tells each device which gateway to use.",
        inTheExample:
          "Every device in the home uses 192.168.1.1 as its default gateway.",
      },
      {
        slug: "packet",
        term: "Packet",
        definition:
          "A small piece of data sent across a network. Web pages, emails and videos are all split into packets.",
        inTheExample:
          "When the laptop opens google.com, it sends packets to Google and receives packets back.",
      },
      {
        slug: "packet-header",
        term: "Packet header",
        definition:
          "The label on each packet. It includes the source address (who sent it) and the destination address (where it goes). NAT works by rewriting these labels.",
        inTheExample:
          "The laptop's packet leaves with source 192.168.1.10. The router changes the source to 203.0.113.50 before it goes out.",
      },
      {
        slug: "port",
        term: "Port",
        definition:
          "A number that identifies one conversation or service on a device, written after the IP address with a colon. Websites use port 443 for HTTPS.",
        inTheExample:
          "The laptop talks from 192.168.1.10:5555. The router represents that conversation as 203.0.113.50:4444.",
      },
    ],
  },
  {
    slug: "translation",
    title: "Translation",
    intro: "What NAT does and the different ways it can do it.",
    terms: [
      {
        slug: "nat",
        term: "NAT (Network Address Translation)",
        definition:
          "A router feature that rewrites the addresses in packet headers as they pass through. It lets many devices with private addresses share one public address.",
        inTheExample:
          "Three devices, one public address: from the outside the whole home looks like a single device at 203.0.113.50.",
      },
      {
        slug: "nat-table",
        term: "NAT table",
        definition:
          "The router's record of which inside device owns which outside conversation. Replies are matched against this table so they reach the right device.",
        inTheExample:
          "One line says 203.0.113.50:4444 belongs to 192.168.1.10:5555, so Google's reply goes to the laptop and not to the phone.",
      },
      {
        slug: "static-nat",
        term: "Static NAT",
        definition:
          "A fixed one-to-one mapping: one private address always uses the same public address. It is used when a server must always be reachable at the same public address.",
        inTheExample:
          "If the home had a second public address, 203.0.113.51, static NAT could reserve it permanently for the console.",
      },
      {
        slug: "dynamic-nat",
        term: "Dynamic NAT",
        definition:
          "Private addresses borrow a public address from a pool when they need one, and give it back afterwards.",
        inTheExample:
          "With a pool of 203.0.113.50 to .52, each device would take whichever public address was free.",
      },
      {
        slug: "pat",
        term: "PAT (Port Address Translation), or NAT overload",
        definition:
          "The most common form of NAT. Many devices share one public address, and the router tells their conversations apart by port number. Almost every home router works this way.",
        inTheExample:
          "Laptop, phone and console all use 203.0.113.50, each with different outside ports, for example 4444, 4445 and 4446.",
      },
    ],
  },
  {
    slug: "exposure-and-protection",
    title: "Exposure and protection",
    intro: "What can reach your network from the outside, and what stops it.",
    terms: [
      {
        slug: "port-forwarding",
        term: "Port forwarding",
        definition:
          "A manual rule that sends traffic arriving on a public port to one inside device. NAT lets traffic go out but not come in, so port forwarding is how you deliberately open a door.",
        inTheExample:
          "A rule could send 203.0.113.50:8080 to a security camera at 192.168.1.20. From then on, anyone on the internet can try to log in to that camera.",
      },
      {
        slug: "upnp",
        term: "UPnP (Universal Plug and Play)",
        definition:
          "A feature that lets devices create port forwarding rules on the router by themselves, without asking you.",
        inTheExample:
          "The console can open ports for online games automatically. Malware on the laptop could use the same feature.",
      },
      {
        slug: "stateful-firewall",
        term: "Stateful firewall",
        definition:
          "A filter that remembers which conversations started from inside and drops unexpected traffic from outside. This, not NAT itself, is what protects devices behind a router.",
        inTheExample:
          "If a stranger sends data to 203.0.113.50 and nothing inside asked for it, the router drops it.",
      },
    ],
  },
  {
    slug: "marketing-tools",
    title: "What your marketing tools see",
    intro: "Terms you meet when the NAT idea shows up in analytics and ad platforms.",
    terms: [
      {
        slug: "ip-geolocation",
        term: "IP geolocation",
        definition:
          "Estimating a visitor's location from their public IP address, using databases that map address ranges to places. It finds where the connection appears to come from, which is not always where the person is.",
        inTheExample:
          "Websites estimate the home's location from 203.0.113.50. The private addresses inside are never visible to them.",
        forMarketers:
          "GA4 location reports come from this. With CGNAT, mobile networks and privacy relays, the city in the report can be wrong.",
      },
      {
        slug: "proxy",
        term: "Proxy and X-Forwarded-For",
        definition:
          "A proxy is a server that makes requests for someone else, so the destination sees the proxy's address. X-Forwarded-For is a header where the proxy can write down the original visitor's address.",
        inTheExample:
          "A proxy behaves much like the router: it hides the laptop's details and shows its own address instead.",
        forMarketers:
          "In server-side tracking your server is the proxy. If it does not forward the visitor's IP, every event looks like it came from your server.",
      },
      {
        slug: "vpn-and-relays",
        term: "VPN and privacy relays",
        definition:
          "Services that send your traffic through their own servers, so websites see the service's address instead of yours. Apple's iCloud Private Relay is one example in Safari.",
        inTheExample:
          "With a VPN on, websites would see the VPN server's address instead of 203.0.113.50.",
        forMarketers:
          "Location, company lookup and IP-based exclusions get less accurate as more visitors use these services.",
      },
    ],
  },
  {
    slug: "content-security-policy",
    title: "Content Security Policy",
    intro:
      "The browser's guest list. These examples use an online shop that runs Google Ads and records a conversion on its thank-you page.",
    terms: [
      {
        slug: "csp",
        term: "Content Security Policy (CSP)",
        definition:
          "A set of rules a website sends to the browser, listing which domains may load scripts, images, frames and connections on its pages. The browser blocks anything that is not on the list.",
        inTheExample:
          "The shop's server sends a Content-Security-Policy header with every page. The browser reads it before it loads anything else.",
        forMarketers:
          "Every tracking tag needs its domains on this list. If they are missing, the tag fails without any visible error on the page.",
      },
      {
        slug: "csp-directive",
        term: "Directive",
        definition:
          "One rule inside a Content Security Policy. Each directive covers one type of resource and lists the sources allowed for it.",
        inTheExample:
          "img-src 'self' https://www.google.com is one directive: images may load from the shop itself and from www.google.com.",
      },
      {
        slug: "default-src",
        term: "default-src",
        definition:
          "The fallback directive. It applies to any resource type that does not have its own directive.",
        inTheExample:
          "If the shop sets default-src 'self' and no img-src, images may only load from the shop's own domain.",
        forMarketers:
          "A strict default-src can block tracking pixels even though nobody wrote a rule about images.",
      },
      {
        slug: "script-src",
        term: "script-src",
        definition:
          "The directive that decides which domains may run JavaScript on the page. It is the main defence against injected code.",
        inTheExample:
          "The Google tag loads from www.googletagmanager.com, so that domain must be in script-src or the tag never starts.",
      },
      {
        slug: "img-src",
        term: "img-src",
        definition:
          "The directive that decides which domains images may load from. This includes invisible tracking pixels, not only the pictures you can see.",
        inTheExample:
          "After a purchase, the Google Ads tag can send the conversion to Google as a tiny image request. If Google's domains are missing from img-src, the browser refuses it and the sale is never counted.",
        forMarketers:
          "Teams often set img-src to their own domain only, because they host their own images. That one choice can silently stop conversion tracking.",
      },
      {
        slug: "connect-src",
        term: "connect-src",
        definition:
          "The directive that decides which domains scripts may send data to in the background, for example with fetch or a beacon.",
        inTheExample:
          "GA4 and Google Ads send part of their data this way, so their collection domains must also be in connect-src.",
      },
      {
        slug: "frame-src",
        term: "frame-src",
        definition:
          "The directive that decides which domains may be embedded in the page as an iframe, a page inside the page.",
        inTheExample:
          "Some Google tag features load a hidden iframe from www.googletagmanager.com, so it must be allowed in frame-src.",
      },
      {
        slug: "allowlist",
        term: "Allowlist (whitelist)",
        definition:
          "The list of domains you trust for a given purpose. Adding a domain to a CSP directive is often called whitelisting it.",
        inTheExample:
          "The shop's developers allowlist www.googletagmanager.com, www.googleadservices.com and several other Google domains.",
      },
      {
        slug: "tracking-pixel",
        term: "Tracking pixel",
        definition:
          "A tiny, invisible image whose web address carries data, such as a conversion ID and order value. Loading the image is how the data is sent.",
        inTheExample:
          "The thank-you page loads a 1×1 image from a Google domain. The address of that image tells Google which ad led to the sale.",
        forMarketers:
          "Because the image is invisible, nobody notices when it is blocked. The only symptom is missing conversions.",
      },
      {
        slug: "nonce",
        term: "Nonce",
        definition:
          "A random value the server creates for each page load and adds to both the policy and the trusted inline scripts. Scripts without the matching value do not run.",
        inTheExample:
          "The shop adds the same nonce to its CSP header and to the inline Google Tag Manager snippet, so the snippet runs and injected code does not.",
      },
      {
        slug: "report-only",
        term: "Report-only mode",
        definition:
          "Sending the policy in a Content-Security-Policy-Report-Only header. The browser reports what it would have blocked, but blocks nothing.",
        inTheExample:
          "Before enforcing a new policy, the shop runs it in report-only mode for a week to see which Google domains would have been blocked.",
      },
      {
        slug: "xss",
        term: "Cross-site scripting (XSS)",
        definition:
          "An attack where someone manages to run their own JavaScript on your website, for example to steal card details at checkout. Content Security Policy exists mainly to limit this.",
        inTheExample:
          "If an attacker injects a script that sends card numbers to their own server, a good CSP stops the browser from loading it or sending the data.",
      },
    ],
  },
];

export const allGlossaryTerms = glossaryGroups.flatMap((group) => group.terms);
