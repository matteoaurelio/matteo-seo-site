---
title: "How DNS Really Works: Hierarchy, Server Types, Subdomains, SEO and Troubleshooting"
description: "How DNS really works: why the hierarchy exists, each server type, subdomains, SEO-safe migrations, hidden Cloudflare features and step-by-step troubleshooting."
pubDate: 2026-11-02
tags:
  - cybersecurity
  - DNS
  - networking
  - technical SEO
  - Cloudflare
draft: false
---
The lesson I studied today calls the Domain Name System (DNS) the phonebook of the internet. You type `www.example.com`, DNS finds the number (the IP address), and your browser connects. My lesson even gave the number: `93.184.216.34`.

That number is no longer correct. The address behind example.com changed in 2024, and software projects that had it written into their tests had to update them ([hickory-dns pull request #2187](https://github.com/hickory-dns/hickory-dns/pull/2187)). The domain name stayed the same, and nobody who typed example.com noticed. That is the job DNS is designed to do: **names stay stable while the addresses behind them change.**

DNS was the next topic in my 90-day cybersecurity upskilling challenge. I wanted to go well beyond the textbook, so this article works through seven questions. Six come from my own study notes, and I added a seventh on security. For each one I checked RFCs (the official internet standards), the root server operators, Google and Cloudflare documentation, and the public post-mortems of real outages. New terms are also defined in the [DNS section of the cybersecurity glossary](/cybersecurity/glossary/#dns).

## Contents

1. [The 60-second refresher](#the-60-second-refresher)
2. [Where the phonebook analogy breaks](#where-the-phonebook-analogy-breaks)
3. [Why DNS became a hierarchy, and what problems it solves](#1-why-dns-became-a-hierarchy-and-what-problems-it-solves)
4. [What makes each DNS server type different](#2-what-makes-each-dns-server-type-different)
5. [Subdomains: what they are and why they split your data](#3-subdomains-what-they-are-and-why-they-split-your-data)
6. [DNS advice for companies building SEO and organic growth](#4-dns-advice-for-companies-building-seo-and-organic-growth)
7. [Cloudflare DNS features most people never use](#5-cloudflare-dns-features-most-people-never-use)
8. [The DNS problems teams hit during migrations and takeovers](#6-the-dns-problems-teams-hit-during-migrations-and-takeovers)
9. [How attackers abuse DNS, and what actually defends it](#7-how-attackers-abuse-dns-and-what-actually-defends-it)
10. [Five scenarios to test your thinking](#five-scenarios-to-test-your-thinking)

## The 60-second refresher

When you type a domain name into a browser, your device needs the IP address behind it. The lookup goes like this:

1. The **browser** checks its own short-term memory (cache).
2. The **operating system** checks its cache and the local `hosts` file.
3. If neither knows the answer, the device asks a **recursive resolver**. This is usually run by your internet provider, your company, or a public service such as Cloudflare's 1.1.1.1 or Google's 8.8.8.8. The resolver first checks its own cache.
4. On a miss, the resolver asks a **root server**, which replies: "I don't know www.example.com, but here are the servers for .com."
5. The resolver asks a **.com TLD server**, which replies: "Here are the name servers that are responsible for example.com."
6. The resolver asks one of those **authoritative name servers**, which returns the actual record.
7. The resolver passes the answer to your device and **caches it for as long as the record's TTL (time to live) allows**.

![Diagram of a DNS lookup: the device checks its browser and operating system caches, then asks a recursive resolver, which asks a root server, a .com TLD server and the authoritative server, and caches the answer for the TTL.](/images/journal/dns-resolution-path.svg)

Steps 4 to 6 are the famous part, but in practice they rarely happen. Popular names are almost always already cached somewhere along the way. **DNS is fast because of caching, and most DNS confusion comes from caching too.** Keep that in mind for the troubleshooting section.

A small detail most diagrams skip: every full domain name ends with an invisible dot. `www.example.com.` is the complete form, and that last dot is the root. You will see it in the output of tools like `dig`.

## Where the phonebook analogy breaks

The phonebook is a fine first picture. But five differences explain almost every real DNS problem:

| A phonebook… | DNS… |
|---|---|
| is one book, printed by one publisher | is millions of separate files (zones), each run by whoever owns that part of the name |
| is correct until next year's edition | gives every answer an expiry time (TTL), and every cache keeps its own copy until then |
| gives everyone the same number | can give different answers by location, network or load, which is how CDNs send you to a nearby server |
| only stores phone numbers | also stores mail servers (MX), verification codes and email policies (TXT), aliases (CNAME) and certificate rules (CAA) |
| is trusted because it is printed | is trusted by default, and unsigned answers can be forged unless DNSSEC is used |

Each row comes back later in the article.

## 1. Why DNS became a hierarchy, and what problems it solves

### Before DNS: one text file for the whole network

In the early ARPANET, every computer's name and address lived in a single file called `HOSTS.TXT`. It was maintained by the Network Information Center at SRI in California. Administrators emailed their changes to the NIC, the NIC compiled a new file once or twice a week, and every site downloaded the full file again ([O'Reilly, DNS on Windows](https://www.oreilly.com/library/view/dns-on-windows/0596002300/ch01s02.html)).

That worked for a few hundred machines. It broke for three reasons:

- **Size and traffic.** The file grew with every new host, and every new host also downloaded the file. The load on one server grew faster than the network itself.
- **Name collisions.** Every name had to be unique across the whole network, and one office decided them all.
- **Slow and central.** A change took days, and if the NIC was unavailable, nothing changed at all.

The underlying problem was a shift from a few shared timesharing machines, each serving a whole organisation, to one workstation per user. Paul Mockapetris, who designed DNS, described exactly that shift in his later paper on the system's design ([Mockapetris and Dunlap, 1988](https://courses.cs.washington.edu/courses/cse551/09sp/papers/dns.pdf)).

### The design: a tree, delegation and caching

Mockapetris, then at the University of Southern California's Information Sciences Institute, published the first DNS specifications as RFC 882 and RFC 883 in 1983. They were replaced in 1987 by **RFC 1034 and RFC 1035**, which are still the core DNS standards today. Every later DNS standard updates them rather than replacing them ([SSD Nodes, History of DNS](https://www.ssdnodes.com/learn/history-of-dns)).

The design solved each old problem with one idea:

| Problem with HOSTS.TXT | DNS answer |
|---|---|
| One office decides every name | **Delegation.** The root delegates .com to a registry, the registry delegates example.com to its owner, and the owner decides everything under it. |
| Name collisions | **Hierarchy.** `mail.example.com` and `mail.example.org` can both exist, because names only need to be unique inside their own branch. |
| One file, downloaded by everyone | **Distribution.** Each owner publishes only their own part, called a **zone**, on their own servers. |
| Too much traffic to one place | **Caching with TTLs.** Answers are reused for a set time, so most questions never reach the top of the tree. |
| Changes take days | **Owners edit their own zone.** A change is live as soon as the old cached copies expire. |

### Why there are "13 root servers", and why that number is misleading

There are 13 root server identities, named `a.root-servers.net` to `m.root-servers.net`, run by 12 independent organisations. The number 13 is a leftover from the original protocol limit: a DNS answer sent over UDP had to fit in 512 bytes, and 13 server names with their addresses was the most that fitted. ICANN's root server committee shows the byte-by-byte calculation in its FAQ ([ICANN RSSAC FAQ](https://www.icann.org/groups/rssac/faq)).

But 13 identities does not mean 13 machines. Each identity is served from many locations at once with **anycast**, a routing technique where the same IP address is announced from many places and you reach the nearest one. In March 2026 the root server system had over 2,000 instances worldwide ([root-servers.org](https://root-servers.org/)).

Below the root there are around 1,440 active top-level domains in 2026, from `.com` and `.nl` to brand names like `.google` ([Register.Domains, based on IANA's list](https://register.domains/en/blog/domain-extensions-list)).

### The critical-thinking part: a hierarchy is also a chain of trust

Delegation means every level controls the level below it. Whoever controls the `.com` delegation for your domain, meaning your registrar account, can point your whole domain anywhere. Whoever controls your zone controls your website, your email and your domain verifications.

That has two consequences people forget:

1. **Your DNS is only as secure as the weakest account in the chain:** the registrar login, the DNS host login, and any API token with edit rights.
2. **Speed comes at the cost of freshness.** Caching makes DNS fast and resilient, but it means a change is never instant. Every DNS design decision trades these two against each other.

## 2. What makes each DNS server type different

### The four roles, plus one most diagrams forget

| Role | Who runs it | What it knows | Does it cache? | What it answers |
|---|---|---|---|---|
| **Stub resolver** | Your device's operating system | Nothing, apart from its cache and hosts file | Yes, briefly | It asks; it never searches |
| **Recursive resolver** | Your ISP, your company, or public services (1.1.1.1, 8.8.8.8) | Only what it has cached | Yes, that is its main job | The final answer, after doing all the work |
| **Root server** | 12 operators, coordinated through IANA | Which servers handle each TLD | Not applicable | A referral: "ask the .com servers" |
| **TLD server** | The registry (for example, Verisign runs .com) | Which name servers handle each domain in that TLD | Not applicable | A referral: "ask ns1.yourdnshost.com" |
| **Authoritative server** | Your DNS host (Cloudflare, Route 53, your registrar…) | Your actual records | Not applicable | The real answer, marked as authoritative |

The one most diagrams forget is the **forwarder**. Your home router usually does not resolve anything itself. It forwards your question to your ISP's resolver. Many office networks do the same, which is why an office can see different answers from a phone on mobile data.

### Recursive and iterative queries

Your device asks the resolver a **recursive** question: "Give me the final answer, do whatever it takes." The resolver then asks root, TLD and authoritative servers **iterative** questions: "Tell me what you know, or who to ask next." Root and TLD servers never do the walking for anyone. That is why they can answer enormous volumes of queries: each answer is a short referral.

### A way to remember it

Think of a library:

- **You (stub resolver)** ask the librarian a question and wait.
- **The librarian (recursive resolver)** does the walking, and remembers popular answers so the next person gets them instantly.
- **The building directory (root)** only says which floor a subject is on.
- **The floor index (TLD)** only says which shelf belongs to which publisher.
- **The book itself (authoritative server)** contains the answer.

Or in one line: **root knows where, TLD knows who, authoritative knows what, and the recursive resolver does the walking and remembers.**

### Registry, registrar, DNS host, web host: four different companies

Most real-world confusion is not about server types but about who is responsible for what. Four roles that are often four different companies:

| Role | Example | What it controls |
|---|---|---|
| **Registry** | Verisign for .com, SIDN for .nl | The TLD itself and its servers |
| **Registrar** | The company where you bought the domain | Which name servers your domain points to (the NS records at the TLD), plus renewal and transfer locks |
| **DNS host** | Cloudflare, Route 53, or the registrar itself | Your zone: A, CNAME, MX, TXT and other records |
| **Web host** | Your server, Vercel, Shopify, Webflow… | The website the records point to |

When someone says "I changed the DNS but nothing happened", the first question is: **did you change it at the company whose name servers are actually listed for the domain?** Editing records at a registrar while the domain uses Cloudflare's name servers does nothing at all.

### Why you would want to know this

Because each layer fails differently, and the error tells you which layer to look at:

| What you see | What it usually means | Which layer |
|---|---|---|
| **NXDOMAIN** (name does not exist) | The record is missing, there is a typo, or the domain is not delegated (expired, or name servers wrong at the registrar) | Authoritative or registrar |
| **SERVFAIL** | The resolver could not get a trustworthy answer: name servers unreachable, or a broken DNSSEC chain | Delegation or DNSSEC |
| **The old answer** | A cache still holds the previous record until its TTL ends | Recursive resolver or device |
| **The right answer, but the site still fails** | DNS is fine; the problem is the server, certificate or redirects | Web host or proxy |

### The record types worth knowing

| Record | What it does | Example |
|---|---|---|
| **A / AAAA** | Points a name to an IPv4 / IPv6 address | `www → 192.0.2.10` |
| **CNAME** | Makes a name an alias of another name | `shop → shops.myshopify.com` |
| **MX** | Says which servers receive email for the domain | `example.com → mx1.mailhost.com` |
| **TXT** | Free text, used for SPF, DKIM, DMARC and ownership verification | `v=spf1 include:_spf.google.com ~all` |
| **NS** | Says which name servers are authoritative | `example.com → ns1.dnshost.com` |
| **SOA** | Zone settings, including how long "does not exist" answers are cached | One per zone |
| **CAA** | Lists which certificate authorities may issue TLS certificates | `0 issue "letsencrypt.org"` |
| **PTR** | Reverse lookup: IP address to name (important for mail servers) | `192.0.2.10 → mail.example.com` |

## 3. Subdomains: what they are and why they split your data

### What a subdomain really is

In DNS terms, a subdomain is simply a name further down the tree. `blog.example.com` sits under `example.com`, which sits under `.com`. It has some characteristics that matter in practice:

- **It can point anywhere.** `www` can be your own server, `shop` can be a CNAME to Shopify, and `help` can be a CNAME to Zendesk. Each subdomain is an independent set of records.
- **It can be delegated.** You can give `dev.example.com` its own NS records, so another team or provider runs that part of the zone without touching the rest.
- **There are size limits.** Each label can be up to 63 characters and a full name up to 255 bytes ([RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)).
- **Wildcard certificates cover one level.** A certificate for `*.example.com` covers `blog.example.com`, but not `eu.blog.example.com`.
- **Subdomains share cookies, but not storage.** A cookie set for `example.com` can be read by every subdomain. But browser storage such as `localStorage` belongs to one exact origin. A consent choice saved in `localStorage` on `www` is invisible on `shop`, which is why consent banners across subdomains should store the choice in a cookie on the parent domain.

### Why companies use subdomains

- **Different platforms.** Marketing pages on a CMS, the store on Shopify, documentation on another tool, the app on its own servers. Subdomains let each live on its best platform under one brand.
- **Different owners.** Each team or vendor can manage its own subdomain without access to the main site.
- **Email reputation.** Many companies send newsletters from a subdomain such as `news.example.com`, so a marketing campaign that triggers spam complaints does not hurt the reputation of the domain used for invoices and personal email.
- **Isolation.** A risky or experimental app on its own subdomain is easier to lock down, monitor and remove.

### How subdomains split your analytics and marketing data

This is where DNS meets marketing. A subdomain is one domain in DNS, but tools treat it in different ways:

- **Google Analytics 4** sets its cookie on the parent domain by default (the `cookie_domain: auto` setting), so a visitor moving from `www` to `shop` stays the same user. The rule is to use the same GA4 property and data stream on every subdomain, and **not** to set up cross-domain tracking between subdomains ([Analytics Mania](https://www.analyticsmania.com/post/subdomain-tracking-with-google-analytics-and-google-tag-manager/)). To split the data, add the **Hostname** dimension to your reports instead of creating separate properties.
- **Google Search Console** treats each subdomain as a separate property if you use URL-prefix properties. A **Domain property**, verified with a DNS TXT record, covers every subdomain and protocol in one view ([SEOTesting](https://seotesting.com/google-search-console/domain-vs-url-prefix/)). Use both: the Domain property for the full picture, and URL-prefix properties to focus on one subdomain.
- **Ad platforms and consent tools** often need each subdomain added explicitly to allowed domain lists, Content Security Policies and consent banner settings. A subdomain missing from a Content Security Policy can quietly block conversion tags without any visible error.

### The risk: subdomain takeover

Subdomains get created for a campaign, an event or a test, and then forgotten. Imagine `promo.example.com` is a CNAME to a cloud app. The campaign ends and the app is deleted, but the CNAME stays. That is a **dangling DNS record**. On many cloud platforms an attacker can now create a new app with the same name, and your subdomain serves their content.

Microsoft's guidance on this attack points out two things that surprise people: the attacker can get a valid TLS certificate for your subdomain, and if your site shares cookies across subdomains, the attacker's page can read them ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover)). The fix is process, not technology: **delete the DNS record before you delete the resource**, and review CNAMEs to third-party services regularly.

## 4. DNS advice for companies building SEO and organic growth

### Subdomain or subfolder?

Google's official position is that both work. John Mueller has said that Google Search is fine with either, and that you should pick a structure you can keep for a long time, because changing URLs takes time to settle in search ([Search Engine Roundtable](https://www.seroundtable.com/seo-google-fight-subdomains-subdirectories-25126.html)). Many SEOs disagree, based on case studies where moving a blog from a subdomain into a subfolder lifted traffic.

My reading: both statements can be true at the same time. Google can crawl and rank either. But a subfolder keeps everything operationally together: one host to crawl, internal links that are clearly internal, one Search Console view, one analytics stream. Subdomains are easier to get slightly wrong. So, **for content that should build the main brand's organic visibility (blog, guides, resources), I default to subfolders.** I use subdomains when the content genuinely lives on another platform or serves another purpose (app, help centre, status page).

### Ten DNS habits that protect organic growth

1. **Verify a Domain property in Search Console with a DNS TXT record, and never delete that record.** If DNS changes and the record disappears, verification fails. Google's site move guide specifically warns to check that verification still works after a move ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)).
2. **Choose one canonical host** (`www.example.com` or `example.com`) and 301-redirect the other. Both must resolve in DNS, or the redirect can never happen.
3. **Lower the TTL before any change**, at least one full old TTL in advance. If a record has a 24-hour TTL, lower it to 300 seconds at least a day before the switch. Raise it again once things are stable.
4. **Test the new server before you switch DNS.** With `curl --resolve` you can request your real domain from the new server's IP, before any visitor goes there (see the troubleshooting section).
5. **Use the Change of Address tool only for real domain moves.** Google says not to use it for HTTP to HTTPS moves or for www to non-www changes, and to keep redirects for at least 180 days ([Google Search Console Help](https://support.google.com/webmasters/answer/9370220)). I covered redirect mapping in more detail in [redirects during a CMS migration](/blog/technical-seo/redirects-seo-cms-migration/).
6. **Protect the domain itself.** Turn on auto-renew, a registrar lock and two-factor authentication on the registrar account. An expired domain takes your rankings, email and verifications with it.
7. **Treat email records as part of the website.** Since February 2024, Gmail requires every sender to have SPF or DKIM, and anyone sending more than 5,000 messages a day to Gmail must have SPF, DKIM and DMARC ([Gmail sender guidelines](https://support.google.com/mail/answer/81126)). Lost TXT records after a DNS move are a classic way to lose lead and order emails without noticing.
8. **Add a CAA record** to limit which certificate authorities may issue certificates for your domain ([Let's Encrypt](https://letsencrypt.org/docs/caa/)). It is cheap, and it narrows who could ever issue a valid certificate for your name. Just remember to update it if you change CDN or host, or certificate renewal will fail.
9. **Use a DNS provider built for availability.** If your name servers are down, Googlebot cannot reach your site any more than a visitor can. Search Console's Crawl stats report shows host problems, including DNS failures.
10. **Keep a DNS inventory**: an export of every zone, with a note of what each record is for and who owns it. It is the single most useful document in any migration.

On international sites: subdomains such as `de.example.com` are one option among several. I compared the trade-offs in [country domains vs one multilingual site](/journal/2026-10-29-country-domains-vs-one-multilingual-site-when-each-pays-off/).

## 5. Cloudflare DNS features most people never use

Cloudflare is one of the most widely used DNS hosts. Most people use it to add an A record and turn on the orange cloud. These features are less known and genuinely useful. Plans and limits change, so check the linked documentation before relying on any of them.

### The orange cloud is not a DNS setting, it is a routing setting

A record set to **Proxied** (orange cloud) answers DNS queries with Cloudflare's IP addresses, so visitors connect to Cloudflare, which then connects to your server. **DNS only** (grey cloud) answers with your real server IP. Only A, AAAA and CNAME records can be proxied. Proxied records always have a TTL of 300 seconds, which you cannot change. DNS-only records can be set from 60 seconds (30 on Enterprise) to one day ([Cloudflare: proxy status](https://developers.cloudflare.com/dns/proxy-status/), [TTL](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/)).

The security lesson: one grey-cloud record on the same server, such as `ftp`, `mail` or `direct`, reveals your real server IP to anyone who looks it up. Attackers can then go around Cloudflare entirely.

### CNAME flattening, or how a CNAME can live at the root

The DNS standard does not allow a CNAME at the root of a domain (`example.com`), because a CNAME may not share its name with any other record, and the root always has NS and SOA records ([Let's Encrypt on CNAME rules](https://letsencrypt.org/docs/caa/)). Yet many hosting platforms ask you to point your root domain at their hostname.

Cloudflare solves this with **CNAME flattening**: it follows the CNAME itself and returns the final IP address. At the root this happens automatically on every plan. One caveat: if a vendor checks for the CNAME record itself to verify your domain, flattening can make that check fail ([Cloudflare: CNAME flattening](https://developers.cloudflare.com/dns/cname-flattening/)).

### Purge a public resolver's cache

After you change a record, you can ask Cloudflare's resolver to drop its cached copy at `1.1.1.1/purge-cache`, and Google's at its [Flush Cache page](https://developers.google.com/speed/public-dns/cache). When Cloudflare announced its tool, it explained that 1.1.1.1 caches records for up to three hours, or less if the TTL is shorter ([Cloudflare blog](https://blog.cloudflare.com/refresh-stale-dns-records-on-1-1-1-1/)). Useful when a client says "it still shows the old site" and they use one of these resolvers.

### 1.1.1.1 for Families

Two free resolver addresses that filter at the DNS level: `1.1.1.2` blocks known malware domains, and `1.1.1.3` blocks malware and adult content ([Cloudflare blog](https://blog.cloudflare.com/introducing-1-1-1-1-for-families/)). Setting them on a home router protects every device on the network without installing anything.

### Email Routing: a professional address with no mailbox

Email Routing forwards addresses such as `hello@yourdomain.com` to an existing inbox for free, and adds the MX and SPF records for you. It only receives: Cloudflare does not send email for you and has no SMTP server ([Cloudflare: Email Routing](https://developers.cloudflare.com/email-routing/)).

### Cloudflare Tunnel: a public website with no public IP

With Tunnel, a small program called `cloudflared` on your server opens an **outbound** connection to Cloudflare. Visitors reach your app through Cloudflare, and your firewall can block all incoming traffic ([Cloudflare: Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/)). It removes the "leaked origin IP" problem completely, because there is no public origin IP to leak.

### Bulk Redirects for migrations

Instead of hundreds of rules on the server, you can upload a CSV of old and new URLs to a Bulk Redirect list, with 301, 302, 307 or 308 status codes ([Cloudflare blog](https://blog.cloudflare.com/maximum-redirects-minimum-effort-announcing-bulk-redirects/)). It is a clean way to keep a migration's redirect map in one place that marketing can audit. Note that redirects only work on proxied hostnames.

### DNSSEC migration without switching it off

The usual advice when moving a domain to Cloudflare is to remove DNSSEC at the registrar first. Cloudflare also documents a **multi-signer** method that keeps DNSSEC active during the move, by temporarily trusting both providers' keys ([Cloudflare: migrate with DNSSEC](https://developers.cloudflare.com/dns/dnssec/dnssec-active-migration/)).

### Smaller things worth knowing

- **Registrar at cost.** Cloudflare Registrar charges what the registry charges, without markup ([Cloudflare Registrar](https://developers.cloudflare.com/registrar/)).
- **Zone holds** (Enterprise only) stop another team in your company from adding your domain to a different Cloudflare account and taking it over by accident ([Cloudflare: zone holds](https://developers.cloudflare.com/fundamentals/account/account-security/zone-holds/)).

## 6. The DNS problems teams hit during migrations and takeovers

### First, a method: work down the layers

Most DNS troubleshooting goes wrong because people test from their own browser, which has the most caches between them and the truth. Work from the top of the tree down instead, and compare at each step.

```bash
# 1. Is the domain delegated, and to which name servers?
dig NS example.com +short

# 2. What does the TLD say? (asks a .com server directly, no cache)
dig @a.gtld-servers.net example.com NS +norecurse

# 3. What does YOUR authoritative server say? This is the truth.
dig @ns1.yourdnshost.com www.example.com A

# 4. What do public resolvers say? (These may be cached.)
dig @1.1.1.1 www.example.com A
dig @8.8.8.8 www.example.com A

# 5. Follow the whole chain from the root, step by step
dig +trace www.example.com

# 6. Check mail, verification and security records
dig MX example.com +short
dig TXT example.com +short
dig TXT _dmarc.example.com +short
dig CAA example.com +short
dig DS example.com +short
```

If step 3 is right and step 4 is wrong, it is a cache and time will fix it. If step 3 is wrong, you are editing the wrong zone or the record is wrong. If step 1 or 2 shows unexpected name servers, the problem is at the registrar. On Windows, `nslookup -type=MX example.com 1.1.1.1` or PowerShell's `Resolve-DnsName` do the same job.

To clear your own caches: on macOS, `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`. On Windows, `ipconfig /flushdns`. In Chrome, open `chrome://net-internals/#dns` and clear the host cache.

### The problems, ranked by how often I see them

**1. "DNS propagation" that is really caching.** DNS changes do not travel across the internet. Each cache simply keeps the old answer until its TTL runs out, so different people see different versions for a while. Changing name servers takes longest, because the delegation records at the TLD often have long TTLs (the .com zone uses two days). The fix is planning: lower TTLs in advance.

**2. Records lost when moving to a new DNS host.** When you move name servers, only the records you recreated exist. Cloudflare scans for existing records during setup, but its own migration guide tells you to review every record and add what is missing before you change name servers ([Cloudflare DNS migration guide](https://developers.cloudflare.com/learning-paths/dns-best-practices/concepts/phase-1/)). The usual victims are MX records, SPF/DKIM/DMARC, verification TXT records, and CNAMEs for tools like the email platform or help desk. **Export the old zone file first and compare record by record.**

**3. A leftover DNSSEC record at the registrar.** If the registrar still publishes a DS record for the old provider's keys, resolvers that validate DNSSEC cannot verify the new provider's answers and return SERVFAIL. For some users the site is down, for others it works, depending on their resolver. In Cloudflare this often shows as a zone stuck in "Pending Nameserver Update" ([Cloudflare troubleshooting](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/pending-nameservers/)). Remove the old DS record, wait for its TTL (Cloudflare suggests up to 1.5 times the TTL), then switch, or use multi-signer migration.

**4. Name servers that don't match exactly.** The registrar must list exactly the name servers your DNS host gave you, and no extra old ones. A mix means some resolvers ask the old provider and get old answers ([Cloudflare troubleshooting](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/nameservers/)).

**5. Negative caching.** If someone looks up `new.example.com` before you create it, resolvers cache the "does not exist" answer. How long is set by the zone's SOA record: the lower of the SOA's own TTL and its minimum field ([RFC 2308](https://www.rfc-editor.org/rfc/rfc2308)). So the record exists, but some people keep getting NXDOMAIN. Create records before you announce or test the name.

**6. CNAME conflicts.** A name with a CNAME cannot have any other record. Adding a CNAME at the root, or adding a TXT record next to a CNAME, fails or behaves unpredictably. Use a provider with CNAME flattening or ALIAS records for the root.

**7. Redirect loops after putting a site behind a proxy.** `ERR_TOO_MANY_REDIRECTS` right after moving behind Cloudflare usually means the SSL mode is **Flexible**: Cloudflare talks to your server over plain HTTP, your server redirects to HTTPS, and the loop begins ([Cloudflare docs](https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/)). Install a certificate on the server and use **Full (strict)**.

**8. Certificates that won't issue.** New hosts often issue certificates automatically, but only once DNS points to them, and only if your CAA record allows their certificate authority. Check both.

**9. Dangling records after decommissioning.** Every migration leaves records pointing to old servers and old vendors. Each one is a potential subdomain takeover. Delete them as part of the project, not "later".

**10. Self-hosted DNS that depends on the thing it describes.** On 4 October 2021, Facebook, Instagram and WhatsApp were unreachable for about six hours. A maintenance command took Facebook's backbone network offline. Facebook's DNS servers were designed to stop announcing themselves to the internet if they could not reach the data centres, so they did exactly that. The DNS servers were running, but nobody could reach them. Getting engineers physical and secure access to the affected systems then took extra time, which slowed the fix ([Engineering at Meta](https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/)). The lesson for any company: **keep DNS and the tools you need to fix it independent of the systems they point to.**

### Taking over a domain or a service you didn't set up

When you inherit a website, a client or a company's infrastructure, go through this checklist before changing anything:

1. **Who is the registrar, whose name is the account in, and when does the domain expire?** Domains registered in a former employee's or agency's personal account are a common, serious risk.
2. **Where are the name servers pointing?** (`dig NS`). That tells you which DNS host actually matters.
3. **Export every zone** and write down what each record is for. Ask about every record you can't explain before you delete it.
4. **Find the email setup:** MX, SPF, DKIM, DMARC, and any marketing tools that send as the domain.
5. **List third-party CNAMEs** and check that each target still exists.
6. **Check DNSSEC status** (`dig DS`) before any provider change.
7. **Move access to company-owned accounts** with two-factor authentication, and remove access for people who have left.

### Test the new server before anyone sees it

This trick avoids most launch-day surprises. `curl --resolve` sends a request for your real domain to an IP address you choose, ignoring DNS:

```bash
curl -sI --resolve www.example.com:443:203.0.113.10 https://www.example.com/
```

If the new server answers correctly, with the right certificate and redirects, you can switch DNS with confidence.

## 7. How attackers abuse DNS, and what actually defends it

DNS was designed in a trusting era: answers are usually sent over UDP, in plain text, without signatures. Most DNS attacks exploit one of those three facts.

| Attack | What happens | Real example | Defence |
|---|---|---|---|
| **Cache poisoning** | An attacker races the real server to answer a resolver with a forged reply, and the resolver caches the lie for everyone | In 2008, Dan Kaminsky showed a practical way to poison almost any resolver (CVE-2008-1447). Vendors coordinated patches that randomise the source port of queries, making forgeries much harder to guess ([US-CERT TA08-190B](https://archives-cert.univ-amu.fr/2008/certmsgVULN277)) | Patched resolvers, and DNSSEC validation |
| **Registrar or DNS account hijacking** | The attacker logs into your registrar or DNS host and repoints your domain | Every domain is exposed to this | Two-factor authentication, registrar lock, few people with access |
| **DDoS on DNS providers** | Name servers are flooded so nobody can resolve your domain | On 21 October 2016, the Mirai botnet of hacked cameras and routers attacked the DNS provider Dyn. Twitter, Netflix, Reddit, GitHub, Spotify and others were unreachable for many users ([APNIC](https://blog.apnic.net/2016/10/26/quick-look-attack-dyn/)) | Large anycast DNS providers; for critical domains, a second DNS provider |
| **Rogue DNS through DHCP** | A fake DHCP server on a network hands out an attacker's DNS server | I covered this in [DHCP and network security](/journal/2026-10-29-the-protocol-that-trusts-everyone-dhcp-and-network-security/) | DHCP snooping, encrypted DNS |
| **Subdomain takeover** | A dangling CNAME is claimed by an attacker | See section 3 | Remove records before resources |
| **DNS tunnelling** | Malware hides data inside DNS queries, because DNS is allowed out of almost every network | Common in data theft by malware | Monitoring DNS traffic for unusual names and volumes |

### DNSSEC and encrypted DNS solve different problems

This is the point I see confused most often:

- **DNSSEC** adds digital signatures to DNS records, so a validating resolver can prove an answer really came from the domain's owner and was not changed. It protects **integrity**. It does not hide anything: the queries are still readable.
- **DNS over HTTPS (DoH)** and **DNS over TLS (DoT)** encrypt the connection between your device and your resolver. They protect **privacy** on that one link, for example on café Wi-Fi. They do not prove that the resolver's answer is genuine.

You need both for full protection, and each one alone protects against different attacks. The resolver you choose also sees every domain you visit, so choosing a resolver is a privacy decision as well as a speed decision.

## Five scenarios to test your thinking

<details>
<summary><strong>1. You changed the A record an hour ago. You see the new site, your colleague sees the old one. Who is right?</strong></summary>

Both. Your colleague's resolver cached the old record and will keep it until the TTL ends. Check the authoritative server directly with <code>dig @your-nameserver</code>. If it shows the new IP, nothing is broken.

</details>

<details>
<summary><strong>2. After moving name servers, the website works but no contact form emails arrive. Where do you look?</strong></summary>

The new zone. MX records and the SPF, DKIM and DMARC TXT records were probably not recreated, so mail has nowhere to go or fails authentication. Compare the old zone export with the new zone.

</details>

<details>
<summary><strong>3. The site works on mobile data but not on the office Wi-Fi. What is the likeliest cause?</strong></summary>

Different resolvers. The office network may use its own DNS server with a stale cache, an internal override (split DNS), or a filtering policy. Compare <code>dig</code> results from both networks, and check the office resolver.

</details>

<details>
<summary><strong>4. Your site is behind Cloudflare, but you are still being attacked directly. How did the attacker find your server?</strong></summary>

Probably from a grey-cloud record on the same server (such as <code>mail</code> or <code>ftp</code>), an old DNS history service, or the server's own outgoing emails. Move those services, change the server IP, and allow only Cloudflare's IPs (or use Tunnel).

</details>

<details>
<summary><strong>5. Some users get SERVFAIL for your domain right after a DNS provider change, and others don't. Why the split?</strong></summary>

A leftover DS record. Users whose resolver validates DNSSEC get SERVFAIL because the signatures no longer match. Users whose resolver does not validate get normal answers. Remove the old DS record at the registrar.

</details>

## The takeaway

DNS is not really a phonebook. It is a distributed, delegated, cached database that the whole internet trusts by default. The hierarchy exists because one central file could not scale. The server types exist because each level only needs to know who is next. Caching is what makes it fast, and what makes every change slower than you expect.

For growth teams, DNS is the layer under every website, email and verification you depend on. Most DNS incidents I see are not sophisticated attacks. They are a forgotten record, a leftover DS record, an expired domain or an account nobody can log into. **Keep an inventory, lower TTLs before changes, test against the authoritative server, and remove records before you remove the things they point to.**

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
- [Proxy status](https://developers.cloudflare.com/dns/proxy-status/), [Time to Live](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/), [CNAME flattening](https://developers.cloudflare.com/dns/cname-flattening/) and [DNSSEC migration](https://developers.cloudflare.com/dns/dnssec/dnssec-active-migration/), Cloudflare Docs
- [DNS migration best practices](https://developers.cloudflare.com/learning-paths/dns-best-practices/concepts/phase-1/), [Pending Nameserver Update](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/pending-nameservers/) and [nameserver troubleshooting](https://developers.cloudflare.com/dns/zone-setups/troubleshooting/nameservers/), Cloudflare Docs
- [ERR_TOO_MANY_REDIRECTS](https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/), Cloudflare Docs
- [Email Routing](https://developers.cloudflare.com/email-routing/), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), [Registrar](https://developers.cloudflare.com/registrar/) and [Zone holds](https://developers.cloudflare.com/fundamentals/account/account-security/zone-holds/), Cloudflare Docs
- [Refresh stale DNS records on 1.1.1.1](https://blog.cloudflare.com/refresh-stale-dns-records-on-1-1-1-1/), [Introducing 1.1.1.1 for Families](https://blog.cloudflare.com/introducing-1-1-1-1-for-families/) and [Announcing Bulk Redirects](https://blog.cloudflare.com/maximum-redirects-minimum-effort-announcing-bulk-redirects/), Cloudflare Blog
- [More details about the October 4 outage](https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/), Engineering at Meta
- [A quick look at the attack on Dyn](https://blog.apnic.net/2016/10/26/quick-look-attack-dyn/), APNIC Blog
- [Technical Cyber Security Alert TA08-190B: Multiple DNS implementations vulnerable to cache poisoning](https://archives-cert.univ-amu.fr/2008/certmsgVULN277), US-CERT (archived copy)
