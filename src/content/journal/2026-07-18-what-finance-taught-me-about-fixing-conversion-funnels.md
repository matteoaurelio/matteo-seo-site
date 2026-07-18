---
title: What Finance Taught Me About Fixing Conversion Funnels
description: Not all the data is equally important. Not all the website changes
  are crucial to lift conversion rates and, most importantly, correlation is not
  causation.
pubDate: 2026-07-18
tags:
  - conversion rate optimization
  - amplitude
  - big query
  - google cloud
  - hotjar
  - google analytics 4
draft: false
---
I originally specialized in finance and accounting while doing my Master's Degree at Rotterdam School of Management. It was back in 2018 when I graduated and started my first internship at the European Investment Fund (EIF). My first task as an intern was to read, analyze and enrich all the Operational Risk Indicators (ORI) for the Fund. That meant I had to learn all the relationships between departments, teams and clients. Auditing processes can be tedious, but it taught me the importance of setting up the right systems in place.

A website is like a system. There are multiple elements being triggered every time we browse a page, when we move further down the purchasing funnel, or when we decide to drop off; because we might have changed our mind, or perhaps because we didn't get the experience we expected.

While I will not explain here how I ended up optimizing websites instead of doing pure finance and banking, I think finance really taught me about structure. For two years I worked as a Financial Management Trainee, where I helped develop a system to automate the management reporting as well as the financial reporting for different legal entities within Cargill. Those entities included Cargill B.V. (Netherlands) and Cargill N.V. (Belgium).

However, at the beginning it was not like that. During my first months, I did everything manually. I needed to learn all the details: account numbers, intercompany reconciliation, KPIs, how to add up accounts for subtotals, and how to steer a useful conversation with all stakeholders — including Supply Chain, Finance and Leadership.

Slowly, I learned what mattered more. Some accounts were more important than others, and priorities needed to be set. If 80% of a business makes money through trading instead of production, then getting the right inventory valuation and the commercial contract mark-to-market is way more important than knowing whether a couple of goods are missing in the warehouse.

## Improving conversion is exactly the same story

When looking at user journeys and funnels, we must first know what matters the most. In most cases, it is leading your user traffic to make a purchase. For others, a conversion might be defined as getting a call (such as HVAC businesses) or scheduling demos with prospects (especially for SaaS companies).

In my case, I was looking at a tour company's online funnel. I knew where users were dropping off. However, all my stakeholders were asking different questions about all sorts of things, such as:

1. If a user chooses a specific tour, are they likely to buy any add-ons?
2. What happens to those users that did not manage to pay with their card because of insufficient funds? Are they trying again?
3. How many users create an account vs. those that remain as guests?

These are all important and relevant questions, but they do not necessarily solve the problem in my case. The problem was that most of the users were browsing through different tour options but selected none. If no one is buying but we have a lot of people browsing, then what's preventing them from converting?

That was the real question. The rest were secondary items to look at.

As an independent consultant, my job is to ensure that I solve the problem and reduce friction to the ultimate goal. That involves creating a system that sets up users for success. If any information is missing, if there's a trust issue, or there's a lack of urgency, these could be reasons why it is underperforming.

## Structuring the chaos

Another challenge I was facing was how to structure the conversations. When there's a performance threshold before migrating to a new website or approving a new proposal, everything becomes more difficult. The team wants to provide the best results at all costs and focus on all improvements at once, but that's simply not possible.

Something that helped me was to create a centralized tracker that made it super clear for everyone what we were working on, why, and in which order. Nothing fancy, a shared document with five columns: the question or hypothesis, who owns it, what evidence we already have, its priority, and its current status.

The rule was simple: a question could only be marked as high priority if it was directly connected to the main drop-off point. Everything else — add-ons, guest checkout, failed payments — went to the backlog. Not deleted, not ignored. Just parked, with a name attached to it, so nobody felt their question was being dismissed.

This changed the dynamic of the meetings completely. Instead of ten people asking ten different questions, we had one board answering one question at a time. Product knew what to build next. Leadership knew why we were not "doing everything." And I could spend my time analyzing the real root cause for drop offs and making improvements instead of defending the roadmap.

### Bring Insights, Not Data

Once the noise was reduced, the analysis became much more interesting. Three learnings stood out for me. Let's take an imagined tour company as an example. 

**First: users were not abandoning, they were refining.** When I matched what users initially searched against what they finally purchased, the large majority bought exactly what they first looked for. Someone who arrived looking for the old coastal village food tour bought that actual tour. And among those who "changed their mind," most were not switching to a completely different product: they kept the same tour and the same date, but changed a detail. The sunset slot instead of the afternoon one. The meeting point at the harbor entrance instead of the one across town, because it was closer to their hotel. Think of it like buying a plane ticket: you rarely change your destination at the last minute, but you might switch from a morning flight to an evening one, or from one airport in the city to another. The trip is decided; the logistics are being refined. In other words, users knew what they wanted. What they were struggling with was clarity on the options — several starting times and two meeting points, all presented as if they were different products. That reframed the whole conversation: instead of asking "why are users leaving?", we started asking "what is confusing them at the moment of choosing?"

**Second: not all buyers behave the same, and segments confirm hypotheses.** You might believe that your website needs a lot of cheap discounts to get more sales coming, but that might simply be wrong. In reality, online shops have different segments, and they all behave differently. For example, one segment of your online clothing store might be families that look for clear product descriptions: the materials used, where it was produced and whether it is suitable for washing at hot temperatures. Another segment might be students who just need functional clothes that make them look good and feel good during winter. Same store, two different buyers, two different needs. For a tour company, the split was about timing, and it makes sense once you picture the two travelers behind the screen. One is planning their vacation from home, weeks before flying, comparing reviews with a coffee in hand. The other is already in the city, standing in their hotel lobby after breakfast, deciding what to do that same afternoon. When we looked at booking times, both groups were clearly there: a big share of purchases happened within hours of the tour starting, while the rest were booked well in advance. Two completely different mindsets co-existed on the same funnel: the traveler in the lobby needs speed and certainty that there's still a spot; the planner at home needs reassurance and information, because plans change and flights get delayed. Intuition is fine, I rely on it as well and it can be powerful, but a hunch confirmed with data is a decision. That insight unlocked two concrete product ideas that drove more sales and conversion:

- Adding urgency messaging ("3 spots left for today's 4 PM tour") for the traveler deciding from the hotel lobby,
- And a clear cancellation and refund policy description before even going to checkout, for the planner booking weeks ahead.

**Third: never trust your funnel before auditing your tracking.** Before drawing any conclusion from a funnel, I always run a sanity check: **do the numbers at each step actually add up against a source I trust, like confirmed orders or payment records?** More often than you'd expect, they don't. Analytics implementations might have silent gaps. These are events that break after a website update, ad blockers eating a share of your traffic, sessions splitting in two when a user switches devices. I've learned this the hard way: I once spent hours building a funnel analysis on top of a metric, only to discover that some underlying data for certain user steps was incomplete (I wrote another post about it, it was due to a ++[Race Condition](https://matteoarellano.com/journal/2026-07-18-how-deep-analytics-work-fixed-product-bugs/)++) and the whole thing had to be redone. It’s like checking your bank balance in two different apps and getting two different numbers. Before making any decision, you need to know which one is correct. This is where my auditing background at the EIF pays off: before analyzing a system, verify that the system is recording reality. And when part of the data simply cannot be trusted or matched, it is better to fix that as soon as possible to gather new data going forward than making assumptions on what actually happened.

### One spreadsheet to align everyone

To structure all the conversations, my mentor helped me to build a single tracker that became the source of truth. Every improvement idea, bug or open question had to be classified within a website page and topic. I also added a clear detail such as a URL to a Jira ticket where all the technical information lives. Lastly, assigning **Importance**, **Status**, **Dev Time Required** and **Comments** also helps to prioritize and adds clarity to distinguish the most important elements from the least important.

The columns force discipline. **"Dev Time Required"** immediately separates what I can ship myself today from what requires engineering time.

If there are some front-end works that need client approval such as changing a banner text, a product description or adding some kind of promotion you can optionally add **"Needs Client Sign-Off"** and **"Sign-Off Received"** to make approvals visible, so nothing gets blocked silently for two weeks.

**"Importance"** forces us to rank instead of treating everything as urgent. And "Status" means nobody has to ask "where are we on this?" in a meeting ever again.

My mentor at the time gave me the best quality test for it: *"If I need to spend more than two minutes understanding the tracker, it's not clear enough."*

That became my rule. Every time a column got messy or a row needed explanation, I simplified it. A tracker isn't for the person who builds it, it's for the person who opens it once a week, under pressure, looking for one answer.

Here's what it looks like in practice — three views of the same tracker:


| Page | Topic | Initiative | Detail |
| -------------- | ------- | ----------------------------------------- | --------------------------------------------------------- |
| Search results | Clarity | Show meeting point on tour card | [JIRA-142](https://example.atlassian.net/browse/JIRA-142) |
| Checkout | Trust | Add "free cancellation" badge near price | [JIRA-155](https://example.atlassian.net/browse/JIRA-155) |
| Tour detail | Urgency | Display remaining spots for today's tours | [JIRA-149](https://example.atlassian.net/browse/JIRA-149) |



| Initiative | Importance | Status | Dev Time Required |
| ---------------------------------------- | ---------- | ---------------- | ----------------- |
| Show meeting point on tour card | High | In progress | 2 days |
| Add "free cancellation" badge near price | High | Waiting sign-off | None |
| Retry flow after failed card payment | Medium | Backlog | 8 days |



| Initiative | Needs Client Sign-Off | Sign-Off Received | Comment |
| ---------------------------------------- | --------------------- | ----------------- | ------------------------------ |
| Add "free cancellation" badge near price | Yes | Pending | Copy change only |
| Update seasonal banner text | Yes | Jul 3 | Shipped same day |
| Show meeting point on tour card | No | — | Ship first, top drop-off point |


## The lesson

Finance taught me structure. Consulting is teaching me prioritization under pressure. When everyone is asking questions at the same time — product, leadership, engineering — the answer is not to work harder on all of them. The answer is a system: one tracker, one main question, evidence before opinions, and the discipline to park everything else.

![](/images/journal/matteo-arellano-working.jpeg)

I struggle with this too. Every project, there's a moment where the questions pile up faster than the answers. But that moment is exactly when the system matters most. If 80% of your problem lives in one step of the funnel, that step deserves a large chunk of your attention.

The rest can wait. And usually, once the main problem is solved, half of the other questions answer themselves.