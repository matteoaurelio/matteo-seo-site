---
title: Separate Website Analytics in GA4 If Websites Are Not Sharing User Experience
description: A practical GA4 and Google Tag Manager tutorial using a fictional
  two-pet-shop example to explain property structure, cross-property
  contamination, diagnosis, risks, and safe fixes
pubDate: 2026-07-22
tags:
  - GA4
  - Google Tag Manager
  - data quality
  - debugging
  - analytics
draft: true
---
> ### Educational note
>
> This tutorial uses a fictional scenario for educational purposes. All company names, websites, identifiers, timelines, tag names, and implementation details are invented. The example does not describe the complete analytics setup of any real organisation.

When setting up Google Analytics 4, multiple websites should share a property only when they belong to the same customer journey or reporting environment. Independent brands and funnels are usually clearer and safer when they use separate GA4 properties.

This tutorial explains how cross-property contamination happens, how to detect it with Google Tag Manager and browser tools, and how to fix it without breaking valid tracking.

## The fictional pet-shop example

Imagine that one company operates two independent online pet shops.

**Happy Paws** sells products for cats, while **Adventure Tails** sells products for dogs. Each shop has its own website, brand, campaigns, customers, revenue targets, and reporting.

The intended setup is simple:

```
happypaws.example
→ Happy Paws GTM container
→ Happy Paws GA4 property
```

```
adventuretails.example
→ Adventure Tails GTM container
→ Adventure Tails GA4 property
```

Now imagine that the Adventure Tails GA4 tag is also added to the Happy Paws GTM container:

```
happypaws.example
→ Happy Paws GTM container
→ Happy Paws GA4 property
→ Adventure Tails GA4 property
```

Happy Paws may continue tracking correctly, but Adventure Tails will also begin receiving data from the wrong website.

If the extra Google tag fires on every page, the second property may receive page views, users, sessions, and automatic GA4 events. If a separate purchase tag also points there, it may receive Happy Paws transaction IDs, revenue, currency, product details, and purchase events.

That is why this problem can remain hidden. One property works as expected while another quietly receives an unwanted copy.

## When should websites share one GA4 property?

The decision should follow the customer journey and reporting purpose, not just the domain structure or company ownership.

A practical rule is:

> Use one GA4 property for one connected customer journey. Keep independent businesses and reporting objectives separate.

Suppose Happy Paws uses `www.happypaws.example` for product discovery and `checkout.happypaws.example` for payment. These are two parts of the same funnel:

```
Landing page
→ Product page
→ Basket
→ Checkout
→ Purchase
```

Using one GA4 property is normally appropriate because the business needs to measure the complete journey.

The same principle may apply when checkout uses a different root domain, such as:

```
happypaws.example
→ secure-happypaws-payments.example
```

In that case, cross-domain measurement may be required so that GA4 does not split one customer into different users or sessions.

Happy Paws and Adventure Tails, however, should normally use separate properties if they operate as different brands, run different campaigns, have separate commercial goals, and do not form one continuous funnel. The fact that two businesses share an owner does not automatically mean their traffic, revenue, audiences, and conversions should be combined.

## A subdomain does not decide the structure

Subdomains do not automatically belong together, and separate domains do not automatically need separate properties.

These may form one journey:

```
shop.example.com
checkout.example.com
account.example.com
```

These may represent separate regional businesses:

```
uk.example.com
fr.example.com
es.example.com
```

The real questions are whether users move between the sites, whether the sites form one funnel, whether revenue should be analysed together, and whether the same teams own the data.

## Cross-domain, cross-network, and cross-property are different

These terms sound similar but describe different things.

**Cross-domain measurement** preserves one user journey across different domains.

**Cross-network** is a GA4 acquisition channel. It is commonly associated with Google Ads campaigns, such as Performance Max, that can serve across several Google networks. It describes where traffic came from and how GA4 classifies that visit. It does not determine which measurement ID receives the event or whether two websites should share a property.

**Cross-property contamination** happens when one website sends data to a property where it does not belong.

```
Happy Paws website
→ Happy Paws GA4
→ Adventure Tails GA4
```

Cross-domain measurement connects a legitimate journey. Cross-property contamination mixes unrelated reporting environments.

## How contamination can develop

The problem may appear gradually.

### Stage 1: clean implementation

Happy Paws sends page views and purchases only to its own property.

```
Happy Paws website
→ Happy Paws GA4
```

### Stage 2: purchases are duplicated

A new GA4 purchase tag is added, but it uses the Adventure Tails measurement ID.

```
Happy Paws purchase
→ Happy Paws GA4
→ Adventure Tails GA4
```

General website traffic remains separate, but transactions begin appearing in the wrong property.

### Stage 3: an all-page tag is added

A second Google tag is added to the Happy Paws container and configured to fire on every page. Adventure Tails may now receive page views, sessions, and automatic events as well as purchases.

### Stage 4: ecommerce details are added

The purchase implementation is expanded with revenue, currency, transaction ID, and item information. The second property now receives a detailed copy of the first shop’s commercial activity.

This is why GTM version history matters. The current container shows what is happening now. Earlier versions show when each part of the problem appeared.

## How to diagnose the issue

Do not begin by deleting tags. Start by collecting evidence.

### 1. Inspect browser network requests

Open Chrome Developer Tools, select **Network**, reload the page, and search for `collect`.

GA4 requests normally contain a parameter such as:

```
tid=G-XXXXXXXXXX
```

The `tid` parameter identifies the destination measurement ID.

If one page load sends requests to both:

```
G-HAPPYPAWS1
G-ADVENTURETAILS1
```

the browser is actively sending data to two properties. The problem is happening before the data reaches GA4 reporting.

### 2. Identify the GTM container

Search the Network panel for:

```
gtm.js
```

You should find a request similar to:

```
https://www.googletagmanager.com/gtm.js?id=GTM-EXAMPLE1
```

The value after `id=` is the GTM container loaded by the website.

### 3. Use Tag Assistant

GTM Preview and Tag Assistant can show which containers loaded, which Google tags fired, which event tags activated, and which measurement IDs received the hits.

Pay particular attention to initialization, page-load events, custom funnel events, and the purchase confirmation step.

### 4. Search for every reference to the unwanted measurement ID

Do not inspect only the obvious all-page tag. The same measurement ID may also appear in purchase tags, measurement ID overrides, variables, lookup tables, custom HTML, or custom JavaScript.

For example, contamination may have two separate routes:

```
All-page Google tag
→ Adventure Tails GA4
```

```
Purchase event tag
→ Adventure Tails GA4
```

Pausing only the first route would stop page views but allow purchases to continue.

### 5. Export and compare GTM versions

Export the current container before changing anything. Then compare the latest published versions with the last known clean version.

Look for new tags, changed measurement IDs, new ecommerce parameters, trigger changes, and measurement ID overrides. This helps determine when the issue began and whether a full rollback would remove useful improvements.

## The main risks

Cross-property contamination affects more than page views.

Users and sessions become unreliable because one property may report visitors who only used the other website. Conversion rate becomes misleading because traffic and transactions no longer belong to one consistent funnel.

Revenue can also be overstated. Duplicate purchase events may distort total revenue, average order value, product performance, revenue by channel, and campaign return.

Attribution becomes difficult to trust because the wrong property may assign another website’s purchases to its own organic, paid, referral, email, or social traffic.

If GA4 is linked to advertising platforms, audiences and imported conversions may also become mixed. A remarketing audience for Adventure Tails could accidentally contain Happy Paws visitors.

Stopping the tags prevents future contamination, but it does not automatically repair historical reports. The correction date and time should therefore be documented clearly.

## Two ways to fix it

### Solution 1: restore the last clean version

This is the simplest option when the last clean version is known and later versions contain no useful changes.

The risk is that a rollback may also remove valid improvements, such as new ecommerce parameters, variables, or unrelated fixes.

### Solution 2: keep the latest version and pause only the incorrect tags

This is usually safer when the current version contains useful tracking improvements.

In the pet-shop example, pause:

```
Adventure Tails – All Pages
```

and:

```
Happy Paws Purchase → Adventure Tails GA4
```

Keep active:

```
Happy Paws – All Pages
```

and:

```
Happy Paws Purchase → Happy Paws GA4
```

Pausing is often better than deleting because the original configuration remains visible in the audit trail and can be restored if necessary.

The main risk is missing another tag that still uses the unwanted measurement ID. That is why the entire container must be searched first.

## How to publish the fix safely

Create a dedicated GTM workspace and keep the change separate from unrelated tracking work.

Pause the incorrect all-page tag and the incorrect purchase tag, but leave the valid Happy Paws tags unchanged.

Test the draft in GTM Preview. Confirm that the correct Google tag still fires, that purchases still reach the intended property, and that no requests go to the Adventure Tails measurement ID.

In the Network panel, the expected result is:

```
G-HAPPYPAWS1
→ requests present
```

```
G-ADVENTURETAILS1
→ no requests from Happy Paws
```

For purchase testing, confirm:

```
en=purchase
tid=G-HAPPYPAWS1
```

Publish a clearly named GTM version and document which tags were paused, which measurement ID was removed, which one remains active, and what testing was completed.

## Recommendations by website structure

A brand with a separate checkout domain will usually benefit from one GA4 property and cross-domain measurement.

A brand using connected subdomains will also usually use one property, provided cookie behavior, referrals, and session continuity are tested.

Two independent brands should normally use separate GA4 properties, separate measurement IDs, and preferably separate GTM containers. Consolidated reporting can be created later in Looker Studio, BigQuery, a data warehouse, or another business intelligence tool.

Regional websites require a business decision. One property may work when tracking and reporting are centrally managed. Separate properties may be better when regional teams, funnels, access requirements, or commercial goals differ.

A shared checkout serving several brands needs explicit routing. The purchase should be sent only to the correct property based on a brand value, hostname, lookup variable, or another reliable identifier.

## Prevention checklist

Before publishing analytics changes across several websites:

- Document the intended GA4 destination for each website.
- Search the entire GTM container for every measurement ID.
- Review Google tags, purchase tags, event tags, overrides, and variables.
- Test the homepage, funnel, checkout, and purchase.
- Confirm the `tid` value in Network requests.
- Use one workspace per change.
- Export the current container first.
- Publish with a clear version name and description.
- Record the approval and publication time.

## Final lesson

Using one GA4 property across several domains can be correct when those domains form one connected customer journey.

Sending an independent website’s data into another brand’s property is different. It mixes users, sessions, revenue, attribution, and audiences that should remain separate.

> Measure one logical customer journey together. Keep unrelated businesses and reporting objectives separate.

When GA4 reports contain data that does not make sense, inspect what the browser is actually sending before trying to repair the reports.