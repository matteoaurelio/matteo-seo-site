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
This week I worked with a company in the transportation sector that has to two very different audiences: customers in its home market, and visitors arriving from abroad. 

Over the years, the company had registered a long list of country-code domains, one for each of the main countries its international customers come from. The logic was easy to follow. A traveler in Denmark would find the Danish domain, a traveler in France the French one, and each market would feel it had a local site.

Together with my team, we recommended a different approach, and the team agreed to move in that direction: a single international version of the website, offered in several languages, for every customer outside the home market. One site with a language layer, instead of a site per country.

The conversation was a good reminder that international SEO decisions are rarely about search engines alone. They depend on what the business actually sells, who buys it, and how much operational weight the organization can carry. Below I explain how search engines decide which country or language a page is for, what a portfolio of country domains really costs, how automatic translation fits in, and how to tell when separate domains are worth it.

## How search engines decide which country a page is for

When someone searches, **Google tries to show the version of a page that matches their language and location.** It relies on a handful of signals, and the strongest country signal is the domain itself.

A country-code top-level domain (ccTLD) is a domain ending tied to one country, such as .de for Germany or .fr for France. Google's documentation treats it as a clear geotargeting signal, but lists real costs: **it is more expensive, needs more infrastructure, sometimes has strict registration rules, and can only target a single country.**

The alternative is to keep everything on one generic domain and separate the versions inside it, usually with subdirectories such as example.com/de/. Everything lives on the same host, which Google describes as easy to set up and cheap to maintain. The tradeoff is that the URL alone says less about who the page is for.

Whichever structure you choose, the mechanism that connects language versions is **hreflang**. It is an annotation, placed in the *page's HTML, in HTTP headers or in an XML sitemap*, that tells Google several URLs are versions of the same content in different languages or for different regions. Google then points each searcher to the most suitable version. Two details matter in practice. Every version must reference every other version, because one-sided annotations are ignored. And an `x-default` value names the page to show when no language matches, typically a language selector.

Two less obvious points came up while I researched this. 

- First, not every country-code domain sends a country signal. Google treats some of them, including .co, .io, .me and .tv, as generic domains because people use them that way. A company that registered one of those to target the matching country may not be getting the signal it paid for. 
- Second, the manual country-targeting setting that Search Console used to offer was retired in 2022. Geography is now inferred from the domain, hreflang and on-page cues such as local addresses, phone numbers, currency and language.

## What a domain for every country really costs

Registering a domain is cheap. Running it as a real website is not.

Each country domain is, in practice, a separate site. It needs its own content, technical upkeep, Search Console property and monitoring. When the company changes a fare rule, updates luggage policy or redesigns checkout, the change has to land correctly everywhere. The common failure mode is predictable: one or two sites get the attention, and the rest slowly turn into outdated copies.

The SEO cost is less visible. Each domain has to earn its own reputation. A link from a travel blog to the German site does nothing directly for the French one. 

> ### Splitting a brand across many domains splits the authority it has earned, while a single domain lets every link and mention strengthen the whole site.

There is also a duplication problem. If several domains show essentially the same content in the same language, search engines have to choose one, and it may not be the one the business wanted. Google's advice in that situation is to pick a preferred version, which raises the obvious question of why the others need to exist.

Finally, many companies buy country domains defensively, so nobody else can use them, and simply redirect them to the main site. That is a legitimate brand-protection measure, but it is not an SEO strategy. A domain that only redirects sends no country signal of its own.

## The recommendation: one international site, many languages

The question I kept coming back to was simple: does the product change depending on the customer's country?

For a transport company, it mostly does not. A seat on a domestic route is the same seat whether the buyer lives in Madrid, Chicago or Seoul. The schedule, the terminal and the fare are the same. What changes is the language the customer reads, and possibly the currency they want to see and the cards they pay with.

When the offer is identical and only the language differs, country targeting solves the wrong problem. Language targeting solves the right one. So I proposed splitting the audience in two: the home market, served by the existing main site, and everyone else, served by one international version with a language selector, a separate URL for each language and hreflang connecting them.

The arguments that carried the decision were operational as much as technical:

- **One codebase and one content workflow.** A schedule change or new policy is published once, not many times.
- **One domain building authority.** Links and mentions from every market strengthen the same site.
- **New languages become a content task.** Adding one no longer means launching and maintaining another website.

Two implementation details deserve care. First, visitors should not be pushed into a language based on their IP address. *Google advises against automatic locale redirects, partly because they stop users and crawlers from seeing every version*, and Googlebot mostly crawls from the United States. A visible language selector with a sensible default works better. Second, consolidating domains is a migration. Any country domain that has been indexed or has earned links should be redirected page by page, with permanent (301) redirects to the closest equivalent page in the right language, rather than all pointing at the home page.

## Automatic translation: useful, with limits

The plan relies on translating pages automatically, which deserves an honest look. For years, machine-translated pages were treated as a search risk.

Google's position has shifted. Its scaled content abuse policy, introduced in March 2024, targets large numbers of pages produced mainly to manipulate rankings rather than help users, however they are made. Automated translation is named as one way such content can be produced, but the test is the value to the reader, not the method. Google has also removed older guidance that told site owners to block automatically translated pages from search. Translation that helps someone complete a real task is acceptable. Translation used to spin out thousands of thin pages is not.

For a ticketing site, that line maps neatly onto the content. Most pages are functional: route listings, schedules, search forms and checkout steps. Good machine translation handles these well, and a traveler reading them in their own language is clearly better served. A smaller set of text carries legal or financial weight: fare and refund conditions, terms of carriage, payment error messages, anything a customer might rely on in a dispute. That text deserves review by a native speaker, once per language and again whenever the source changes.

There is also an important technical requirement. For Google to find your website in different languages, each translation should have its own URL. For example, an English page could be available at `example.com/en/services`, while its Spanish translation would be at `example.com/es/servicios`.

Some websites use translation widgets that change the text directly in the visitor's browser without creating separate pages. While this allows someone to read the content in their preferred language, Google may only discover and index the original version. As a result, the Spanish translation might not appear when someone searches in Spanish.

To make each language discoverable, the website should provide a separate, accessible page for every translation, with its own translated title and meta description. It should also use hreflang tags, which tell Google which language and regional audience each version is intended for. For example, these tags help Google understand that the English and Spanish pages contain equivalent content and show the appropriate version to users searching in each language.

## When a domain per country is worth it, and when it is not

Country domains are not a mistake in themselves. They make sense when the business in each country is genuinely different. The question to ask is whether the country changes the offer, or only the language.


| If this is true | It points toward |
| -------------------------------------------------------------------------------- | ----------------------------------------- |
| Prices, products or availability differ by country | Country domains or country subdirectories |
| Each country has its own legal entity, regulation or tax rules shown on the site | Country domains |
| Local teams produce and maintain distinct content for their market | Country domains |
| The product is the same everywhere and only the language changes | One site, language subdirectories |
| Customers come from many countries to buy in a single market | One site, language subdirectories |
| Nobody is available to maintain separate sites | One site, language subdirectories |
| The goal is to add new languages quickly | One site, language subdirectories |


Two rules of thumb cover most cases. If you would not staff a country site with people producing real local content, you probably should not build one. And if language is the actual difference, target languages, not countries. Many businesses land in between: one generic domain organized by language, with country-specific sections only for the few markets where the offer really differs.

## What I took from it

The most valuable part of the conversation was not about SEO itself, but about reconsidering the original problem.

The company had purchased multiple country-specific domains to appear more local in different markets. But was this really what international customers needed?

A customer from another country is primarily concerned with understanding the information, finding the right service and paying without difficulties. Providing the website in their language, explaining the service clearly and supporting familiar payment methods can make a much bigger difference than having a local domain.

This discussion also highlighted something I have encountered in other technical projects: **complexity often grows through a series of decisions that seem reasonable individually.** Each new domain had a purpose when it was purchased. But managing them together introduced additional maintenance work without a clear understanding of the benefits.

Sometimes, the most valuable technical contribution is identifying what can be simplified. Making that case requires understanding not only the technology, but also the costs, operational implications and customer experience.

We have agreed on a direction, but the implementation will be the real test. The next steps include deciding which languages to prioritize, ensuring important legal and commercial information is translated accurately, redirecting existing pages correctly, and measuring whether the changes improve international visibility and bookings.

As the project develops, I hope to share more about the implementation, the challenges we encounter and, eventually, what the data tells us about the results.

## Sources

- [Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), Google Search Central
- [Tell Google about localized versions of your page (hreflang)](https://developers.google.com/search/docs/specialty/international/localized-versions), Google Search Central
- [The International Targeting report is deprecated](https://support.google.com/webmasters/answer/12474899?hl=en), Google Search Console Help
- [Google March 2024 spam updates: scaled content abuse](https://www.seroundtable.com/google-march-2024-spam-updates-37002.html), Search Engine Roundtable
- [Google removes robots.txt guidance for blocking auto-translated pages](https://www.searchenginejournal.com/google-removes-robots-txt-guidance-for-blocking-auto-translated-pages/548870), Search Engine Journal

