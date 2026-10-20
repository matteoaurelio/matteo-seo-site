---
title: "Beyond Processing Payments: What Services Do Acquirers Actually Offer?"
description: Acquirers can offer tokenization vaults, network tokenization,
  smart routing, dynamic 3DS secure and fraud prevention in addition to helping
  merchants process their payments.
pubDate: 2026-10-19
tags:
  - 3DS
  - Acquiring banks
  - Tokenization
  - Smart routing
  - Fraud Prevention
draft: false
---
When someone purchases a ticket online, they normally see two possible outcomes: payment approved or payment declined.

But behind that simple interaction, a considerable amount of technology is involved.

Acquirers traditionally connect merchants to card networks and help process card transactions. Today, many payment providers offer additional services to improve authorization rates, reduce fraud, protect payment information and lower processing costs.

Not every acquirer offers these services directly. Some are provided by payment service providers (PSPs), gateways or specialized payment orchestration companies.

Let's explore how they work, with real examples.

## 1. Tokenization: Do merchants really need to store your card number?

Imagine purchasing a festival ticket and selecting "Save my card for next time."

The merchant could store your actual card number, but doing so introduces substantial security and PCI DSS compliance responsibilities.

Instead, providers such as Adyen offer **payment tokenization**.

Adyen securely collects and stores the customer's payment credentials and returns a reference called `storedPaymentMethodId`.

The merchant stores this reference rather than the actual card number.

When the customer returns, the merchant submits the reference to Adyen, which retrieves the associated payment credentials and processes the transaction.

This is where a **token vault** comes in.

A token vault is the secure infrastructure that stores and manages payment credentials and their associated tokens. The token is the reference; the vault is the system behind it.

Merchants can use their PSP's vault or choose an independent provider.

For example, [Spreedly](https://developer.spreedly.com/docs/overview) offers a vault that allows merchants to store card credentials independently and use them across multiple payment gateways.

This matters when a merchant wants to switch processors without asking thousands of customers to enter their payment details again.

## 2. Network tokenization: When Visa and Mastercard create the tokens

Traditional payment tokens are generally created by gateways or vault providers.

**Network tokens are different because they are issued through card networks such as Visa and Mastercard.**

Imagine your customer has saved a Visa card that expires in December.

The customer's bank replaces that card with a new one.

Without updated credentials, a future payment using the stored card could fail.

With network tokenization, the token can remain associated with the customer's underlying card account even when the physical card is replaced.

Network tokens can also be restricted to particular merchants or payment contexts, reducing their usefulness if stolen.

[Adyen's network tokenization service](https://docs.adyen.com/online-payments/network-tokenization) provides a practical example.

Adyen can automatically request and store network tokens for eligible saved cards. When the merchant submits its ordinary stored-payment reference, Adyen substitutes the appropriate network token before authorization.

The merchant does not necessarily need to change its checkout integration.

The potential benefits include fewer failures from outdated credentials, stronger payment security and improved authorization rates.

## 3. Smart routing: Choosing who processes your payment

Suppose an international retailer works with three processors: Adyen, Checkout.com and another local provider.

Does every transaction need to be processed through the same company?

Not necessarily.

**Smart routing allows merchants to select a processor based on transaction characteristics**, including the card's issuing country, payment method, processing costs and historical authorization performance.

A transaction from a Mexican-issued card might follow a different route from one issued in Germany.

But routing can also help when something goes wrong.

Consider [Ferryhopper](https://primer.io/blog/a-guide-to-payment-routing-everything-you-need-to-know), a Greek online ferry-ticket platform.

Working with payment orchestration provider Primer, Ferryhopper implemented automated payment fallbacks.

When certain transactions fail through one processor, an eligible payment can be retried through another.

According to Primer's published case study, these fallbacks helped Ferryhopper recover approximately **1% of total bookings**.

Of course, retries must follow card-network rules. A payment declined because a card was reported stolen should not simply be sent repeatedly to different processors.

## 4. Dynamic 3D Secure: Deciding when customers should authenticate

You've probably experienced 3D Secure.

You purchase something online, and your bank asks you to approve the transaction through its application or enter a verification code.

This additional security can prevent fraud, but it can also introduce friction.

Some customers abandon their purchases. Others experience authentication failures.

**Dynamic 3DS helps merchants decide when additional authentication is necessary or beneficial.**

For example, [Adyen's Dynamic 3D Secure](https://docs.adyen.com/risk-management/dynamic-3d-secure/) supports rules for requesting authentication and challenges, while taking regulatory requirements and exemptions into account.

Ferryhopper provides another real example.

Using Primer, the company adjusted its 3DS strategy to avoid unnecessary authentication. Primer reports that this increased conversion rates by 2%.

Interestingly, Ferryhopper also discovered that requesting authentication for certain Google Pay transactions helped prevent approximately 20% of those payments from being declined.

The lesson? More authentication isn't always better, and less authentication isn't always better either.

It depends on the transaction, issuer and regulatory environment.

## 5. Fraud prevention: Looking beyond the card number

Fraud prevention is another service that payment providers increasingly offer.

These systems examine information such as transaction history, device characteristics, location signals and suspicious payment patterns.

Merchants can configure rules to approve, block, review or authenticate transactions based on their risk.

A particularly interesting example comes from [Oasis Hotels in Mexico](https://stripe.com/customers/oasis-hotels).

Oasis worked with Stripe Radar to investigate patterns behind fraudulent hotel bookings.

The company discovered that suspicious reservations frequently involved differences between the guest's reservation name and the cardholder's name.

Instead of indiscriminately blocking these transactions, Oasis introduced rules to request 3D Secure authentication when these names did not match.

According to Stripe's case study, Oasis reduced its fraudulent dispute rate by **90% within six months** after introducing Radar and other payment improvements.

This illustrates something important: effective fraud prevention isn't simply about rejecting more payments. It's about distinguishing fraudulent behavior from legitimate customers.

## 6. What do merchants pay for these services?

Many of these capabilities come with additional costs.

A provider might charge for storing payment credentials, 3DS authentication attempts, fraud screening, account updates or payment orchestration.

Others include certain capabilities within their standard processing prices.

Therefore, comparing acquirers solely on their transaction processing fees can be misleading.

Imagine one provider charges slightly more per transaction but delivers better authorization rates and fewer fraudulent chargebacks.

That provider could ultimately generate more profit for the merchant than a cheaper alternative.

The important questions are not simply how much a transaction costs, but **how many legitimate transactions are successfully completed, how much fraud is prevented and how much operational complexity is introduced.**

Payment processing is no longer just about moving money.

It is also about deciding how securely, efficiently and reliably that money moves.