---
title: Separate Website Analytics in GA4 If Websites Are Not Sharing User Experience
description: A practical guide to deciding when websites should share a GA4
  property, when they should remain separate, and how to safely repair
  contaminated analytics tracking.
pubDate: 2026-07-22
tags:
  - GA4
  - Google Tag Manager
  - data quality
  - debugging
  - analytics
draft: true
---
## The two-pet-shop example

Imagine that a company operates two independent online pet shops:

- **Happy Paws**, which sells products for cats.
- **Adventure Tails**, which sells products for dogs.

Each shop has its own website, brand, customers, marketing campaigns and commercial reporting.

Their intended analytics setup is:

```
happypaws.com
→ Happy Paws GTM container
→ Happy Paws GA4 property
```

```
adventuretails.com
→ Adventure Tails GTM container
→ Adventure Tails GA4 property
```

That structure is easy to understand. Every shop sends its data to its own property.

But imagine that someone adds the Adventure Tails GA4 tag inside the Happy Paws Google Tag Manager container.

The live setup becomes:

```
happypaws.com
→ Happy Paws GTM container
→ Happy Paws GA4
→ Adventure Tails GA4
```

Now every visit to Happy Paws may also appear in Adventure Tails.

If the additional tag fires on all pages, Adventure Tails receives Happy Paws page views and automatic events.

If an additional purchase tag also exists, Adventure Tails may receive:

- Happy Paws transaction IDs
- Revenue
- Currency
- Product names
- Product quantities
- Purchase events

Both analytics properties may still appear to be working. That makes this issue particularly dangerous. The correct property continues receiving data, while the second property silently receives a duplicate copy.

This is the type of issue I fixed today. This field note explains how I found the issue, how I fixed it without damaging the correct tracking, and when multiple websites should or should not share the same GA4 property. All the examples here are just intended for educational purposes and 

## When should two websites share a GA4 property?

The decision should be based on the customer journey and the logical user base, not simply on whether the websites have similar names or belong to the same company.

Google recommends thinking of a GA4 property as the data belonging to one logical user base. When data should be analyzed together, it can belong in one property. When it does not represent the same logical user base, **Google recommends separate properties or subproperties** (this is super important, to avoid legacy problems later on when separating and filtering data!)

### Use the same GA4 property when the websites form one journey

Suppose Happy Paws uses:

```

```

```
www.happypaws.com
```

for product discovery and:

```

```

```
checkout.happypaws.com
```

for payment.

These are not two separate businesses. They are two steps in the same customer journey.

A visitor should be measurable from landing page to purchase:

```

```

```
Homepage
→ Product page
→ Basket
→ Checkout
→ Purchase
```

In this situation, using one GA4 property and one web data stream is normally appropriate.

If the journey crosses different root domains, such as:

```

```

```
happypaws.com
→ happypaws-checkout.com
```

cross-domain measurement may be required. GA4 cross-domain measurement passes identifiers between domains so that one visitor is not incorrectly counted as two users and two sessions. 

### Use separate GA4 properties when the websites are separate businesses or experiences

Now suppose Happy Paws and Adventure Tails:

-   
Have different brands  

-   
Sell different products  

-   
Run separate advertising  

-   
Have separate commercial teams  

-   
Do not form one continuous user journey  

-   
Need independent reporting  


In that case, separate GA4 properties are cleaner.

The sites may be owned by the same parent company, but they do not represent the same logical user base or reporting objective.

A discussion in the Google Analytics community reached the same practical conclusion: disconnected websites with no need for combined reporting are generally easier to manage in separate GA4 properties, while sites forming one connected experience can be measured together. This community advice is consistent with Google’s official account-structure guidance. 

## A subdomain does not automatically decide the answer

The technical hostname alone should not determine the analytics structure.

These two domains may represent one journey:

```

```

```
shop.example.com
checkout.example.com
```

But these may represent separate regional businesses:

```

```

```
uk.example.com
fr.example.com
```

The correct decision depends on how the business operates and how the data will be used.

The questions I would ask are:

-   
Are users expected to move between the sites?  

-   
Is it one funnel?  

-   
Are the sites serving the same logical customer base?  

-   
Should revenue and conversion rates be reported together?  

-   
Should the same audiences be shared with advertising platforms?  

-   
Would combining the data make decisions clearer or more confusing?  


The URL structure is only one part of the answer.

## Cross-network is not the same as cross-domain

One of the sources I reviewed discussed the **Cross-network** channel in GA4.

This is a different topic.

Cross-network is a marketing channel classification related to traffic and campaigns that span multiple Google advertising networks and touchpoints. It can help analysts understand complex marketing journeys, but it does not determine whether two websites should share the same GA4 property or measurement ID. 

The terminology can be confusing:

- **Cross-domain measurement** connects one user journey across different domains.  

- **Cross-network traffic** is a marketing acquisition and attribution category.  

- **Cross-property contamination** occurs when one website sends data to a property where it does not belong.  


They solve or describe very different problems.

## How the contamination developed

The issue I investigated did not appear through one obvious, catastrophic change.

It developed gradually across several published GTM versions.

Using the pet-shop example, the sequence looked like this.

### Version A: the clean implementation

Only the correct Happy Paws GA4 tag existed.

```

```

```
happypaws.com
→ Happy Paws GA4
```

Page views and purchases were sent to the intended property.

### Version B: purchases were sent to the second property

A new GA4 purchase event tag was introduced.

It fired on the Happy Paws booking confirmation page but used the Adventure Tails measurement ID.

The flow became:

```

```

```
Happy Paws purchase
→ Happy Paws GA4
→ Adventure Tails GA4
```

At this point, general website traffic was still separate, but purchase data had begun contaminating the second property.

### Version C: an all-page tag was introduced

A second Google tag was then added to the Happy Paws GTM container.

It was configured to fire during initialization on every page and pointed to the Adventure Tails GA4 property.

The measurement ID initially contained a typing error, which may have stopped it from operating correctly.

### Version D: the typing error was corrected

The incorrect character was removed from the measurement ID.

From this version onward, the Adventure Tails Google tag loaded successfully across the Happy Paws website.

The second property could now receive:

-   
Page views  

-   
Session information  

-   
Automatic GA4 events  

-   
Purchase events  

-   
Transaction IDs  

-   
Revenue  

-   
Currency  

-   
Purchased items  


This version history was essential. It showed exactly when the problem started and separated the original implementation from the later changes.

## How I diagnosed it

I did not begin by changing tags.

I began by collecting evidence.

### 1. I inspected browser network requests

I exported a HAR file and examined the requests made when the website loaded.

The important requests were the GA4 collection calls containing:

```

```

```
tid=G-XXXXXXXXXX
```

The `tid` parameter identifies the GA4 measurement destination.

I found that a single website load was generating collection requests for two different measurement IDs.

That proved the browser itself was sending data to both properties. It was not simply a reporting filter, hostname issue or visual problem inside GA4.

### 2. I identified the GTM container

I inspected the request to:

```

```

```
googletagmanager.com/gtm.js
```

This revealed the Google Tag Manager container installed on the site.

The browser initiator chain showed that this container was loading both GA4 tags.

### 3. I used Tag Assistant

Tag Assistant confirmed that the website loaded:

-   
Its intended GA4 Google tag  

-   
A second Google tag belonging to the other property  

-   
A separate purchase event tag targeting that other property  


This provided a visual record of which tags fired and when.

### 4. I exported the GTM workspace

The GTM container export showed the exact configuration of every tag, trigger and variable.

It confirmed that there were two paths sending data to the wrong property:

```

```

```
All-page Google tag
→ Wrong GA4 measurement ID
```

```

```

```
Purchase event tag
→ Wrong GA4 measurement ID
```

Finding only the all-page tag would not have been enough. Pausing it alone would have stopped page views, but purchase data would have continued flowing through the separate event tag.

### 5. I compared the published versions

I exported the previous published GTM versions and compared them chronologically.

This allowed me to identify:

-   
The final clean version  

-   
The version that introduced purchase contamination  

-   
The version that added the all-page Google tag  

-   
The version that corrected the malformed measurement ID  

-   
The version that added ecommerce parameters  


This was one of the most useful parts of the investigation.

Without version comparison, I would have known what was wrong today but not how the implementation reached that state.

Google Tag Manager versions preserve snapshots of the container and its publication history. Workspaces also allow related changes to be developed and tested separately. Google recommends keeping workspace changes small and using clear names and descriptions when publishing. 

## The risks of sending one website into another property

Cross-property contamination can damage far more than a page-view report.

### Users and sessions become unreliable

The second property may report visitors who never interacted with that business.

User counts, new-user counts, session counts and engagement metrics can all become inflated.

### Conversion rate becomes misleading

Conversion rate normally compares conversions with eligible traffic.

If traffic and purchases from another website enter the property, both sides of that calculation may become distorted.

A business may believe its website is performing better or worse than it really is.

### Revenue becomes contaminated

If purchase events are duplicated, the second property may show revenue that does not belong to it.

This affects:

-   
Total revenue  

-   
Average order value  

-   
Ecommerce conversion rate  

-   
Product performance  

-   
Revenue by channel  

-   
Revenue by country  

-   
Campaign return  


### Attribution becomes difficult to trust

The wrong property may begin attributing another website’s purchases to its own channels, campaigns and referrals.

This can lead teams to invest more money in campaigns that did not actually generate those purchases.

The Adaptive article correctly highlights that integrated, multi-touchpoint analysis creates attribution complexity. That complexity becomes significantly worse when the underlying properties contain data from unrelated websites. 

### Advertising audiences can become mixed

When GA4 is connected to advertising platforms, audiences and key events may be shared with those platforms.

If one property contains another brand’s customers, remarketing audiences and imported conversions may no longer represent the intended business.

### Sensitive commercial data may cross boundaries

Purchase events can contain transaction IDs, product details, prices and revenue.

Even within the same parent company, teams may not expect one brand’s commercial data to appear in another brand’s property.

### Historical reports do not automatically repair themselves

Stopping the incorrect tag prevents future contamination. It does not rewrite the historical reports.

Google explains that GA4 data filters act from the moment they are created and do not affect historical data. Data-deletion tools also have important limitations: deleting parameter text does not necessarily remove the event from aggregate metrics. 

This makes prevention and early detection especially important.

## The two possible fixes

I considered two solutions.

### Solution 1: roll back to the last clean version

The safest historical option would have been to restore the last GTM version before the incorrect tags were introduced.

The benefit is simplicity. The clean configuration was already known.

The downside is that later versions also contained useful improvements to the legitimate purchase tracking. A complete rollback would remove those changes too.

### Solution 2: preserve the latest version and pause only the incorrect tags

This was the approach I selected.

I created a dedicated GTM workspace and paused:

-   
The all-page Google tag pointing to the wrong property  

-   
The purchase event tag pointing to the wrong property  


I left the correct page-view and purchase tags untouched.

This preserved the valid ecommerce improvements while removing both routes into the unrelated GA4 property.

Pausing was preferable to deleting because it preserved the original configuration for the audit trail.

## The controlled publication process

The actual change was small.

The process around it mattered just as much.

### Written approval

Before publishing, I documented:

-   
The two properties  

-   
The two measurement IDs  

-   
The affected tags  

-   
The GTM version history  

-   
The proposed correction  

-   
What would remain active  

-   
How the change would be tested  


I requested written approval before modifying production.

### Dedicated workspace

I created a workspace for this specific correction.

Only two changes appeared in it.

That reduced the risk of accidentally publishing unrelated work and created a clear version history.

### Preview testing

Before publishing, I used GTM Preview to confirm that:

-   
The correct GA4 Google tag still fired  

-   
The two incorrect tags were paused  

-   
Page views continued going to the intended property  

-   
No new collection request was sent to the unrelated measurement ID  


### Documented publication

I published a new GTM version with a descriptive name and a complete explanation of:

-   
What was paused  

-   
Which measurement ID was being removed  

-   
Which measurement ID remained active  

-   
What testing had been completed  


Google recommends reviewing workspace changes and entering a meaningful version name and description before publishing. 

## A second issue I found but did not mix into the fix

During the audit, I noticed that one purchase event was named:

```

```

```
Purchase
```

instead of:

```

```

```
purchase
```

GA4 event names are case-sensitive, so those are two different events. Google’s recommended ecommerce event is the lowercase `purchase` event, and GA4 uses its parameters to calculate ecommerce revenue metrics. 

This could affect whether revenue appears correctly in standard ecommerce reporting.

However, I deliberately did not change it during the contamination fix.

Combining unrelated corrections would have:

-   
Expanded the scope  

-   
Increased the testing requirements  

-   
Made the audit trail less clear  

-   
Added unnecessary production risk  


A disciplined analytics fix should solve the approved problem first. Other findings should be documented and handled separately.

## My recommendation for different website structures

### One brand with a separate checkout domain

Example:

```

```

```
happypaws.com
→ secure-happypaws-payments.com
```

Recommended approach:

-   
One GA4 property  

-   
One web data stream  

-   
Cross-domain measurement  

-   
Consistent event names and ecommerce schema  


The two domains are part of one continuous customer journey. 

### One brand using several connected subdomains

Example:

```

```

```
www.happypaws.com
shop.happypaws.com
account.happypaws.com
```

Recommended approach:

-   
Usually one GA4 property and one web stream  

-   
Confirm cookie and referral behaviour  

-   
Test users and sessions across the complete journey  


### Two independent brands

Example:

```

```

```
happypaws.com
adventuretails.com
```

Recommended approach:

-   
Separate GA4 properties  

-   
Prefer separate GTM containers  

-   
Keep measurement IDs isolated  

-   
Share data later through dashboards, BigQuery or another reporting layer when consolidated reporting is needed  


### Regional websites belonging to one brand

Example:

```

```

```
happypaws.co.uk
happypaws.fr
happypaws.es
```

The answer depends on the business.

One property may work when:

-   
The customer base is logically shared  

-   
The sites follow the same data model  

-   
The business wants unified reporting  

-   
Users can move between regions  

-   
Central teams control marketing and analytics  


Separate properties may be better when:

-   
Regional teams operate independently  

-   
Legal or data-access requirements differ  

-   
Reporting must remain isolated  

-   
Each website has different funnels and commercial objectives  


### A shared checkout serving several brands

This requires careful routing.

The checkout should send each journey to the correct property based on the originating brand. It should not send every purchase to every GA4 property.

Possible controls include:

-   
A hostname or brand lookup variable  

-   
Brand-specific measurement IDs  

-   
Clearly scoped triggers  

-   
Separate containers  

-   
A shared data layer with an explicit brand identifier  

-   
Automated testing for every brand and destination  


## A practical prevention checklist

Before publishing GA4 changes across multiple websites, I now recommend checking the following.

### Architecture

-   
Does every website have a clearly documented GA4 destination?  

-   
Is each measurement ID assigned to the correct brand?  

-   
Are connected domains part of one real customer journey?  

-   
Are separate brands being kept separate?  


### GTM configuration

-   
Search the entire container for every measurement ID.  

-   
Check Google tags, GA4 event tags, custom HTML and variables.  

-   
Verify triggers by hostname and page type.  

-   
Look for measurement ID overrides inside event tags.  

-   
Confirm that purchase tags use the correct destination.  


### Testing

-   
Use Tag Assistant.  

-   
Inspect browser Network requests.  

-   
Confirm the `tid` parameter in GA4 collection calls.  

-   
Test the homepage, funnel and confirmation page.  

-   
Verify that every event goes to the intended property.  

-   
Confirm that no event is duplicated into another property.  


### Governance

-   
Use one workspace per change.  

-   
Keep the number of changes small.  

-   
Export the current version before editing.  

-   
Use descriptive version names.  

-   
Record what was changed and why.  

-   
Request approval for production changes.  

-   
Keep screenshots and exports as evidence.  


## The outcome

The final correction achieved four things:

1.   
The first website continued sending data to its correct GA4 property.  

2.   
Page views and purchases stopped being duplicated into the second property.  

3.   
Useful ecommerce improvements from the latest version were preserved.  

4.   
The complete investigation and correction were documented in GTM and in writing.  


The technical change consisted of pausing two tags.

Finding the right two tags required understanding the browser requests, GTM initiator chain, Tag Assistant output, container exports, purchase configuration and version history.

That is the difference between changing tracking code and performing a controlled analytics investigation.

## Final lesson

Using the same GA4 property across several domains can be correct when those domains form one connected customer journey.

Using one website’s GA4 tag on an unrelated website is different. It combines data that the business expects to remain separate.

The safest principle is simple:

> Measure one logical customer journey together. Keep unrelated businesses and reporting objectives separate.

And whenever a GA4 property contains data that does not make sense, inspect what the browser is actually sending before trying to repair the reports.