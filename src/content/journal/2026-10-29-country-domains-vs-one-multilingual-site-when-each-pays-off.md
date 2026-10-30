---
title: "Country Domains vs. One Multilingual Site: When Each Pays Off"
description: Why I advised a transport company to replace its country domains
  with one multilingual site, and how to decide when country domains are worth
  it.
pubDate: 2026-10-29
tags:
  - SEO
  - hreflang
  - ccTLD vs. subdirectory structure for international SEO
  - multilingual website
  - machine translation SEO
  - domain consolidation
draft: false
---
This week, together with my team, I worked with a client that sells to two very different audiences: customers in its home market, and customers arriving from abroad. The client will stay anonymous, so the examples in this article use a hypothetical hotel group instead of the real business. The lesson is the same.

Over the years, the client had registered a long list of country-code domains, one for each of the main countries its international customers come from. The logic was easy to follow. A customer in Denmark would find the Danish domain, a customer in France the French one, and each market would feel it had a local site.

We recommended a different approach, and the client agreed to move in that direction: one international version of the website, available in several languages, for every customer outside the home market. In other words, one site with several languages instead of one site per country.

The conversation was a good reminder that international SEO decisions are rarely only about search engines. They depend on what the business sells, who buys it and how much work the organization can realistically maintain.

In this article I explain:

- how search engines decide which country or language a page is for
- what a collection of country domains really costs
- how automatic translation fits in
- when separate country domains are worth it

## How search engines decide which country a page is for

When someone searches, Google tries to show the version of a page that matches their language and location. It uses several signals to decide, and the strongest country signal is the domain.

**Country domains.** A country-code top-level domain (ccTLD) is a domain ending linked to one country, such as .de for Germany or .fr for France. Google treats it as a clear sign that the site is meant for that country. But Google's own documentation also lists the downsides: country domains cost more, need more infrastructure, sometimes have strict registration rules and can only target one country.

**One domain with sections.** The alternative is to keep everything on one domain and create a section for each version, for example example.com/de/ for German. Everything lives in one place, so Google describes this option as easy to set up and cheap to maintain. The downside is that the address alone tells visitors less about who the page is for.

**hreflang tags.** Whatever structure you choose, you need a way to tell Google which pages are translations of each other. That is the job of hreflang, a small tag in the page's code or in the sitemap. It says, for example, "this English page and this Spanish page contain the same content." Google then shows each person the version that fits them best.

Two details are easy to get wrong:

- Every version has to point to every other version. If the English page points to the Spanish page but not the other way around, Google ignores the tags.
- An x-default tag tells Google which page to show when none of the languages match. This is usually a page where visitors choose their language.

Two less obvious points came up while I researched this.

First, not every country domain works as a country signal. Google treats some of them, including .co, .io, .me and .tv, as generic domains, because people use them that way. A company that bought one of these to target the matching country may not get the benefit it expected.

Second, Google Search Console used to have a setting for choosing a target country manually. It was removed in 2022. Google now works out the country from the domain, the hreflang tags and clues on the page, such as local addresses, phone numbers, currency and language.

## What a domain for every country really costs

Registering a domain is cheap. Running it as a real website is not.

Each country domain is, in practice, a separate website. It needs its own content, technical maintenance and monitoring. Imagine our hotel group changes its cancellation policy or redesigns its booking page. That change now has to be made correctly on every site. What usually happens is predictable: one or two sites get the attention, and the others slowly become outdated copies.

The SEO cost is less visible. Each domain has to build its own reputation with search engines. A link from a travel blog to the Danish site does nothing directly for the French one.

Splitting a brand across many domains splits the reputation it has earned. A single domain lets every link and mention strengthen the whole site.

There is also a duplication problem. If several domains show almost the same content in the same language, search engines have to choose which one to show, and it may not be the one the business wants. Google's advice in that case is to pick a preferred version. That raises an obvious question: why keep the others?

Finally, many companies buy country domains only to protect their brand, so nobody else can use them, and redirect them to the main site. That is a sensible precaution, but it is not an SEO strategy. A domain that only redirects sends no country signal of its own.

## The recommendation: one international site, many languages

The question we kept coming back to was simple: does the product change depending on the customer's country?

For many businesses, it does not. In our hypothetical hotel group, a room is the same room whether the guest lives in Madrid, Chicago or Seoul. The price, the location and the services are the same. What changes is the language the customer reads, and perhaps the currency they want to see and the way they prefer to pay.

When the product is the same and only the language changes, targeting countries solves the wrong problem. Targeting languages solves the right one.

So we proposed splitting the audience in two:

- **Home market customers** keep using the existing main site.
- **Everyone else** uses one international version, with a language selector, a separate address for each language and hreflang tags connecting them.

The arguments that convinced the client were practical as much as technical:

- **One website to maintain.** A new policy or price change is published once, not many times.
- **One domain building reputation.** Links and mentions from every country strengthen the same site.
- **Adding a language is simple.** It becomes a translation task, not a new website project.

Two implementation details need care.

First, don't send visitors to a language automatically based on where they are. Google advises against it, because it can stop both people and search engines from seeing all the versions. Google's crawler mostly visits from the United States, so it might only ever see one of them. A visible language selector works better.

Second, moving from many domains to one is a migration. If a country domain already appears in Google or has links from other sites, each of its pages should be permanently redirected (a 301 redirect) to the matching page in the right language. Sending everything to the home page throws away what those pages have earned.

## Automatic translation: useful, with limits

The plan relies on automatic translation, which deserves an honest look. For years, machine-translated pages were seen as a risk for search rankings.

Google's position has changed. In March 2024 it introduced a policy against "scaled content abuse": publishing large numbers of pages mainly to rank in search rather than to help people. Automatic translation is mentioned as one way to produce such pages, but what matters is whether the content is useful, not how it was made. Google has also removed older advice that told websites to hide automatically translated pages from search.

In practice, translation that helps someone complete a real task is fine. Translation used to create thousands of low-value pages is not.

For most booking websites, this is easy to apply. Most pages are practical: room descriptions, availability, search forms and checkout steps. Good machine translation handles these well, and a visitor reading them in their own language is clearly better served.

A smaller set of text carries legal or financial weight: cancellation and refund conditions, terms and conditions, payment error messages, anything a customer might rely on in a dispute. That text should be checked by a native speaker, once for each language and again whenever the original changes.

There is also an important technical requirement. For Google to find your website in different languages, each translation needs its own URL. For example, an English page could be at example.com/en/services, while its Spanish translation would be at example.com/es/servicios.

Some websites use translation widgets that change the text directly in the visitor's browser without creating separate pages. This lets someone read the content in their preferred language, but Google may only discover and index the original version. As a result, the Spanish translation might not appear when someone searches in Spanish.

To make each language discoverable, the website should provide a separate, accessible page for every translation, with its own translated title and meta description. It should also use hreflang tags, so Google understands that the English and Spanish pages contain the same content and can show the right version to people searching in each language.

## When a domain per country is worth it, and when it is not

Country domains are not a mistake in themselves. They make sense when the business really is different in each country. The question to ask is: does the country change what you sell, or only the language you sell it in?


| If this is true | It points toward |
| ---------------------------------------------------------------------------- | ----------------------------------- |
| Prices, products or availability differ by country | Country domains or country sections |
| Each country has its own company, regulations or tax rules shown on the site | Country domains |
| Local teams create and maintain their own content for each market | Country domains |
| The product is the same everywhere and only the language changes | One site with language sections |
| Customers come from many countries to buy in a single market | One site with language sections |
| Nobody is available to maintain separate sites | One site with language sections |
| The goal is to add new languages quickly | One site with language sections |


Two rules of thumb cover most cases:

- If nobody will produce real local content for a country site, you probably should not build one.
- If language is the real difference, target languages, not countries.

Many businesses end up somewhere in between: one domain organized by language, with country-specific sections only for the few markets where the offer really differs.

## What I took from it

The most valuable part of the conversation was not about SEO itself, but about reconsidering the original problem.

The client had bought multiple country domains to appear more local in different markets. But was this really what international customers needed?

A customer from another country mainly wants to understand the information, find the right service and pay without difficulty. Offering the website in their language, explaining the service clearly and supporting familiar payment methods can make a much bigger difference than a local domain.

The discussion also highlighted something I have seen in other technical projects: complexity often grows through a series of decisions that each seem reasonable on their own. Every new domain had a purpose when it was bought. But managing them together created extra maintenance work, without a clear picture of the benefits.

Sometimes the most valuable technical contribution is identifying what can be simplified. Making that case requires understanding not only the technology, but also the costs, the operational impact and the customer experience.

We have agreed on a direction, but the implementation will be the real test. The next steps include deciding which languages to prioritize, making sure important legal and commercial information is translated accurately, redirecting existing pages correctly, and measuring whether the changes improve international visibility and sales.

As the project develops, I hope to share more about the implementation, the challenges we run into and, eventually, what the data tells us about the results.

## Sources

- [Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), Google Search Central
- [Tell Google about localized versions of your page (hreflang)](https://developers.google.com/search/docs/specialty/international/localized-versions), Google Search Central
- [The International Targeting report is deprecated](https://support.google.com/webmasters/answer/12474899?hl=en), Google Search Console Help
- [Google March 2024 spam updates: scaled content abuse](https://www.seroundtable.com/google-march-2024-spam-updates-37002.html), Search Engine Roundtable
- [Google removes robots.txt guidance for blocking auto-translated pages](https://www.searchenginejournal.com/google-removes-robots-txt-guidance-for-blocking-auto-translated-pages/548870), Search Engine Journal

