---
title: How to Analyze a Funnel Without Drowning in the Details
description: Some thoughts and tips on managing large web analytics accounts for
  large clients.
pubDate: 2026-07-13
tags:
  - analytics
  - amplitude
  - google analytics 4
  - bigquery
  - prioritization
draft: false
---
Recently I was assigned a large client account. The client had meticulously set up their own Google Tags, Variables and Triggers on GTM and tested that every event was correctly picked up from the data layer.

Once their Analytics funnel were set up, and an A/B test was running that sent users into a new purchase flow, different and new from the one they were used to. Their goal was clear: increase conversion rates and provide a better user experience online.

My job was to monitor the entire funnel. That meant reconciling the old Google Analytics 4 events from the previous funnel with a newly built GA4 setup and data layer spec. 

The big challenge for me was that I got almost no onboarding and I had to quickly check that everything was working as expected.

I was, nonetheless, eager and looking forward to delivering value to my team so that we could see where users struggled the most on the new funnel and I could provide very specific recommendations on what to improve. 

The first thing I worked on with the development team was consent. We had to make sure the cookie banner handled marketing, functional, and analytical cookies correctly using Google Consent Mode v2. 

In short, **Consent Mode v2** is Google's framework for adjusting how its tags behave based on what the user accepts. Beyond the original signals for ads and analytics storage, it adds two newer ones: whether user data can be sent to Google for advertising, and whether it can be used for personalization. When a user declines, the tags either stop firing or send limited, cookieless pings, depending on the implementation.

This step matters more than people think. If consent is wrong, every number you report afterwards sits on a broken foundation. There is no point debating conversion rates when you are not sure the data is even allowed to exist.

Then the A/B test started. We had dozens of events, and getting lost in the details was easy.

### The trade-off

This is where I ran into a tension that everyone doing analytical work eventually faces. You can zoom out and see the big picture, or you can zoom in and know all the details. You cannot do both at once, and each mode fails in its own way.

If you only hold the big picture, you can describe the problem but you cannot fix it. Think of any online store. Saying "we lose users between the product page and the checkout" is true and useless at the same time. Every store on earth loses users there. The sentence tells nobody what to change.

If you only chase details, you drown. Dozens of events, endless segments, one strange pattern leading to another. You can spend a full day investigating why users from one country abandon their carts on one specific browser, and come out with something precise that nobody asked for. The detail feels like progress because it is hard work. But hard work is not the same as useful work.

The trade-off exists because attention is finite. Every hour spent checking one event definition is an hour not spent understanding the shape of the whole funnel. So the real question is not "big picture or details." The real question is: in what order, and how do you move between them without losing your place?

### Starting from the top

I forced myself to start with only two questions:

1. How many users do we lose between the homepage and the search results?
2. How many do we lose between the search results and the checkout?

That is it. Two numbers. Not because the rest did not matter, but because these two told me where to spend my attention. If most of the loss happens in one stage, the detailed questions about the other stage can wait.

Even these two numbers required detail work. The checkout had multiple steps, and we were still building the custom Amplitude events to tell those steps apart. Amplitude events can carry a lot of context, so I used that context to separate them. That taught me something: the big picture is not free. Sometimes you have to go down into the details just to make the summary trustworthy. 

**The difference is that you do deep dive with a purpose and goal in mind and come back up.** That helps me stay grounded, focused and keep results impact-driven.

### When the questions start flooding in

Once I had clear the first picture and communicated that to the executive team, questions started to arrive.

- Why are we losing customers at this specific step?
- Why are users not finding the product they want?
- What do they do when they stop finding it?
- When are users giving up?
- What are the last actions for those users not buying on the platform?

Every stakeholder asked from their own angle. Product wanted behavior. Payments wanted errors. Developers wanted performance data. Management wanted segments: which devices, which users, which locations convert worst, and why.

Each question was reasonable on its own. All of them at once felt overwhelming, because they all felt urgent and they were scattered across messages, calls, and my own notes.

This is the ++conflicting priorities problem++, and working faster does not solve it. If you answer questions in the order they arrive, the person with most questions sets your agenda. If you answer only the questions you find interesting, you drift. I struggled with this until I stopped treating the questions as tasks and started treating them as "analytics inventory".

### The document

Answering the detailed questions properly meant going to the raw events in Google Cloud and analyzing them in BigQuery. But before writing a single query, I created one central document that organized everything.

The document did three simple things.

Every question got written down, even the vague ones. A question that only exists in a call does not exist. Writing it down also forced me to translate it into something measurable. "Why are users frustrated" is not answerable. "What are the last five actions of users who never purchased" is.

Every question got a home under a theme: general funnel questions, search questions, payment questions. Grouping them exposed duplicates. Many questions turned out to be the same question wearing different clothes.

Every theme shared the same measurement rules: split by device, language, and country, measured both by unique users and by total events. Deciding this once meant I did not reinvent the methodology for each question, and every answer stayed comparable with the others.

And because everything lived in one place, priorities became a conversation instead of a feeling. When a new question arrived, it went into the document next to the others, and everyone could see what it competed with.

### One example of going deep

One of the payment questions asked what blocks users when they click "pay." When I broke down the errors on the payment step, the answer was clear: the overwhelming majority of blocked payment clicks came from invalid payment fields, things like a missing CVV or an empty cardholder name. Missing or invalid emails came a distant second. Incomplete personal data was a small tail. And the friction was concentrated in one method: when users paid by credit card, most clicks on the pay button were blocked by a validation error instead of going through.

That single finding reframed the conversation. Instead of a vague "users drop at checkout," we had a specific surface: the credit card form. And it immediately produced better questions. Are the error messages clear? Is the form asking for the right things in the right order? And a more interesting one: credit card was the default payment method on every device, **so should mobile users see a wallet option first instead, where there is nothing to mistype and thus, less friction involved?**

This pattern is not unique to one company. It is the same reason large eCommerce players obsess over their payment step. It is why one-click ordering exists. It is why guest and express checkout exists. It is why wallets sit first on mobile. Every field you ask a user to type is a chance for them to fail, and every failure is a sale you have to win twice.

We can improve UI/UX analyzing the frequencies of each error type and linking that to a hypothesis. These hypothesis can be then tested by changing and re-arranging front-end elements or by even collecting real responses from your customers.

If you are struggling to prioritize your funnel recommendations as a web analyst or as a company trying to sell more online I would recommend the following approach:

1. Check the general funnel and find the step where users fail. You will not yet know why. You will only know that something is going on.
2. Break each failure down into its categories, the way any large online store would dissect its payment step. Is it an unclear button? Is it a field marked as required that should be optional? Is it an error message that says something failed without saying what? Are you asking users for information that has nothing to do with their purchase?
3. Use the general funnel to prioritize where you will perform a deep dive on the data. For each deep dive, analyze the data collected and bring statistics. Sometimes you might need to combine events on customer journeys.

Remember: Try to keep the initial analyses simple so you don't get lost on all the details. Once you have clarity on what is not working, it's a good idea to look at all the details. 

For me, creating a centralized document made the difference between unstructured analysis and a systematic one - which would serve as the basis for future automation.

### Why this matters

![Matteo Arellano working](/images/journal/matteo-arellano-working-remote.jpeg)

The document looks boring. It is a list of questions from stakeholders with some formatting. But it is what resolved the trade-off for me, because it let me hold the big picture and the details at the same time without holding them in my head.

The structure of the document is the big picture. The individual questions and queries are the details. I could spend hours inside one payment question, and when I came back up, the map was still there, unchanged, showing what was answered, what was pending, and what mattered most. Without it, every deep dive was a risk of getting lost. With it, deep dives became safe.

I think this is the **honest resolution of the trade-off**. You do not become someone who magically sees both levels at once. You build something outside your head that remembers one level while you work on the other. For me it was a document. It could be a dashboard, a backlog, a notebook. The form matters less than the discipline: start from the big picture, write every question down, translate it into a measurement, give it a place, and only then go deep.

I still get pulled into the details. That has not changed, and I do not want it to change, because the details are where the real answers live. What changed is that I now know the way back up.