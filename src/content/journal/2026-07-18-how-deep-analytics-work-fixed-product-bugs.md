---
title: How Deep Analytics Work Fixed Product Bugs
description: While working on improving conversion rates for an eCommerce online
  funnel, I found out a real analytics implementation bug.
pubDate: 2026-07-18
tags:
  - product
  - google analytics 4
  - amplitude
  - web conversion
  - conversion rate optimization
draft: false
---
This week I worked intensively on a large eCommerce client account with relatively high volumes and transactions. I noticed where the biggest drop offs where but I still could not get to the root cause. 

Analyzing user behavior is extremely difficult. You can take multiple angles and at most you can make assumptions on why they behaved the way they did on your website. 

Some of them load products, browse at them and just leave without clicking. Others click several times at a specific product category but never end up buying. Others have a perfect purchasing funnel linear conversion behavior: search, click on the product, view the price, enter their details and voilà, get the product!

We all wish consumer behavior was easy to understand, but it's not. And I also think that's what makes analytics fascinating. 

## How To Improve Your Web Analytics

As an analyst, I look at many different website events. What are users typing on the search bar? Which products are they clicking on? How much time do they spend on the each stage of the funnel before buying? What kind of devices do they have and use? Why some browsers perform better than others?

I had a hypothesis question: users that look at a cheaper products are **more likely to convert** than those who looked at **more expensive products.** I wanted to make a price-purchase relationship analysis. What's the average price of the products and product category they view vs. their end purchase decision? 

If you think about Amazon, Netflix and other large tech companies, they often implement highly advanced recommendation algorithms to increase average customer lifetime value and reduce churn. 

When trying to link clicked products to their end purchase I realized that less that **not all products viewed** were tracked on the user journey to purchase. 

I was very surprised. I asked myself: "Can users buy something without actually clicking on the product?" "Why in some cases I see the event of viewing a product while in other cases it's not showing up at all?" 

That analysis surfaced a larger issue: the user behavior was real, but the analytics journey was incomplete.

The customers were clearly reaching the checkout and completing a purchase. They could not have done that without selecting a product. However, the product selection event was missing from a significant number of purchasing journeys.

This created what looked like an impossible funnel:

`search → checkout → purchase`

The product selection was happening on the website, but it was not always reaching the analytics platform.

At first, I thought that perhaps there was another way of selecting a product that I did not know about. Maybe some users could continue directly from the search results. Maybe the website had different layouts depending on the device, product category or browser.

This is why it is important not to rely only on aggregate funnel charts.

A funnel might tell you that 1,000 people searched, 500 clicked and 100 purchased. But it does not always tell you what actually happened to a particular person. To understand that, I jumped right into individual user journeys, sorted them by event timestamp and then compared the events fired with the logic of the website. 

I looked at customers who had completed a transaction and reconstructed their sessions event by event.

Some journeys looked perfectly normal:

`search → select product → checkout → payment → purchase`

But others looked like this:

`search → checkout → payment → purchase`

It was puzzling to be honest. I saw the transaction and the purchase, I could easily reconcile it with financial data but I didn't know how they even reached the checkout without clicking on a specific product. 

At the beginning I thought I missed something but then I asked to the owners of the funnel and they confirmed that there's no way for new users to reach checkout directly, as URLs go stale and redirect to the homepage when a specific product attribute like price is updated. 

## The Race Condition

The investigation eventually revealed a race condition.

> A race condition happens when multiple processes run almost at the same time, and the result depends on which one finishes first.

When a customer selects a product on a modern eCommerce website, the website may need to do several things at once:

- It may load updated product information, such as the latest price, especially when dynamic pricing is used.
- It may request inventory information to confirm that the product is still available. You often see this when selecting a different size of a sweater and the website suddenly tells you that it is sold out (this also happens on Amazon)
- It may identify the exact supplier, carrier or seller responsible for the product.
- It may update the URL with new query parameters.
- It may send an analytics event confirming that the customer selected the product.

At the same time, the website must respect the latest customer’s cookie preferences.

This is where the bug happened.

The customers had already accepted analytics cookies, and their consent had not changed. However, when the website started loading the information connected to the selected product, part of the website configuration became temporarily unavailable.

For a few milliseconds, the internal consent value became `denied`. But the user never changed its cookies' preferences so instead the website should've used the latest consent decision instead. 

Instead, the website interpreted it as:

> Analytics consent is not granted.

The product selection event was trying to fire at exactly the same time.

If the event was sent before the consent value became undefined, it was tracked correctly. If it was sent during that short loading period, the website blocked it and the event never reached the analytics platform.

A few milliseconds later, the new settings finished loading and the consent value returned to normal. However, the original product click had already happened, so the website did not try to send the event again.

This is why the issue did not affect every customer.

The result depended on timing: internet speed, browser performance, caching and the order in which the different processes finished.

Two users could perform exactly the same action, but only one of their clicks would appear in the analytics data.

## What I Learned

Never assume that all analytics events are perfectly implemented until you have tested them yourself.

I now test every single event in the funnel before accepting what the data tells me. If I see that something is not firing exactly as expected, I write it down and try to understand how it could affect the analysis.

![Google Search Screen](/images/journal/googlescreen.webp)

Even a small tracking issue can completely change the way you understand performance.

For example, imagine that one of your main KPIs is **unique page views**, but every time the same user refreshes the page, the system counts it as another unique view. The number may look impressive, but it would not represent what you are actually trying to measure.

There is not always one correct way to measure something. That is part of the beauty and the challenge of analytics. It depends on the question you are trying to answer.

A page refresh may be relevant if you want to measure total page loads. It is not relevant if you want to know how many different users visited the page.

The problem begins when your numbers change because of user behaviors that you did not expect, define or take into consideration. At that point, the data may still look clean, but the picture it gives you can be completely wrong.

One of my biggest lessons from this analysis was that analytics data should never be treated as a perfect representation of reality.

It is a representation of what the tracking system was able to record.

And those are not always the same thing.

