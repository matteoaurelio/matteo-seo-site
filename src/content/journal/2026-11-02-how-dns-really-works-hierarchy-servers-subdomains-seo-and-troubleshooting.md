---
title: "How DNS Really Works: Hierarchy, Server Types, Subdomains, SEO and Troubleshooting"
description: "How DNS really works: why the hierarchy exists, each server type, subdomains, SEO-safe migrations, hidden Cloudflare features and step-by-step troubleshooting."
pubDate: 2026-11-02
updatedDate: 2026-11-02
tags:
  - cybersecurity
  - DNS
  - networking
  - technical SEO
  - Cloudflare
draft: false
---
The lesson I studied today calls the Domain Name System (DNS) the phonebook of the internet. You type `www.example.com`, DNS finds the number (the IP address), and your browser connects. My lesson even gave the number: `93.184.216.34`.

That number is no longer correct. The address behind example.com changed in 2024, and software projects that had it written into their tests had to update them ([hickory-dns pull request #2187](https://github.com/hickory-dns/hickory-dns/pull/2187)). The domain name stayed the same, and nobody who typed example.com noticed. That is the job DNS is designed to do: **names stay stable while the addresses behind them change.** A company can move its website to a new server, a new country or a new provider, and its visitors never need to know.

DNS was the next topic in my 90-day cybersecurity upskilling challenge. I wanted to go well beyond the textbook, so this article works through seven questions. Six come from my own study notes, and I added a seventh on security. For each one I checked RFCs (the official internet standards), the root server operators, Google and Cloudflare documentation, and the public post-mortems of real outages.

I wrote it for someone who is curious and technical-minded but has never studied computer science. Every term is explained the first time it appears, and where possible I use this website, `matteoarellano.com`, as the running example. New terms are also collected in the [DNS section of the cybersecurity glossary](/cybersecurity/glossary/#dns).

## Contents

1. [What actually happens when you visit a website](#what-actually-happens-when-you-visit-a-website)
2. [Where the phonebook analogy breaks](#where-the-phonebook-analogy-breaks)
3. [Why DNS became a hierarchy, and what problems it solves](#1-why-dns-became-a-hierarchy-and-what-problems-it-solves)
4. [What makes each DNS server type different](#2-what-makes-each-dns-server-type-different)
5. [Subdomains: what they are and why they split your data](#3-subdomains-what-they-are-and-why-they-split-your-data)
6. [DNS advice for companies building SEO and organic growth](#4-dns-advice-for-companies-building-seo-and-organic-growth)
7. [Cloudflare DNS features most people never use](#5-cloudflare-dns-features-most-people-never-use)
8. [The DNS problems teams hit during migrations and takeovers](#6-the-dns-problems-teams-hit-during-migrations-and-takeovers)
9. [How attackers abuse DNS, and what actually defends it](#7-how-attackers-abuse-dns-and-what-actually-defends-it)
10. [Five scenarios to test your thinking](#five-scenarios-to-test-your-thinking)

## What actually happens when you visit a website

### The problem DNS solves

Computers on the internet find each other by **IP address**: a number such as `192.0.2.10`, similar to a street address for a connection. People, however, remember names. Nobody wants to type a string of numbers to read the news, and a company does not want its customers to lose it every time it changes server.

So every time you type a name, your device has a problem: it has the name, it needs the number, and it has no idea where that number is written down. DNS is the system that solves this, billions of times a day, usually in a fraction of a second.

### Following one real visit, step by step

Let's follow what happens when you type `matteoarellano.com` into your browser on a laptop. Six parties are involved: your **browser**, your laptop's **operating system**, a **recursive resolver**, a **root server**, a **.com server**, and the **authoritative name server** for this domain, which for this site is run by Cloudflare.

**Step 1: The browser checks its own memory.** Browsers keep a small list of names they looked up recently. This is called a **cache**: a temporary memory that saves repeating work. If you visited a minute ago, the browser already knows the address and the lookup ends here.

**Step 2: The operating system checks its memory.** Windows and macOS, and many Linux systems, keep their own DNS cache, shared by all your apps. They also read a small text file called the **hosts file**, where you can hard-code a name to an address. That file is a direct descendant of the original internet's single address list, which you will meet in section 1 ([SSD Nodes](https://www.ssdnodes.com/learn/history-of-dns)).

**Step 3: The laptop asks a recursive resolver.** If your laptop does not know the answer, it asks a **recursive resolver**: a DNS server whose job is to find answers on behalf of many users. Your laptop learned which resolver to use when it joined the Wi-Fi network (through DHCP, which I covered in [another article](/journal/2026-10-29-the-protocol-that-trusts-everyone-dhcp-and-network-security/)). It is usually run by your internet provider, your company, or a public service such as Cloudflare's `1.1.1.1` or Google's `8.8.8.8`. The resolver first checks its own cache. If anyone else using the same resolver visited this site in the last few minutes, you get their cached answer instantly.

**Step 4: The resolver asks a root server.** If the resolver has nothing cached, it starts at the top of the DNS tree. It asks a **root server**: "Where is matteoarellano.com?" The root server does not keep individual websites. It answers with a **referral**: "I don't know, but here are the servers responsible for `.com`." In practice the resolver rarely needs this step, because it keeps the list of .com servers in its cache for up to two days.

**Step 5: The resolver asks a .com server.** The `.com` servers are run by Verisign, the company that operates the .com registry. They don't store this site's address either. They answer with another referral: "The owner of matteoarellano.com has told us that Cloudflare's name servers are responsible for it. Ask them."

**Step 6: The resolver asks the authoritative name server.** An **authoritative name server** holds the official records for a domain. For this site that is a pair of Cloudflare name servers. They reply with the real answer: the IP address for `matteoarellano.com`, plus an instruction: "You may remember this answer for 300 seconds." That instruction is called the **TTL**, short for time to live.

**Step 7: The answer travels back.** The resolver gives the address to your laptop and keeps a copy for the next 300 seconds. Your laptop and browser keep copies too. Only now does your browser connect to the address and request the page. That connection, and the encryption that protects it, are separate from DNS. **DNS's job ends the moment the browser knows where to go.**

![Diagram of a DNS lookup for matteoarellano.com: the device checks its browser and operating system caches, then asks a recursive resolver, which asks a root server, a .com TLD server and Cloudflare's authoritative server, and caches the answer for 300 seconds.](/images/journal/dns-resolution-path.svg)

### Why caching matters so much

Steps 4 to 6 are the famous part of every DNS diagram, but most visits never reach them. Popular names are almost always cached somewhere along the way. Without caching, every page view on every device in the world would go up to the root servers and down again, and the system would collapse under its own traffic. **Caching is what makes DNS fast, and as you will see, it is also the source of most DNS confusion.**

One small detail most diagrams skip: every full domain name ends with an invisible dot. `matteoarellano.com.` is the complete form, and that last dot is the root of the tree. You will see it in the output of tools like `dig` later in this article.

## Where the phonebook analogy breaks

The phonebook is a good first picture: you look up a name, you get a number. But a printed phonebook and DNS behave differently in five ways, and each difference explains a real problem people run into.

**There is no single book.** A phonebook is printed by one publisher. DNS is split into millions of separate pieces, each managed by whoever owns that part of the name. No one, not even the root operators, holds a complete copy.

**Every answer has an expiry time.** A printed phonebook stays the same until next year's edition. Every DNS answer comes with a TTL, and every cache keeps its own copy until that timer runs out. That is why, after a change, some people see the new website and others still see the old one.

**Different people can get different answers.** A phonebook gives everyone the same number. DNS can answer differently depending on where you are, which is how large websites send a visitor in Madrid to a server in Madrid and a visitor in Tokyo to a server in Tokyo.

**It stores far more than addresses.** DNS also says where a domain's email should be delivered, holds the codes Google uses to confirm you own a website, publishes email security policies, and lists which companies may issue security certificates for the domain.

**It is trusted by default.** You believe a printed phonebook because it is printed. A plain DNS answer carries no proof of who sent it. Unless a security extension called DNSSEC is used, a forged answer can look exactly like a real one.

| A phonebook… | DNS… |
|---|---|
| is one book, printed by one publisher | is millions of separate files (zones), each run by whoever owns that part of the name |
| is correct until next year's edition | gives every answer an expiry time (TTL), and every cache keeps its own copy until then |
| gives everyone the same number | can give different answers by location, network or load |
| only stores phone numbers | also stores mail servers (MX), verification codes and email policies (TXT), aliases (CNAME) and certificate rules (CAA) |
| is trusted because it is printed | is trusted by default, and unsigned answers can be forged unless DNSSEC is used |

Each of these comes back later in the article.

## 1. Why DNS became a hierarchy, and what problems it solves

### The problem: one text file for the whole network

In the 1970s and early 1980s, the ARPANET (the research network that grew into the internet) connected a few hundred computers. Every computer's name and address lived in a single text file called `HOSTS.TXT`, kept by the Network Information Center (NIC) at SRI in California. If you added a computer, you emailed the NIC. The NIC compiled a new version of the file once or twice a week, and every site on the network downloaded the entire file again ([O'Reilly, DNS on Windows](https://www.oreilly.com/library/view/dns-on-windows/0596002300/ch01s02.html)).

Imagine if every phone in a country had to download the complete national phonebook from one office every week, and a new phone number only worked after that office printed the next edition. That is roughly how naming worked. It was fine for a few hundred machines. Then three things went wrong:

- **The file and the traffic grew together.** Every new computer added a line to the file, and was also one more computer downloading it. The load on the single server grew faster than the network itself.
- **Every name had to be unique across the whole network.** If two universities both wanted a computer called `mail`, only one could have it, and one office decided who.
- **Every change waited for the central office.** A new machine could wait days to become reachable, and if the NIC was unavailable, nothing changed at all.

What pushed it over the edge was a change in how computers were used. Organisations moved from a few large shared machines to one workstation per person. Paul Mockapetris, who designed DNS, described exactly this shift as the reason the old system could not continue ([Mockapetris and Dunlap, 1988](https://courses.cs.washington.edu/courses/cse551/09sp/papers/dns.pdf)).

### The solution: a tree, delegation and caching

Mockapetris, then at the University of Southern California's Information Sciences Institute, published the first DNS specifications as RFC 882 and RFC 883 in 1983. In 1987 they were replaced by **RFC 1034 and RFC 1035**, which are still the core DNS standards today. Every later DNS standard adds to them rather than replacing them ([SSD Nodes, History of DNS](https://www.ssdnodes.com/learn/history-of-dns)).

The key idea is **delegation**: handing responsibility for part of the system to someone else. Think of how a country manages addresses. The national government does not name every street. It decides which city is responsible for which area. Each city then names its own streets, without asking the national government. If a city renames a street, nobody in the capital needs to do anything.

DNS works the same way, as a tree of responsibility:

- At the top is the **root**. It only decides which organisation runs each **top-level domain (TLD)**: the last part of a name, such as `.com`, `.org` or `.nl`.
- Each TLD operator, called a **registry**, only records which name servers are responsible for each domain under it.
- Each domain owner decides everything inside their own domain.

### Delegation in practice: who controls matteoarellano.com

Here is what the chain looks like for this website:

1. **The root zone.** IANA, the function that coordinates the internet's naming and numbering, manages the root zone. Twelve independent organisations publish it from their root servers. The root contains an entry that says, in effect: "`.com` is handled by the servers `a.gtld-servers.net` to `m.gtld-servers.net`."
2. **The .com zone.** Verisign runs the .com registry. Its servers contain an entry that says: "`matteoarellano.com` is handled by these two Cloudflare name servers." Verisign does not know or care what the website's address is.
3. **The matteoarellano.com zone.** This lives on Cloudflare, and it is where the actual records are: the website's address, email settings and verification codes. The site owner edits these in the Cloudflare dashboard, and the change takes effect without asking Verisign or the root for anything.

How did the .com entry get there? Through a **registrar**, the company where the domain was bought. When the domain owner sets the domain's name servers to Cloudflare in the registrar's dashboard, the registrar passes that update to Verisign. The owner never deals with Verisign directly.

![Diagram showing three levels of DNS delegation for matteoarellano.com: the root zone points .com to Verisign's servers, the .com zone points matteoarellano.com to Cloudflare's name servers through the registrar, and the matteoarellano.com zone at Cloudflare holds the actual records.](/images/journal/dns-delegation-matteoarellano.svg)

Each of these levels is a **zone**: the part of the naming tree that one party is responsible for, together with the file of records that describes it. The `matteoarellano.com` zone includes every name ending in `matteoarellano.com`, such as `www.matteoarellano.com`, unless the owner deliberately hands part of it to someone else.

You can check this delegation yourself. On a Mac or Linux computer, `dig NS matteoarellano.com +short` lists the name servers responsible for the domain. They are Cloudflare's, because a Cloudflare Pages site that uses its main domain (without `www`) must have its DNS on Cloudflare ([Cloudflare Pages: custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)).

### How each part of the design fixed an old problem

| Problem with HOSTS.TXT | DNS answer |
|---|---|
| One office decides every name | **Delegation.** The root delegates .com to a registry, the registry delegates matteoarellano.com to its owner, and the owner decides everything under it. |
| Name collisions | **Hierarchy.** `mail.example.com` and `mail.example.org` can both exist, because names only need to be unique inside their own branch. |
| One file, downloaded by everyone | **Distribution.** Each owner publishes only their own zone, on their own servers. |
| Too much traffic to one place | **Caching with TTLs.** Answers are reused for a set time, so most questions never reach the top of the tree. |
| Changes take days | **Owners edit their own zone.** A change is live as soon as old cached copies expire. |

### Caching and TTL, with real numbers

Caching is like writing a phone number on a sticky note so you don't have to look it up again. The TTL is the note's expiry time, written by the owner of the number: "trust this for 300 seconds, then check again."

Here is what that means in practice. Suppose a website's address record has a TTL of 300 seconds (five minutes), and the owner moves the site to a new server at exactly 10:00:00:

- A resolver that looked up the site at 09:57:00 keeps the old address until 10:02:00. Its users reach the old server for two more minutes.
- A resolver that looked it up at 09:59:59 keeps the old address until 10:04:59.
- A resolver that looks it up for the first time at 10:00:30 gets the new address immediately.

So for up to five minutes, different people reach different servers. Now imagine the TTL had been 86,400 seconds, one full day. The same change could take up to 24 hours to reach everyone. A long TTL means fewer lookups and slightly faster visits. A short TTL means changes, and mistakes, can be corrected quickly. Every DNS owner chooses where to sit on that trade-off.

### Why there are "13 root servers", and why that number is misleading

If the root stopped answering, resolvers could eventually no longer find any TLD, and the whole system would stop working once their caches expired. So the root has to be extremely reliable.

There are 13 root server identities, named `a.root-servers.net` to `m.root-servers.net`, run by 12 independent organisations. The number 13 is a leftover from the original protocol. A DNS reply sent the usual way (over UDP, a quick one-message format) had to fit in 512 bytes, about the size of a short paragraph of text. Thirteen server names with their addresses was the most that fitted. ICANN's root server committee shows the byte-by-byte calculation in its FAQ ([ICANN RSSAC FAQ](https://www.icann.org/groups/rssac/faq)).

But 13 names does not mean 13 machines. Each identity is served from many locations at once, using a technique called **anycast**. Anycast is a bit like an emergency phone number: the same number works everywhere in a country, and your call is answered by the nearest centre. With anycast, the same IP address is announced from many places, and your query goes to the nearest one. In March 2026 the root server system had over 2,000 instances worldwide ([root-servers.org](https://root-servers.org/)). Taking down one of the 13 would mean taking down every location it answers from at once, often dozens or hundreds of sites, while the other twelve kept answering.

Below the root there are around 1,440 active top-level domains in 2026, from `.com` and `.nl` to brand names like `.google` ([Register.Domains, based on IANA's list](https://register.domains/en/blog/domain-extensions-list)).

### The critical-thinking part: a hierarchy is also a chain of trust

Delegation has a consequence that is easy to miss: **every level fully trusts the level above it.** The root and Verisign will send every visitor of `matteoarellano.com` to whichever name servers the registrar says. If someone broke into the registrar account and replaced Cloudflare's name servers with their own, the whole internet would follow the new entry. No alarm would go off, because the system would be working as designed.

So DNS security is not only about servers. It depends on the weakest account in the chain: the registrar login, the DNS host login, and any API key that can edit records.

The second consequence is the trade-off you saw with TTLs. Caching makes DNS fast and resilient, but it means **no DNS change is ever instant**. Almost every DNS design decision balances speed against freshness.

## 2. What makes each DNS server type different

### The problem: one job would be too much for one server

Answering "where is matteoarellano.com?" involves two very different jobs. One is **publishing**: telling the world the official answer for a domain you are responsible for. The other is **searching**: going out and finding answers for users who ask. A publisher needs to answer anyone, for one set of names. A searcher needs to answer only its own users, about any name. Splitting these jobs makes each one simpler, faster and safer. That split is why DNS has different server types.

### The roles, one by one

**Stub resolver: the one who asks.** This is the small piece of DNS software in your laptop or phone. It never searches. It simply passes your question to a recursive resolver and waits. In the walkthrough above, that was steps 1 to 3.

**Recursive resolver: the one who searches and remembers.** It does all the work of asking root, TLD and authoritative servers, then keeps the answers in its cache. Because thousands of people share one resolver, a popular name looked up by one person is instantly available to the next. It is run by your internet provider, your employer, or a public service like `1.1.1.1`.

**Root server: the one who knows where each TLD is handled.** It only knows the TLDs, and only answers with referrals. It never looks anything up for you.

**TLD server: the one who knows which name servers handle each domain.** For `.com`, these are Verisign's servers. They know that `matteoarellano.com` is handled by Cloudflare's name servers, and nothing else about it.

**Authoritative name server: the one who knows the actual answer.** This is the only server that holds a domain's real records. For this site, that is Cloudflare. Every other server either points to it or repeats a copy of what it said.

There is also a role most diagrams forget: the **forwarder**. Your home router usually does not search for anything itself. It passes your question on to your internet provider's resolver. Many office networks do the same, sometimes with their own filtering or internal names added. That is why a laptop on office Wi-Fi can get a different answer from the same laptop on mobile data.

| Role | Who runs it | What it knows | Does it cache? | What it answers |
|---|---|---|---|---|
| **Stub resolver** | Your device's operating system | Only its cache and hosts file | Yes, briefly | It asks; it never searches |
| **Recursive resolver** | Your ISP, your company, or public services (1.1.1.1, 8.8.8.8) | Only what it has cached | Yes, that is its main job | The final answer, after doing all the work |
| **Root server** | 12 independent operators, all publishing the root zone that IANA manages | Which servers handle each TLD | Not applicable | A referral: "ask the .com servers" |
| **TLD server** | The registry (Verisign for .com) | Which name servers handle each domain | Not applicable | A referral: "ask Cloudflare's name servers" |
| **Authoritative server** | Your DNS host (Cloudflare, Route 53, your registrar…) | Your actual records | Not applicable | The real answer, marked as authoritative |

### Recursive and iterative questions

There are two styles of question in DNS. Think of a hotel concierge. You tell the concierge, "Book me a table at a good restaurant," and you wait for the result. That is a **recursive** question: you want the final answer, and you don't care how it is found. The concierge then calls the tourist office, which says "try this restaurant guide," and then calls the guide, which gives a phone number. Those are **iterative** questions: each one returns either the answer or the next place to ask.

Your laptop asks the resolver a recursive question. The resolver asks root, TLD and authoritative servers iterative questions. Root and TLD servers never do the searching for anyone. That is why they can handle enormous traffic: each answer is a short referral, not an investigation.

### A way to remember it

Think of a large library:

- **You (stub resolver)** ask the librarian a question and wait.
- **The librarian (recursive resolver)** walks around the building to find the answer, and remembers popular answers so the next person gets them instantly.
- **The building directory at the entrance (root)** only says which floor each subject is on.
- **The index on that floor (TLD)** only says which shelf holds a given publisher's books.
- **The book itself (authoritative server)** contains the answer.

Or in one line: **root knows where, TLD knows who, authoritative knows what, and the recursive resolver does the walking and remembers.**

### Registry, registrar, DNS host, web host: four roles, often four companies

Most real-world DNS confusion is not about server types but about who is responsible for what. For `matteoarellano.com`:

- The **registry** is Verisign, which runs `.com`.
- The **registrar** is the company where the domain was bought. It is the only place where the domain's name servers can be changed.
- The **DNS host** is Cloudflare, which holds the zone and answers as the authoritative server.
- The **web host** is Cloudflare Pages, which stores and serves the website itself.

On this site, the DNS host and web host happen to be the same company. They are still two separate jobs. The DNS records say *where* the website is, and the web host *is* the place.

| Role | Example | What it controls |
|---|---|---|
| **Registry** | Verisign for .com, SIDN for .nl | The TLD itself and its servers |
| **Registrar** | The company where you bought the domain | Which name servers your domain points to, plus renewal and transfer locks |
| **DNS host** | Cloudflare, Route 53, or the registrar itself | Your zone: A, CNAME, MX, TXT and other records |
| **Web host** | Your server, Cloudflare Pages, Vercel, Shopify… | The website the records point to |

When someone says "I changed the DNS but nothing happened", the first question is: **did you change it at the company whose name servers are actually listed for the domain?** If a domain uses Cloudflare's name servers, editing records at the registrar does nothing at all, because no resolver ever asks the registrar.

### Why you would want to know this

Because each part of the chain fails in its own way, and the error message tells you where to look. Two error codes are worth learning:

- **NXDOMAIN** stands for "non-existent domain". The authoritative server, or the TLD, says this name does not exist at all. That can be a typo, a name that was never created, or a domain that has dropped out of the registry, for example because it expired. If the name exists but has no record of the type you asked for (say, an IPv6 address when only an IPv4 one exists), the answer is not NXDOMAIN but an empty, successful reply.
- **SERVFAIL** means "server failure". The resolver tried, but could not get a trustworthy answer. Usually the name servers did not respond, the registrar lists name servers that refuse to answer for the domain, or the DNSSEC security check failed.

Two other situations are not errors at all. If you get **an old answer**, a cache somewhere is still holding the previous record until its TTL ends. If you get **the right answer but the site still fails**, DNS is working fine and the problem is the server, the certificate or the redirects.

| What you see | What it usually means | Which layer |
|---|---|---|
| **NXDOMAIN** | The name does not exist: a typo, a name never created, or a domain that dropped out of the registry (for example, expired) | Authoritative or registry |
| **SERVFAIL** | Name servers unreachable or refusing to answer (often wrong name servers at the registrar), or a broken DNSSEC chain | Delegation or DNSSEC |
| **The old answer** | A cache still holds the previous record until its TTL ends | Recursive resolver or device |
| **Right answer, site still fails** | DNS is fine; the problem is the server, certificate or redirects | Web host or proxy |

### What a zone actually contains

A zone is a list of **records**. Each record is one line that answers one kind of question about one name. Here is what the zone of a small, fictional online shop might look like (`example.com` and the `192.0.2.x` addresses are reserved for examples, so they never belong to anyone real):

```text
example.com.        300   A      192.0.2.10
www.example.com.    300   CNAME  example.com.
shop.example.com.   3600  CNAME  example-shop.myshopify.com.
example.com.        3600  MX     10 mx1.mailprovider.com.
example.com.        3600  TXT    "v=spf1 include:_spf.mailprovider.com ~all"
example.com.        3600  TXT    "google-site-verification=abc123"
example.com.        3600  CAA    0 issue "letsencrypt.org"
```

Read each line from left to right: the **name**, the **TTL** in seconds, the **record type**, and the **value**. In plain English:

- The main domain lives at `192.0.2.10`, and caches may keep that for five minutes.
- `www` is an alias that means "same as the main domain".
- `shop` is an alias for the shop's Shopify address, so Shopify can move its own servers without the shop changing anything.
- Email for the domain goes to the mail provider's server.
- The first TXT record tells other mail servers which servers may send email as this domain. The second proves to Google that the owner controls the domain.
- Only Let's Encrypt may issue security certificates for this domain.

| Record | What it does | Example |
|---|---|---|
| **A / AAAA** | Points a name to an IPv4 / IPv6 address | `example.com → 192.0.2.10` |
| **CNAME** | Makes a name an alias of another name | `shop → example-shop.myshopify.com` |
| **MX** | Says which servers receive email for the domain | `example.com → mx1.mailprovider.com` |
| **TXT** | Free text, used for SPF, DKIM, DMARC and ownership verification | `v=spf1 include:… ~all` |
| **NS** | Says which name servers are authoritative | `matteoarellano.com → Cloudflare` |
| **SOA** | Zone settings, including how long "does not exist" answers are cached | One per zone |
| **CAA** | Lists which certificate authorities may issue TLS certificates | `0 issue "letsencrypt.org"` |
| **PTR** | Reverse lookup: IP address to name (important for mail servers) | `192.0.2.10 → mail.example.com` |

## 3. Subdomains: what they are and why they split your data

### The problem: one brand, many platforms

A typical company today does not run on a single system. Its marketing pages are on a content management system, its store is on Shopify, its help centre is on Zendesk, and its product runs on its own servers. Each of those is a different company's computers, in different places. Yet customers should see one brand, and should not have to remember four unrelated web addresses. Separate domains like `example-shop.com` and `example-help.com` would also look suspicious, and teach customers to trust look-alike names, which is exactly what phishing relies on.

**Subdomains** solve this. `shop.example.com`, `help.example.com` and `www.example.com` all sit under one domain that the company controls, but each one can point to a completely different place.

### What a subdomain really is

In DNS, a subdomain is simply a name further down the tree. `blog.example.com` sits under `example.com`, which sits under `.com`. A useful picture is an office building with one street address, where each department can actually be located in a different building: visitors use the familiar address, and the directory in the lobby sends them to the right place.

Subdomains have some characteristics that matter in practice:

- **Each one can point anywhere.** `www` can be the company's own server, `shop` can be an alias to Shopify, and `help` can be an alias to Zendesk. Each subdomain has its own independent records.
- **Each one can be delegated.** The owner can give `dev.example.com` its own name servers, so another team or provider runs that part of the zone without touching the rest. This is the same delegation idea from section 1, one level lower.
- **There are size limits.** Each part of a name between dots can be up to 63 characters, and a full name up to 255 bytes ([RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)).
- **Wildcard certificates cover one level.** A security certificate for `*.example.com` covers `blog.example.com`, but not `eu.blog.example.com`.
- **Subdomains share cookies, but not storage.** A **cookie** is a small piece of data a website asks your browser to keep and send back on later visits, for example to remember that you are logged in. A cookie can be set for `example.com` so that every subdomain can read it. Other browser storage, such as `localStorage`, belongs to one exact address only. So if a cookie banner saves your consent choice in `localStorage` on `www.example.com`, the shop at `shop.example.com` cannot see it and asks again. Consent tools that work across subdomains store the choice in a cookie on the parent domain instead.

### Why companies use subdomains

- **Different platforms.** Each part of the business can use the best tool for the job under one brand.
- **Different owners.** A team or vendor can manage its own subdomain without getting access to the main website.
- **Email reputation.** Many companies send newsletters from a subdomain such as `news.example.com`. If a campaign causes spam complaints, the damage stays mostly with that subdomain, and the domain used for invoices and personal email keeps its good reputation.
- **Isolation.** A risky or experimental app on its own subdomain is easier to lock down, monitor and switch off.

### How subdomains split your analytics and marketing data

This is where DNS meets marketing. To DNS, all subdomains belong to one domain. Analytics and search tools, however, each decide for themselves whether subdomains are one site or several. Imagine a visitor who reads a guide on `blog.example.com` and then buys on `shop.example.com`:

- **Google Analytics 4** stores its visitor ID in a cookie. By default (the `cookie_domain: auto` setting), it places that cookie on the parent domain, `example.com`, so both subdomains can read it. The visitor is counted as one person on one journey, and the sale can be credited to the blog. This only works if both subdomains send data to the same GA4 property and data stream. Cross-domain tracking is not needed between subdomains ([Analytics Mania](https://www.analyticsmania.com/post/subdomain-tracking-with-google-analytics-and-google-tag-manager/)). If you set up a separate GA4 property for the shop, the same person looks like two strangers, and the blog never gets credit for the sale. To compare subdomains, add the **Hostname** dimension to your reports instead.
- **Google Search Console** can treat each subdomain as a separate property if you use URL-prefix properties. A **Domain property**, verified by adding a TXT record to your DNS, covers every subdomain and both `http` and `https` in one view ([SEOTesting](https://seotesting.com/google-search-console/domain-vs-url-prefix/)). I use both: the Domain property for the full picture, and URL-prefix properties to focus on one subdomain.
- **Ad platforms and consent tools** often need each subdomain added explicitly to allowed-domain lists, security policies and consent banner settings. A subdomain missing from a Content Security Policy can quietly block conversion tags, without any visible error on the page.

### The risk: subdomain takeover

Subdomains are easy to create for a campaign, an event or a test, and easy to forget. Here is how that turns into a security problem:

- **Day 1:** the marketing team launches `promo.example.com`. It is a CNAME, an alias, pointing to an app on a cloud platform called `example-promo.cloudplatform.net`.
- **Day 90:** the campaign ends and the app is deleted. Nobody removes the DNS record, so `promo.example.com` still points to a name that no longer exists. This is called a **dangling DNS record**.
- **Day 200:** an attacker scanning for dangling records notices it, creates a new app on the same cloud platform, and claims the free name `example-promo`. Now `promo.example.com`, a real subdomain of a trusted brand, shows the attacker's content.

Microsoft's guidance on this attack points out two things that surprise most people: the attacker can get a valid security certificate for your subdomain, so the browser shows the usual padlock, and if your site shares cookies across subdomains, the attacker's page can read them ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover)). The fix is a habit, not a tool: **delete the DNS record before you delete the resource**, and review your aliases to third-party services regularly.

## 4. DNS advice for companies building SEO and organic growth

### The problem: years of growth, undone in an afternoon

Organic traffic builds slowly. A company might spend years earning links, publishing content and building rankings. All of that depends on DNS working every day. If a domain expires, if a migration loses its records, or if a verification record disappears, the damage can happen in hours: the site becomes unreachable, contact forms stop sending email, and Search Console loses access. Most of the advice below is about protecting that investment.

### Subdomain or subfolder?

This is one of the oldest debates in SEO. Should the blog be at `blog.example.com` (a subdomain) or at `example.com/blog/` (a subfolder)?

Google's official position is that both work. John Mueller of Google has said that Google Search is fine with either, and that you should pick a structure you can keep for a long time, because changing URLs takes time to settle in search ([Search Engine Roundtable](https://www.seroundtable.com/seo-google-fight-subdomains-subdirectories-25126.html)). Many SEOs disagree, pointing to case studies where moving a blog from a subdomain into a subfolder increased traffic.

My reading is that both statements can be true at the same time. Google can crawl and rank either. But a subfolder keeps everything together in practice: one hostname to crawl, internal links that are clearly internal, one Search Console view and one analytics stream. Subdomains are easier to get slightly wrong. So **for content that should build the main brand's organic visibility (blog, guides, resources), I default to subfolders.** I use subdomains when the content genuinely lives on another platform or serves another purpose, such as an app, a help centre or a status page.

### Ten DNS habits that protect organic growth

1. **Verify a Domain property in Search Console with a DNS TXT record, and never delete that record.** Google checks the record from time to time. If a DNS migration drops it, verification fails. Google's site move guide specifically warns to check that verification still works after a move ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)).
2. **Choose one main address and redirect the other.** Decide whether your site lives at `www.example.com` or `example.com`, and permanently (301) redirect the other version to it. Both names must still exist in DNS, because a browser has to reach a server before that server can redirect it. This site uses `matteoarellano.com` without `www`.
3. **Lower the TTL before any change.** This is the most important habit, so here is the timeline with numbers. Say your website's record has a TTL of 86,400 seconds (one day), and you plan to move servers on Tuesday at 10:00. On Monday at 09:00, lower the TTL to 300 seconds. Caches that fetched the record on Monday morning still hold the old one-day version, so you must wait until every one of them expires: at least 24 hours, until Tuesday 09:00. When you switch at 10:00, every cache holds the record for at most five minutes, so the move reaches everyone within about five minutes. If something breaks, you can switch back just as fast. Once things are stable, raise the TTL again.
4. **Test the new server before you switch DNS.** With `curl --resolve` you can request your real domain from the new server before any visitor goes there (see section 6).
5. **Use Google's Change of Address tool only for real domain moves.** Google says not to use it for moving from `http` to `https` or from `www` to non-`www`, and to keep redirects in place for at least 180 days ([Google Search Console Help](https://support.google.com/webmasters/answer/9370220)). I covered redirect planning in more detail in [redirects during a CMS migration](/blog/technical-seo/redirects-seo-cms-migration/).
6. **Protect the domain itself.** Turn on auto-renew, a registrar lock (which blocks unauthorised transfers to another registrar) and two-factor authentication on the registrar account. An expired domain takes your rankings, email and verifications with it.
7. **Treat email records as part of the website.** Since February 2024, Gmail requires every sender to authenticate its email with SPF or DKIM, two methods that use DNS records to prove a message really comes from your domain. Anyone sending more than 5,000 messages a day to Gmail must also have DMARC, a policy record that tells receiving servers what to do with messages that fail those checks ([Gmail sender guidelines](https://support.google.com/mail/answer/81126)). If these TXT records are lost in a DNS move, lead and order emails can quietly land in spam.
8. **Add a CAA record.** A CAA record lists which certificate authorities, the companies that issue the security certificates behind the padlock, may issue certificates for your domain ([Let's Encrypt](https://letsencrypt.org/docs/caa/)). It is cheap, and it narrows who could ever issue a valid certificate for your name. Remember to update it if you change CDN or host, or certificate renewals will fail.
9. **Use a DNS provider built for availability.** If your name servers are down, Googlebot cannot reach your site any more than a visitor can. Search Console's Crawl stats report shows host problems, including DNS failures.
10. **Keep a DNS inventory.** Keep an export of every zone with a note of what each record is for and who owns it. During a migration, nothing is more useful.

On international sites: subdomains such as `de.example.com` are one option among several. I compared the trade-offs in [country domains vs one multilingual site](/journal/2026-10-29-country-domains-vs-one-multilingual-site-when-each-pays-off/).

## 5. Cloudflare DNS features most people never use

Cloudflare is one of the most widely used DNS hosts. Most people use it to add an address record and switch on the orange cloud, and never look further. These lesser-known features each solve a specific, common problem. Plans and limits change, so check the linked documentation before relying on any of them.

### The orange cloud is not a DNS setting, it is a routing setting

**The problem:** if DNS publishes your server's real IP address, anyone can find it and attack it directly.

**What the feature does:** in Cloudflare, every address record has a cloud icon. Think of the orange cloud as a reception desk. With **Proxied** (orange cloud), the DNS answer gives out the reception desk's address, which is one of Cloudflare's IP addresses. Visitors connect to Cloudflare, and Cloudflare passes their requests on to your server. Nobody outside needs to know where your office is. With **DNS only** (grey cloud), the DNS answer gives out your server's real address, and visitors go straight to it.

This site is an example. A lookup for `matteoarellano.com` returns Cloudflare's addresses, not the address of any server of mine.

Only A, AAAA and CNAME records, the ones that lead visitors to a website, can be proxied. Proxied records always have a TTL of 300 seconds, which you cannot change. DNS-only records can be set from 60 seconds (30 on Enterprise plans) to one day ([Cloudflare: proxy status](https://developers.cloudflare.com/dns/proxy-status/), [TTL](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/)).

**Watch out:** one grey-cloud record pointing to the same server, such as `ftp`, `mail` or `direct`, gives your real address away to anyone who looks it up. Attackers can then go around Cloudflare entirely.

### CNAME flattening, or how an alias can live at the root

**The problem:** many hosting platforms ask you to point your domain at their hostname with a CNAME, an alias record. But the DNS standard does not allow a CNAME at the root of a domain (`example.com` without anything in front). The rule is that a name with a CNAME cannot have any other record, and the root of every domain always needs at least two other records: NS (its name servers) and SOA (its zone settings) ([Let's Encrypt on CNAME rules](https://letsencrypt.org/docs/caa/)).

**What the feature does:** Cloudflare lets you create the CNAME anyway, and then answers on its behalf. It follows the alias itself, finds the final IP address, and returns that address as a normal answer. This is called **CNAME flattening**. At the root of a domain it happens automatically on every plan ([Cloudflare: CNAME flattening](https://developers.cloudflare.com/dns/cname-flattening/)). This is also why a Pages site like this one can live at `matteoarellano.com` without `www`.

**Watch out:** if a vendor verifies your domain by checking for the CNAME record itself, flattening can make that check fail, because the CNAME is never shown to the outside world.

### Purge a public resolver's cache

**The problem:** you fixed a record, but a client still sees the old site because their resolver is holding the old answer until its TTL runs out.

**What the feature does:** you can ask Cloudflare's public resolver to drop its cached copy at `1.1.1.1/purge-cache`, and Google's at its [Flush Cache page](https://developers.google.com/speed/public-dns/cache). When Cloudflare announced its tool, it explained that `1.1.1.1` caches records for up to three hours, or less if the TTL is shorter ([Cloudflare blog](https://blog.cloudflare.com/refresh-stale-dns-records-on-1-1-1-1/)).

**Watch out:** this only clears those two resolvers. Internet providers and company networks keep their own caches, which you cannot clear.

### 1.1.1.1 for Families

**The problem:** protecting every device at home, including smart TVs and guests' phones, usually means installing software on each one.

**What the feature does:** Cloudflare offers two free resolver addresses that refuse to look up dangerous names. `1.1.1.2` blocks known malware domains, and `1.1.1.3` blocks malware and adult content ([Cloudflare blog](https://blog.cloudflare.com/introducing-1-1-1-1-for-families/)). Set one of them as the DNS server on your home router, and every device on the network is protected. If a device cannot find a malicious site's address, it cannot connect to it.

### Email Routing: a professional address with no mailbox

**The problem:** you want `hello@yourdomain.com` on your website, but you don't want to pay for or manage another mailbox.

**What the feature does:** Email Routing forwards messages sent to addresses on your domain to an inbox you already have, for free. It adds the necessary MX and SPF records to your zone automatically. It only forwards incoming mail: you cannot send as `hello@yourdomain.com` through Email Routing ([Cloudflare: Email Routing](https://developers.cloudflare.com/email-routing/)). For that you need a sending service, which Cloudflare now offers separately.

### Cloudflare Tunnel: a public website with no public IP

**The problem:** even behind the orange cloud, a server with a public IP address can be found and attacked directly.

**What the feature does:** with Tunnel, a small program called `cloudflared` runs on your server and opens a connection **outwards** to Cloudflare, the same way your laptop connects to a website. Visitors reach your app through Cloudflare along that connection. Your firewall can then block all incoming traffic ([Cloudflare: Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/)). There is no public origin address to leak, because there is no public origin address.

### Bulk Redirects for migrations

**The problem:** a website migration can involve hundreds or thousands of old URLs that must each redirect to a new one, and those rules are usually buried in server configuration that marketing teams cannot see.

**What the feature does:** you upload a CSV file of old and new URLs to a Bulk Redirect list, choosing 301, 302, 307 or 308 status codes ([Cloudflare blog](https://blog.cloudflare.com/maximum-redirects-minimum-effort-announcing-bulk-redirects/)). The whole redirect map lives in one place that anyone with access can review.

**Watch out:** redirects only work on hostnames set to Proxied.

### DNSSEC migration without switching it off

**The problem:** DNSSEC, explained in section 7, makes moving to a new DNS provider risky. The usual advice is to switch it off at the registrar first, which leaves the domain unprotected during the move.

**What the feature does:** Cloudflare documents a **multi-signer** method that keeps DNSSEC active during the move, by temporarily publishing proof that both the old and the new provider are trusted ([Cloudflare: migrate with DNSSEC](https://developers.cloudflare.com/dns/dnssec/dnssec-active-migration/)).

### Smaller things worth knowing

- **Registrar at cost.** Cloudflare Registrar charges what the registry charges, without adding a markup ([Cloudflare Registrar](https://developers.cloudflare.com/registrar/)).
- **Zone holds** (Enterprise only) stop another team in your company from adding your domain to a different Cloudflare account and accidentally taking it over ([Cloudflare: zone holds](https://developers.cloudflare.com/fundamentals/account/account-security/zone-holds/)).

## 6. The DNS problems teams hit during migrations and takeovers

### The problem: "it works on my machine"

When DNS goes wrong, the first reaction is to open a browser and look. But your browser is the worst place to test from. Between you and the truth there are at least three caches: the browser's, your operating system's and your resolver's. Two people testing the same site can see different things, and both be telling the truth.

### A method: work down the chain, not from your browser

Instead, ask each link in the chain directly, starting from the top, and compare the answers. It is like checking a rumour by going to the original source instead of asking the person who heard it third-hand.

The standard tool is `dig`, a command-line program that sends one DNS question and shows the raw answer. It comes with macOS and most Linux systems. Here is the sequence I use, with what each step asks:

```bash
# 1. Which name servers are responsible for the domain?
dig NS example.com +short

# 2. What does the .com registry say? Asks a .com server directly, with no cache in between.
dig @a.gtld-servers.net example.com NS +norecurse

# 3. What does YOUR authoritative server say? This is the official answer.
dig @ns1.yourdnshost.com www.example.com A

# 4. What do public resolvers say? These answers may come from a cache.
dig @1.1.1.1 www.example.com A
dig @8.8.8.8 www.example.com A

# 5. Follow the whole chain from the root, step by step, like the walkthrough above.
dig +trace www.example.com

# 6. Check mail, verification and security records.
dig MX example.com +short
dig TXT example.com +short
dig TXT _dmarc.example.com +short
dig CAA example.com +short
dig DS example.com +short
```

A line of `dig` output looks like this:

```text
www.example.com.   187   IN   A   192.0.2.10
```

Read it from left to right: the **name** you asked about; **187**, the number of seconds this answer will stay in the cache (it counts down, so if the TTL is 300, this resolver fetched it 113 seconds ago); **IN**, which means "internet" and is always there; the **record type**; and the **value**.

How to read the results:

- **Step 3 is right, step 4 is wrong:** a cache is still holding the old answer. Wait for the remaining TTL, or purge the public resolvers.
- **Step 3 is wrong:** you are editing the wrong zone, or the record itself is wrong.
- **Step 1 or 2 shows unexpected name servers:** the problem is at the registrar.

On Windows, `nslookup -type=MX example.com 1.1.1.1` or PowerShell's `Resolve-DnsName` do the same job.

To clear the caches on your own computer: on macOS, run `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`. On Windows, run `ipconfig /flushdns`. In Chrome, open `chrome://net-internals/#dns` and clear the host cache.

### The ten problems I see most often

**1. "DNS propagation" that is really caching.** People talk about DNS changes "propagating" across the internet, as if the new record were slowly travelling outwards. Nothing travels. The new record is live on the authoritative server the moment you save it. What takes time is every cache in the world letting its old copy expire, as in the TTL timeline from section 1. Changing a domain's name servers usually takes longest. The delegation records in the .com zone have a two-day TTL, so a resolver can keep asking the old provider for up to two days. The fix is planning: lower TTLs in advance, and keep the old provider's zone running and correct until the switch is complete.

**2. Records lost when moving to a new DNS host.** When you switch name servers, only the records that exist in the new zone exist at all. Think of moving house and only taking the furniture you remembered to list. Cloudflare scans for existing records during setup, but its own migration guide says to review every record and add what is missing before you change name servers ([Cloudflare DNS migration guide](https://developers.cloudflare.com/learning-paths/dns-best-practices/concepts/phase-1/)). The usual victims are MX records (email stops arriving), SPF, DKIM and DMARC (email lands in spam), verification TXT records (tools lose access), and aliases for the email platform or help desk. **Export the old zone file first and compare record by record.**

**3. A leftover DNSSEC record at the registrar.** DNSSEC lets a domain prove its answers are genuine with a digital signature. For that to work, the parent zone (`.com`) stores a **DS record**: a fingerprint of the domain's signing key. When you move to a new DNS provider, the new provider signs with a new key. If the old fingerprint is still at the registrar, it no longer matches. It is like a bank that still has your old signature on file: you sign with your new one, and the bank refuses the cheque, even though it really is you. Resolvers that check DNSSEC return SERVFAIL, so some people cannot reach your site at all while others can, depending on their resolver. In Cloudflare this often shows as a zone stuck in "Pending Nameserver Update" ([Cloudflare troubleshooting](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/pending-nameservers/)). Remove the old DS record, wait for its TTL to expire (Cloudflare's migration guide suggests waiting up to 1.5 times the TTL), then switch ([Cloudflare DNS migration guide](https://developers.cloudflare.com/learning-paths/dns-best-practices/concepts/phase-1/)). The alternative is the multi-signer method from section 5.

**4. Name servers that don't match exactly.** The registrar must list exactly the name servers your DNS host gave you, with no old ones left over. If old and new are mixed, resolvers switch between them, and some get answers from the old provider ([Cloudflare troubleshooting](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/nameservers/)).

**5. Negative caching.** Resolvers also remember "this name does not exist" answers, which is called **negative caching**. How long they remember depends on the zone's SOA record: the lower of the SOA record's own TTL and its "minimum" field ([RFC 2308](https://www.rfc-editor.org/rfc/rfc2308)). Here is how that bites. A developer tests `new.example.com` at 14:00, before the record exists. The resolver receives NXDOMAIN and, with a negative cache time of 3,600 seconds, remembers it. At 14:05 you create the record. It is live on the authoritative server, but people using that resolver keep getting "does not exist" until 15:00. Create records before you announce or test a new name.

**6. CNAME conflicts.** As explained in section 5, a name with a CNAME cannot have any other record. So adding a CNAME at the root of a domain, or adding a TXT record next to a CNAME, either fails or behaves unpredictably. For the root of a domain, use a provider with CNAME flattening or an equivalent ALIAS record.

**7. Redirect loops after moving behind a proxy.** The browser error `ERR_TOO_MANY_REDIRECTS`, right after moving a site behind Cloudflare, usually means the SSL setting is **Flexible**. In that mode, Cloudflare talks to your server over unencrypted HTTP. Your server sees an HTTP request and redirects the visitor to HTTPS. The visitor comes back over HTTPS, Cloudflare asks your server over HTTP again, and the loop repeats until the browser gives up ([Cloudflare docs](https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/)). Install a certificate on your server and use **Full (strict)**, so the connection is encrypted the whole way.

**8. Certificates that won't issue.** New hosts often create security certificates automatically. To do so, the certificate authority has to confirm that you control the domain, usually by checking that DNS points to the new host. It must also be allowed by your CAA record. If either is missing, the certificate is not issued and visitors see a security warning. Check both.

**9. Dangling records after decommissioning.** Every migration leaves records pointing to old servers and old vendors. Each one is a potential subdomain takeover, as described in section 3. Delete them as part of the project, not "later".

**10. DNS that depends on the thing it describes.** On 4 October 2021, Facebook, Instagram and WhatsApp were unreachable for about six hours. A maintenance command accidentally disconnected Facebook's backbone network, the private network that links its data centres. Facebook's DNS servers were designed to stop announcing themselves to the internet if they could not reach the data centres, on the logic that an unhealthy server should step aside. With the backbone down, every DNS server concluded it was unhealthy and did exactly that. The servers were running, but nobody on the internet could reach them, so `facebook.com` could not be resolved. Getting engineers physical and secure access to the affected systems then took extra time, which slowed the fix ([Engineering at Meta](https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/)). The lesson for any company: **keep your DNS, and the tools you need to fix it, independent of the systems DNS points to.**

### Taking over a domain or a service you didn't set up

When you inherit a website, a client or a company's infrastructure, you are inheriting decisions made by people who may no longer be around. Before changing anything, go through this checklist:

1. **Who is the registrar, whose name is the account in, and when does the domain expire?** Domains registered in a former employee's or agency's personal account are a common and serious risk. If that person leaves or the card on file expires, so can the domain.
2. **Where do the name servers point?** (`dig NS`). That tells you which DNS host actually matters, regardless of what anyone remembers.
3. **Export every zone** and write down what each record is for. Ask about any record you can't explain before you delete it. A strange TXT record may be the only thing keeping a payment provider or email platform verified.
4. **Map the email setup:** MX, SPF, DKIM, DMARC, and any marketing tools that send email as the domain.
5. **List third-party aliases (CNAMEs)** and check that each target still exists.
6. **Check DNSSEC status** (`dig DS`) before any provider change.
7. **Move access to company-owned accounts** with two-factor authentication, and remove access for people who have left.

### Test the new server before anyone sees it

This trick avoids most launch-day surprises. Normally your computer uses DNS to decide where to send a request. `curl --resolve` lets you skip DNS and say "for this one request, send `www.example.com` to this address":

```bash
curl -sI --resolve www.example.com:443:203.0.113.10 https://www.example.com/
```

Here `203.0.113.10` stands for the new server's address. The new server receives a normal request for your real domain, exactly as it will after the switch. If it answers correctly, with the right certificate and redirects, you can change DNS with confidence. If not, you found the problem while no visitor could see it.

## 7. How attackers abuse DNS, and what actually defends it

### The problem: a system designed for a trusting network

DNS was designed in the early 1980s for a network of research institutions that largely trusted each other. Three design choices from that era still shape DNS security today:

- **Questions and answers are usually single messages** sent over UDP, without any setup between the two sides. Picture a postcard: you send a question, and accept the first reply that looks right.
- **They are sent in plain text.** Anyone on the network path between you and the resolver can read which names you look up.
- **Answers are not signed.** A plain DNS answer contains nothing that proves who sent it.

Most DNS attacks exploit one of these three facts.

### The main attacks, with real examples

**Cache poisoning: getting a resolver to remember a lie.** When a resolver sends a question, it adds a random reference number, and only accepts a reply that carries the same number. An attacker who wants to poison the cache sends a flood of forged replies, each with a different guessed number, hoping one matches before the real reply arrives. If it works, the resolver caches the false address and hands it to every user who asks, until the TTL expires. In 2008, Dan Kaminsky showed a way to make this practical against almost every resolver on the internet (CVE-2008-1447). DNS software vendors released coordinated patches that also randomise the network port each question is sent from, which multiplies the number of combinations an attacker must guess ([US-CERT TA08-190B](https://archives-cert.univ-amu.fr/2008/certmsgVULN277)).

**Registrar or DNS account hijacking: changing the official answer.** Instead of forging answers, the attacker logs into your registrar or DNS host and changes the real records or name servers. Because of the chain of trust from section 1, the whole internet then follows the attacker's records. The defences are two-factor authentication, a registrar lock, and giving as few people access as possible.

**DDoS on DNS providers: making the answer unreachable.** A distributed denial-of-service (DDoS) attack floods servers with traffic from many machines at once. On 21 October 2016, the Mirai botnet, a network of hacked cameras and home routers, attacked the DNS provider Dyn. Twitter, Netflix, Reddit, GitHub, Spotify and others were unreachable for many users ([APNIC](https://blog.apnic.net/2016/10/26/quick-look-attack-dyn/)). Their own websites were working fine. Visitors simply could not find their addresses. The defence is large anycast DNS networks, and for critical domains, a second DNS provider as a backup.

**Rogue DNS through DHCP: changing which resolver you ask.** On a shared network, a fake DHCP server can tell your laptop to use the attacker's resolver, which can then answer whatever it likes. I covered this in [DHCP and network security](/journal/2026-10-29-the-protocol-that-trusts-everyone-dhcp-and-network-security/). Defences are DHCP snooping on business networks, and encrypted DNS.

**Subdomain takeover: claiming a forgotten name.** As described in section 3. The defence is removing DNS records before removing the resources they point to.

**DNS tunnelling: hiding data inside DNS questions.** Almost every network lets DNS traffic out, because nothing works without it. Malware can take advantage of this by hiding stolen data inside the names it looks up, for example `secretdata.attacker-domain.com`, so the attacker's name server receives the data. The defence is monitoring DNS traffic for unusual names and volumes.

| Attack | What happens | Defence |
|---|---|---|
| **Cache poisoning** | A forged reply is accepted and cached for everyone | Patched resolvers, DNSSEC validation |
| **Registrar or DNS account hijacking** | The official records are changed | Two-factor authentication, registrar lock, few people with access |
| **DDoS on DNS providers** | Name servers are flooded so nobody can resolve the domain | Large anycast providers; a second DNS provider for critical domains |
| **Rogue DNS through DHCP** | Your device is told to use the attacker's resolver | DHCP snooping, encrypted DNS |
| **Subdomain takeover** | A dangling alias is claimed by an attacker | Remove records before resources |
| **DNS tunnelling** | Data is smuggled out inside DNS queries | Monitoring DNS traffic |

### DNSSEC and encrypted DNS solve different problems

This is the point I see confused most often, so here are two analogies.

**DNSSEC is a tamper-evident seal applied by the author.** The domain owner digitally signs their records. A resolver that checks signatures (a "validating" resolver) can prove the answer really came from the owner and was not changed along the way, even if it passed through several caches. It protects **integrity**: whether the answer is genuine. It does not hide anything. The postcard is still readable by anyone who handles it, but nobody can change it without breaking the seal.

**DNS over HTTPS (DoH) and DNS over TLS (DoT) are a sealed envelope between you and your resolver.** They encrypt the conversation between your device and the resolver you chose. On café Wi-Fi, nobody nearby can read which sites you look up, or tamper with the answer on that stretch. They protect **privacy** on that one link. They do not prove that the resolver's answer is genuine. If the resolver itself was fed a poisoned answer, it will deliver that lie to you in a perfectly sealed envelope.

You need both for full protection, and each alone protects against different attacks. One more point that follows from this: your resolver sees every domain you visit. Choosing a resolver is a privacy decision as well as a speed decision.

## Five scenarios to test your thinking

<details>
<summary><strong>1. You changed the A record at 10:00. The TTL was 3,600 seconds. At 10:20 you see the new site and your colleague sees the old one. Who is right?</strong></summary>

Both. Your colleague's resolver fetched the old record before 10:00 and may keep it until as late as 11:00. Check the authoritative server directly with <code>dig @your-nameserver</code>. If it shows the new IP, nothing is broken, and your colleague will see the new site by 11:00 at the latest.

</details>

<details>
<summary><strong>2. After moving name servers, the website works but no contact form emails arrive. Where do you look?</strong></summary>

The new zone. The MX records and the SPF, DKIM and DMARC TXT records were probably not recreated, so email either has nowhere to go or fails authentication. Compare the old zone export with the new zone, record by record.

</details>

<details>
<summary><strong>3. The site works on mobile data but not on the office Wi-Fi. What is the likeliest cause?</strong></summary>

A different resolver. The office network may use its own DNS server with a stale cache, an internal override for the company's own names (called split DNS), or a filtering policy. Run the same <code>dig</code> query on both networks and compare.

</details>

<details>
<summary><strong>4. Your site is behind Cloudflare, but you are still being attacked directly. How did the attacker find your server?</strong></summary>

Probably from a grey-cloud record pointing to the same server (such as <code>mail</code> or <code>ftp</code>), an old DNS history service that recorded your address before you moved behind Cloudflare, or the server's own outgoing emails. Move those services, change the server's IP address, and allow only Cloudflare's IP addresses to connect, or use Tunnel.

</details>

<details>
<summary><strong>5. Some users get SERVFAIL for your domain right after a DNS provider change, and others don't. Why the split?</strong></summary>

A leftover DS record. Users whose resolver validates DNSSEC compare the new provider's signatures with the old fingerprint at the registrar, find a mismatch and refuse the answer. Users whose resolver does not validate never check, so they get normal answers. Remove the old DS record at the registrar.

</details>

## The takeaway

DNS is not really a phonebook. It is a distributed, delegated, cached database that the whole internet trusts by default. The hierarchy exists because one central file could not keep up with a growing network. The different server types exist because each level only needs to know who is responsible for the next one. Caching is what makes it fast, and also what makes every change slower than you expect.

If you remember five things from this article:

1. **The authoritative server is the truth.** Everything else is a copy, and copies expire on the TTL's schedule.
2. **Delegation is trust.** Whoever controls your registrar account controls your domain.
3. **Lower TTLs before changes**, and wait for the old TTL to run out before you switch.
4. **Test from the top of the chain down**, not from your browser.
5. **Delete DNS records before you delete what they point to.**

For growth teams, DNS is the layer under every website, email and verification you depend on. Most DNS incidents I see are not sophisticated attacks. They are a forgotten record, a leftover DS record, an expired domain or an account nobody can log into.

## Sources

- [RFC 1034: Domain Names, Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034), IETF
- [RFC 1035: Domain Names, Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035), IETF
- [RFC 2308: Negative Caching of DNS Queries](https://www.rfc-editor.org/rfc/rfc2308), IETF
- [RFC 8659: DNS Certification Authority Authorization (CAA)](https://www.rfc-editor.org/rfc/rfc8659), IETF
- [Development of the Domain Name System](https://courses.cs.washington.edu/courses/cse551/09sp/papers/dns.pdf), Mockapetris and Dunlap (1988)
- [DNS on Windows: a brief history](https://www.oreilly.com/library/view/dns-on-windows/0596002300/ch01s02.html), O'Reilly
- [The History of DNS, From HOSTS.TXT to DoH](https://www.ssdnodes.com/learn/history-of-dns), SSD Nodes
- [Root Server System Advisory Committee FAQ](https://www.icann.org/groups/rssac/faq), ICANN
- [Root Server Technical Operations](https://root-servers.org/), root-servers.org
- [How many domain extensions are there?](https://register.domains/en/blog/domain-extensions-list), Register.Domains (based on IANA data)
- [Update IP of example.com, pull request #2187](https://github.com/hickory-dns/hickory-dns/pull/2187), hickory-dns on GitHub
- [How to move a site](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), Google Search Central
- [Change of Address tool](https://support.google.com/webmasters/answer/9370220), Google Search Console Help
- [Email sender guidelines](https://support.google.com/mail/answer/81126), Gmail Help
- [Subdomains vs subdirectories (John Mueller)](https://www.seroundtable.com/seo-google-fight-subdomains-subdirectories-25126.html), Search Engine Roundtable
- [Google Search Console: Domain vs URL prefix](https://seotesting.com/google-search-console/domain-vs-url-prefix/), SEOTesting
- [Subdomain tracking with GA4 and GTM](https://www.analyticsmania.com/post/subdomain-tracking-with-google-analytics-and-google-tag-manager/), Analytics Mania
- [Prevent dangling DNS entries and avoid subdomain takeover](https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover), Microsoft Learn
- [Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/), Let's Encrypt
- [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), Cloudflare Pages Docs
- [Proxy status](https://developers.cloudflare.com/dns/proxy-status/), [Time to Live](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/), [CNAME flattening](https://developers.cloudflare.com/dns/cname-flattening/) and [DNSSEC migration](https://developers.cloudflare.com/dns/dnssec/dnssec-active-migration/), Cloudflare Docs
- [DNS migration best practices](https://developers.cloudflare.com/learning-paths/dns-best-practices/concepts/phase-1/), [Pending Nameserver Update](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/pending-nameservers/) and [nameserver troubleshooting](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/nameservers/), Cloudflare Docs
- [ERR_TOO_MANY_REDIRECTS](https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/), Cloudflare Docs
- [Email Routing](https://developers.cloudflare.com/email-routing/), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), [Registrar](https://developers.cloudflare.com/registrar/) and [Zone holds](https://developers.cloudflare.com/fundamentals/account/account-security/zone-holds/), Cloudflare Docs
- [Refresh stale DNS records on 1.1.1.1](https://blog.cloudflare.com/refresh-stale-dns-records-on-1-1-1-1/), [Introducing 1.1.1.1 for Families](https://blog.cloudflare.com/introducing-1-1-1-1-for-families/) and [Announcing Bulk Redirects](https://blog.cloudflare.com/maximum-redirects-minimum-effort-announcing-bulk-redirects/), Cloudflare Blog
- [More details about the October 4 outage](https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/), Engineering at Meta
- [A quick look at the attack on Dyn](https://blog.apnic.net/2016/10/26/quick-look-attack-dyn/), APNIC Blog
- [Technical Cyber Security Alert TA08-190B: Multiple DNS implementations vulnerable to cache poisoning](https://archives-cert.univ-amu.fr/2008/certmsgVULN277), US-CERT (archived copy)
