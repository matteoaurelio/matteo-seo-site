---
title: Who Should Authenticate the Customer? The Difficult Balance Between
  Payment Conversion, Security and Liability
description: "From delegated authentication to 3D Secure and payment passkeys,
  banks and merchants face a difficult question: how do you make online payments
  easier without accepting unacceptabl"
pubDate: 2026-10-18
draft: false
tags:
  - payments
  - risk-management
  - 3DS
  - Visa
  - MasterCard
  - Adyen
  - conversion rate lift
---
Imagine you're purchasing a flight ticket online.

You've selected your destination, entered your passenger information and provided your credit-card details.

You click the payment button.

Instead of receiving your ticket, you're asked to authenticate the transaction.

Your bank sends you a one-time password (OTP). You open your messages, copy the code and return to the checkout.

But the code never arrives.

Or perhaps the authentication page fails to load.

After a few unsuccessful attempts, you abandon the purchase.

For the airline, this means a potentially lost customer. For the bank, however, asking for additional verification might have been the correct decision to prevent a fraudulent transaction.

**This is one of the most difficult problems in online payments: the same security measures that protect customers can also prevent legitimate transactions from being completed.**

And the consequences extend far beyond checkout conversion.

They affect fraud losses, chargeback liability, regulatory compliance and the relationships between merchants, acquiring banks and issuing banks.

## 1. Why would banks introduce friction in the first place?

When a customer pays with a credit card online, the issuing bank needs to determine whether the person initiating the transaction is authorized to use the card.

The challenge is that the bank cannot physically see the customer or their card.

A fraudster who obtains stolen payment credentials may have enough information to attempt a purchase.

For years, card networks and financial institutions have introduced additional authentication mechanisms to reduce this risk.

One of the most important is 3D Secure (3DS), a protocol designed to facilitate authentication between merchants and card issuers.

Its modern version, EMV 3D Secure, often called 3DS2, supports two principal authentication flows.

The first is **frictionless authentication**, where the issuer evaluates information about the customer, device and transaction without requiring additional interaction.

The second is a **challenge flow**, where the customer must perform an additional verification step, such as approving a transaction in a banking application or entering an OTP.

Importantly, 3DS2 does not mean every customer must face a challenge.

The issuer can evaluate the transaction and allow it to proceed without interrupting the customer.

According to [EMVCo's technical documentation](https://www.emvco.com/emv-technologies/3-d-secure/), the protocol was specifically designed to exchange richer information and allow issuers to identify legitimate customers without unnecessary friction.

But the quality of those decisions depends on the information available, the issuer's risk models and its willingness to accept fraud exposure.

And that is where the financial incentives begin to matter.

## 2. A real example: when asking for authentication actually reduced approvals in the United States

In August 2024, Stripe published an interesting analysis of businesses that had introduced 3DS authentication in the United States.

Unlike Europe, the United States does not generally require Strong Customer Authentication (SCA) for online card payments.

Some US issuers were therefore less accustomed to merchants requesting 3DS.

Stripe examined a group of businesses that conducted a two-week experiment using 3DS.

Before introducing authentication, their average authorization rate was 87%.

When customers completed a 3DS challenge successfully, authorization remained at 87%.

But something unexpected happened to transactions routed through frictionless 3DS authentication.

**Their authorization rate fell to 82%.**

The customers had not necessarily been asked to do anything additional.

Yet the banks were rejecting more of those transactions.

Stripe suggested an interesting possible explanation: some issuing banks may have interpreted the merchant's request for authentication as a signal that the transaction was already suspicious.

Why would the merchant request 3DS if it didn't believe the transaction presented additional risk?

From the bank's perspective, there was also a liability consideration.

If a transaction meets the requirements for a successful 3DS authentication and the applicable liability shift, the issuer may become responsible for certain fraud-related chargebacks that would otherwise affect the merchant or acquirer.

The bank therefore has a financial incentive to evaluate those transactions carefully.

This study illustrates why adding more authentication does not automatically produce higher payment acceptance.

However, Stripe cautioned that these findings came from a small group of businesses over a limited period. They should not be interpreted as representative of every US issuing bank.

Source: [Stripe — Surprising findings from our analysis of 3DS transactions in the US (2024)](https://stripe.com/blog/surprising-findings-from-our-analysis-of-3ds-transactions-in-the-us).

## 3. Why delegated authentication is becoming attractive

Now imagine that instead of asking the issuing bank to authenticate every transaction, an approved third party could authenticate the customer.

That is the principle behind delegated authentication.

Under this arrangement, an issuing bank delegates the execution of customer authentication to another authorized entity, such as a payment service provider or merchant.

Consider a returning customer shopping at a large retailer.

The customer has already registered their payment card, authenticated their identity and associated a trusted device with their account.

When they return, the payment provider may be able to authenticate them using a biometric method or another compliant combination of authentication factors.

The issuing bank receives information confirming that authentication has already taken place.

This can reduce the need for additional challenges and improve the checkout experience.

Adyen, for example, introduced delegated authentication as part of its broader 3DS2 authentication offering.

**Its published implementation describes a first-time customer completing initial verification through 3D Secure and associating their device through biometric authentication**.

On subsequent purchases, returning customers can authenticate through the delegated process without having to repeat the same issuer-controlled interaction.

In its 2022 shareholder communications, Adyen explained that taking responsibility for authentication allows it to keep customers within the merchant's checkout experience and reduce interruptions.

The company subsequently described the service publicly in 2023.

However, there is an important distinction between promoting a solution and demonstrating its results.

Adyen explains the expected conversion benefits, but the public materials examined here do not establish a specific, independently verified percentage improvement attributable solely to delegated authentication.

Source: [Adyen — Delegated Authentication (2023)](https://www.adyen.com/en_GB/knowledge-hub/delegated-authentication).

### Does this mean delegated authentication eliminates 3DS2?

No.

In fact, EMVCo explicitly supports delegated authentication within the 3DS framework.

The merchant or its authorized representative can authenticate the customer and send the result to the issuer's **Access Control Server (ACS)**.

The issuer then evaluates that information and, depending on the applicable arrangement, may retain the ability to request additional verification.

Therefore, the choice isn't always between using 3DS2 and using delegated authentication.

It can be between issuer-performed authentication and delegated authentication, both supported by 3DS infrastructure.

And that brings us to the most complicated part of the equation.

## 4. Who pays when authentication fails to prevent fraud?

Imagine a fraudulent €500 online transaction.

A criminal purchases merchandise using stolen payment credentials. The transaction is authorized and the merchant ships the products.

Days later, the legitimate cardholder disputes the purchase.

The issuer investigates the transaction, and a fraud-related chargeback may follow.

Who bears the loss?

The answer depends on the authentication outcome, the card network's rules, the reason for the dispute and the contractual arrangements.

With qualifying issuer-authenticated 3DS transactions, responsibility for certain unauthorized-payment fraud chargebacks generally shifts from the merchant/acquirer side to the issuing bank.

But delegated authentication introduces another possibility.

The party authenticating the customer may assume additional financial responsibility under its arrangement with the network, issuer or acquirer.

Visa's published rules provide a concrete example.

Under the Visa Delegated Authentication Program in Europe, qualifying transactions may carry different Electronic Commerce Indicator (ECI) values.

A transaction that qualifies under both the delegated authentication program and the relevant digital authentication framework may use ECI 05.

A transaction qualifying only under the delegated authentication program uses ECI 07.

And Visa's April 2026 rules explicitly state that an acquirer accepts liability in line with transactions carrying ECI 07.

This distinction is significant.

A merchant may obtain a smoother checkout experience through delegated authentication while the acquiring side assumes greater fraud exposure.

The exact allocation of that cost between the acquirer, payment provider and merchant depends on their agreements.

Visa also requires participating delegated authentication providers in its European program to maintain fraud rates no worse than those achieved by issuer-authenticated EMV 3DS transactions.

Failure to meet the requirements can result in suspension or termination.

These are not simply technical integration requirements.

They are financial risk controls.

Source: [Visa Core Rules and Visa Product and Service Rules, April 2026, sections 7.9.3 and 7.10](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf).

### Regulatory responsibility is another matter

In Europe, the European Banking Authority has clarified that issuing payment service providers can outsource the execution of Strong Customer Authentication.

However, the issuer cannot simply outsource its responsibility for complying with SCA regulations.

This creates an important distinction between regulatory responsibility and commercial chargeback liability.

A bank can delegate authentication activities while remaining responsible for ensuring the outsourced process meets regulatory requirements.

At the same time, a card network's rules may allocate particular fraud losses to another participant.

Source: [EBA — Application of SCA requirements to digital wallets (2023)](https://www.eba.europa.eu/publications-and-media/press-releases/eba-clarifies-application-strong-customer-authentication).

## 5. A different result in Japan: stronger authentication without sacrificing conversion

If the US example suggests that additional authentication can damage payment acceptance, Japan provides a different perspective.

Following Japan's broader 3DS implementation requirements in April 2025, Stripe analyzed authentication performance across businesses operating in the country.

The results were particularly interesting.

According to Stripe, the number of transactions routed through 3DS quadrupled following the mandate.

Yet 60% of transactions still passed through the frictionless authentication pathway.

Businesses experienced an average conversion rate of 93%, while early dispute data showed rates more than 30% lower than during the comparable period a year earlier.

This does not establish that 3DS alone caused the reduction in disputes, but it provides useful evidence that stronger authentication requirements need not automatically lead to poor payment performance.

Stripe also observed that Japanese customers were already familiar with OTP-based and banking-app authentication.

This familiarity may have contributed to relatively high challenge completion rates.

The important lesson is that customer behavior, issuer readiness and authentication implementation matter enormously.

A process that feels unfamiliar or cumbersome in one country may be accepted as a normal part of purchasing in another.

Source: [Stripe — The conversion paradox: 3DS trends in regulated markets (2025)](https://stripe.com/blog/3ds-trends-in-regulated-markets).

## 6. What happens in emerging markets?

This is where I think the discussion becomes particularly interesting.

Emerging payment markets often combine rapidly growing digital commerce, different levels of financial inclusion, uneven authentication infrastructure and evolving fraud-prevention systems.

A merchant operating across Brazil, Mexico, India or Egypt cannot assume that the same authentication strategy will work equally well in every market.

There are several documented examples that illustrate why.

### Brazil: C&A recovered R$24 million in sales while reducing chargebacks

In June 2025, Adyen published a case study about its partnership with Brazilian fashion retailer C&A.

The retailer wanted to improve online payment approval rates while reducing fraud losses and chargebacks.

Instead of focusing exclusively on additional customer authentication, C&A introduced a broader set of payment optimizations through Adyen Uplift, including risk decisioning, tokenization and authentication optimization.

According to Adyen, during the first six months of implementation:

- Online payment approval rates increased by approximately 4.7 percentage points.
- C&A recovered R$24 million in additional sales.
- Reduced chargebacks generated approximately R$1 million in savings.

The results are especially interesting because improved acceptance and lower fraud losses occurred together.

However, the improvement cannot be attributed solely to delegated authentication or 3DS2. The implementation combined several payment technologies and operational changes.

It illustrates the potential value of optimizing authentication alongside fraud models, payment credentials and issuer-specific processing decisions.

Source: [Adyen — Como a C&A aumentou R$ 24 milhões em vendas com IA para pagamentos (2025)](https://www.adyen.com/pt_BR/centro-de-conhecimento/cea-aumentou-24-milhores-com-ia-para-pagamentos).

### India: moving from one-time passwords toward payment passkeys

India provides another interesting example.

The country has developed a highly digitized payments ecosystem, with widespread use of OTP-based authentication and regulatory requirements for additional verification of many online card transactions.

However, OTPs introduce vulnerabilities.

Messages can be intercepted, customers can be tricked into revealing codes through phishing, and SIM-swapping attacks can allow fraudsters to receive messages intended for legitimate users.

In August 2024, Mastercard announced the global launch of its **Payment Passkey Service**, starting with a pilot in India.

The initial participants included Axis Bank, payment providers Juspay, Razorpay and PayU, and online retailer bigbasket.

Instead of relying on an OTP delivered through SMS, customers can authenticate purchases through a cryptographic passkey using their device's fingerprint, facial recognition or PIN mechanism.

The customer's biometric information remains on the device rather than being sent to the merchant.

This approach can reduce exposure to phishing and intercepted OTPs while potentially removing unnecessary steps from checkout.

But there is a limitation to what can be concluded from the announcement.

The launch identifies actual financial institutions and merchants adopting the technology. It does not, by itself, establish a measured improvement in authorization rates or a reduction in fraud across their businesses.

Those outcomes need to be evaluated against real transaction data.

Source: [Mastercard — Payment Passkey Service launches in India (2024)](https://www.mastercard.com/ge/en/news-and-trends/press/2024/august/mastercard-selects-india-for-the-global-launch-of-its-payment-passkey-service-accelerating-secure-online-checkout-for-millions-of-shoppers.html).

### Egypt: how improved fraud assessment increased legitimate approvals

Another example comes from the National Bank of Egypt.

According to Mastercard, the bank wanted to strengthen fraud prevention while supporting merchants expanding into new markets and sales channels.

It implemented Mastercard's Transaction Risk Management solution to assess transaction risk more effectively.

The system uses transaction data and configurable risk controls to identify suspicious activity before authorization.

Mastercard reported that one airline merchant in the bank's portfolio experienced a **23% increase in its approval rate** in the year following implementation.

This is not a delegated authentication case. It is an example of improved risk decisioning.

But it is relevant to the same problem.

If a bank rejects too many legitimate transactions, it protects itself from some fraud while also preventing merchants from completing legitimate sales.

Improving fraud identification can allow more genuine transactions to proceed without simply removing security controls.

Source: [Mastercard — Optimizing Authorization Rates with Fraud Prevention Technology](https://www.mastercard.com/us/en/business/payments/merchant-cloud/insights/authorization-rates-in-digital-commerce.html).

### Mexico: why the relationship with issuing banks matters

In Mexico, eyewear retailer Ben & Frank compared Stripe with its previous payment processor.

After a three-month trial, the company reported a 10% improvement in payment conversion using Stripe.

According to the published case study, part of the improvement came from Stripe's relationships with local processing networks and issuing banks, which helped refine authorization and fraud logic.

The result is not evidence that a specific 3DS configuration or delegated authentication method caused the uplift.

However, it demonstrates that market-specific relationships and issuer behavior can significantly influence payment acceptance.

When processing international payments, merchants need to understand not only card networks but also the practices of local financial institutions.

Source: [Stripe — Ben & Frank customer story](https://stripe.com/en-pt/customers/ben-and-frank).

## 7. Is stronger authentication actually reducing fraud?

There is another important question.

Are these authentication requirements producing measurable security benefits, or are they simply making online transactions more difficult?

In December 2025, the European Banking Authority and European Central Bank published a joint report examining payment fraud between 2022 and 2024.

Their findings confirmed that Strong Customer Authentication remained effective against several forms of payment fraud, particularly fraud involving stolen card credentials.

Transactions authenticated through SCA were generally less susceptible to fraud than those without SCA, especially card payments.

But the report also identified a changing threat.

Fraudsters were increasingly manipulating legitimate customers into authorizing fraudulent transactions themselves.

This matters because authentication can establish that the legitimate account holder approved a transaction without necessarily proving that the transaction was made for a legitimate purpose.

For example, a customer might be persuaded by a criminal to authorize a payment under false pretenses.

A fingerprint or OTP can confirm that the customer authorized the payment, but it cannot independently determine whether the customer was deceived.

The distinction is important for banks designing their next generation of authentication systems.

**Authenticating the customer and determining whether a transaction is fraudulent are related, but different problems.**

Source: [ECB and EBA — Joint report on payment fraud (December 2025)](https://www.ecb.europa.eu/press/pr/date/2025/html/ecb.pr251215~e133d9d683.et.html).

## 8. So how should banks and payment providers decide?

I think there is a tendency to evaluate authentication primarily through two metrics: conversion rates and fraud rates.

But that leaves out several important variables.

Consider a payment provider deciding whether to introduce more friction into checkout.

If it challenges fewer customers, conversion may improve. But fraud losses could also increase, depending on the quality of its risk models and the transactions being approved.

If it challenges more customers, it may prevent some fraudulent purchases but also lose legitimate customers who fail or abandon authentication.

And if it delegates authentication to another provider, it may improve the experience while introducing new operational responsibilities and changes to fraud liability.

This means the decision should not be based on conversion alone.

It should account for the entire financial outcome.

Imagine a merchant with 100,000 attempted purchases per month and an average transaction value of €50.

Improving completed payment conversion by one percentage point would produce another 1,000 sales, representing €50,000 in additional gross sales.

But those sales are not equivalent to profit.

The merchant must account for product costs, payment processing, refunds, fraud losses and chargebacks.

Likewise, if a smoother authentication strategy increases fraud losses, those costs need to be measured against the additional contribution from legitimate sales.

From a bank's perspective, the calculation is different again.

A bank may lose interchange revenue when it declines a legitimate transaction, but approving a fraudulent transaction can create a financial loss.

And under the applicable liability arrangements, that loss may fall on the issuer, acquirer or merchant.

This is why authentication strategies should be evaluated jointly across financial and operational metrics.

A useful analysis would track checkout completion, authentication success, issuer authorization rates, fraud losses, chargebacks and the allocation of liability by card network, issuer and market.

It would also distinguish between transactions that were never submitted for authorization, transactions abandoned during authentication and transactions declined by the issuer.

Without these distinctions, payment conversion figures can be misleading.

## 9. What could the next generation of authentication look like?

Looking at current developments, several technologies are changing how authentication is performed.

Payment passkeys allow customers to use cryptographic credentials rather than relying on passwords and SMS codes.

Network tokenization replaces payment-card numbers with tokens that can provide additional security and information about the payment credential.

Risk-based authentication uses transaction and device information to determine whether additional verification is necessary.

Delegated authentication allows trusted parties to authenticate customers under agreed security and liability arrangements.

These technologies can complement one another.

For example, a customer might pay using a network token, verify their identity through a passkey, and have the authentication result evaluated within a card-network-supported framework.

Visa has also been evolving its authentication programs. In October 2025, it announced plans to sunset its separate Digital Authentication Framework 3DS program in September 2026 in favor of newer approaches, including Visa Payment Passkey.

That announcement should not be confused with the elimination of delegated authentication generally. Visa's European Delegated Authentication Program and other authentication arrangements have their own rules.

Sources: [Visa Merchant Business News Digest](https://www.visa.com/en-us/resources/visa-merchant-business-news-digest) and [Mastercard — One-click online payments (2025)](https://www.mastercard.com/za/en/news-and-trends/stories/2025/one-click-checkout.html).

The challenge now is not only developing better technology.

It is building enough trust between banks, networks, acquirers and merchants for them to rely on authentication performed by other participants.

That requires security standards, reliable information, fraud monitoring and commercial agreements about who carries the risk when something goes wrong.

## Final thoughts

What interests me about this subject is that decisions which appear purely technical often have important financial implications.

An issuing bank might introduce an additional authentication challenge because its fraud models identify a higher-risk transaction.

But the merchant sees a customer who might abandon the purchase.

The payment provider might propose delegated authentication to improve the customer experience.

But that could change which institution assumes the fraud liability.

And a card network has to maintain confidence in the entire payment ecosystem, ensuring that improvements in conversion do not come at the expense of increasing fraudulent activity.

The examples from the US, Japan, Brazil, India, Mexico and Egypt demonstrate why there is no universal authentication strategy.

Different markets have different regulations, customer habits, issuer capabilities and risk conditions.

I don't think the future of payment authentication should be measured by how many additional steps we can remove from checkout.

It should be measured by **how accurately we can distinguish legitimate customers from fraudulent activity, while making sure the institutions benefiting from those decisions also understand the risks they are accepting.**

Because a payment that converts is not necessarily a good payment.

And a payment that gets declined is not necessarily a fraudulent one.