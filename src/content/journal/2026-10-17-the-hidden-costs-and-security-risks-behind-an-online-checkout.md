---
title: The Hidden Costs and Security Risks Behind an Online Checkout
description: How something as simple as collecting a billing address or choosing
  a payment form can affect merchant fees and customer security.
pubDate: 2026-10-17
tags:
  - web security
  - payments
  - conversion
  - finance
draft: false
---
Have you ever wondered why some websites ask for your entire billing address when you're purchasing something online, while others only ask for your card details?

Or why some websites redirect you to another page to complete the payment, while others allow you to pay without leaving the website?

These decisions might seem insignificant, but they can have important financial and security consequences for merchants.

Let's look at two examples.

## 1. How missing billing address information can increase payment costs

When a customer makes an online payment, the merchant usually sends information to its payment processor, which forwards the authorization request through the acquiring and card-network infrastructure to the issuing bank.

One of the verification services available during this process is AVS, or **Address Verification Service**.

AVS compares billing address information, usually the street address and postal code, against the information held by the card issuer.

The rationale is straightforward. If someone uses stolen card information, they might not know the legitimate cardholder's billing address.

An AVS mismatch can therefore serve as an additional fraud indicator, although it does not automatically mean a transaction is fraudulent.

But AVS has another interesting purpose.

**It can influence the interchange fee associated with processing a transaction.**

In the United States, Visa has established different interchange categories depending on how transactions are processed and which information is submitted.

For example, Visa's CPS/E-Commerce Basic qualification criteria include an AVS request during authorization, subject to certain merchant-category exceptions.

When merchants fail to meet the requirements of a particular interchange program, transactions may qualify for a different, potentially more expensive category.

### How expensive can this become?

Let's look at Visa's published US interchange rates, effective April 18, 2026.

For eligible, exempt consumer debit cards:


| Interchange category | Published rate |
| ----------------------------------------------- | -------------- |
| CPS/E-Commerce Basic | 1.65% + $0.15 |
| Electronic Interchange Reimbursement Fee (EIRF) | 1.75% + $0.20 |
| Standard | 1.90% + $0.25 |


On a $100 transaction, the difference between CPS/E-Commerce Basic and EIRF is $0.15.

For a merchant processing 10,000 comparable transactions, that would represent an additional $1,500 in interchange.

This comparison illustrates the financial consequence of being assigned a different category. Missing AVS information is one possible qualification problem, but it does not automatically mean every transaction moves to EIRF. Other network conditions determine the actual classification.

Also, **merchants do not pay interchange directly to Visa**. It is an interbank fee that can be passed through by acquiring institutions. The direct impact on a merchant depends on its pricing contract. Under a flat-rate agreement, the merchant may not see an individual interchange downgrade reflected in its price.

Nevertheless, it illustrates something interesting about online payments.

The information collected during checkout can influence how much a transaction costs.

Sources: [Visa US Interchange Rates, April 2026](https://usa.visa.com/dam/VCOM/download/merchants/visa-usa-interchange-reimbursement-fees.pdf) and [Interchange Qualification Matrix](https://www.ncosc.gov/sites/default/files/2025-01/19.1_Interchange_Qualification_Matrix-Final.pdf).

## 2. Who should be responsible for collecting your card details?

Now imagine you're running an online store.

You need a payment form where customers enter their card number, expiration date and security code.

You could develop and host this form yourself, but that means taking responsibility for the systems handling sensitive cardholder information. Essentially, you need to become PCI-DSS compliant.

PCI DSS stands for Payment Card Industry Data Security Standard. It establishes security requirements for organizations that store, process or transmit cardholder information.

Rather than developing and securing the entire payment form themselves (which is a LOT of work and needs to be audited every now and then), merchants can use a payment service provider (PSP).

Companies such as Stripe and Adyen offer different integration options.

A merchant can redirect customers to a hosted payment page, embed secure payment fields into its existing checkout, or use prebuilt payment components.

With a properly implemented hosted solution, sensitive card details are entered into fields served by the payment provider and transmitted directly to that provider, rather than passing through the merchant's own servers.

This can substantially reduce the merchant's PCI compliance burden.

However, there's a trade-off.

**A fully hosted checkout can limit how much control merchants have over the payment experience**. Embedded components offer more flexibility, but merchants still need to ensure that the surrounding website is secure.

And outsourcing the payment form doesn't mean outsourcing all responsibility for payment security.

## 3. A documented example: Ticketmaster's payment-page attack

In 2018, Ticketmaster experienced a security breach involving a third-party chatbot installed on its online payment pages.

**Attackers compromised the chatbot software and used it to access customer payment information.**

According to the UK's Information Commissioner's Office (ICO), the breach affected approximately 9.4 million customers across Europe, including 1.5 million in the United Kingdom.

The ICO also reported that 60,000 payment cards had been subjected to known fraud following the breach.

In November 2020, Ticketmaster received a **£1.25 million fine** for failing to implement adequate security measures.

What's interesting about this case is that the chatbot wasn't supposed to collect payment information.

It was a customer service tool.

But its presence on the payment page created an opportunity for attackers to compromise sensitive information.

This is an example of **online payment skimming**, where malicious JavaScript captures customer data during checkout.

The case illustrates why merchants must pay attention not only to their payment processor, but also to the third-party scripts running on their websites.

Source: [UK Information Commissioner's Office — Annual Report 2020–21, page 30](https://ico.org.uk/media2/migrated/2620166/hc-354-information-commissioners-ara-2020-21.pdf).

## 4. What has changed with PCI DSS 4.0.1?

The PCI Security Standards Council has introduced additional guidance addressing payment-page script security.

In February 2025, it clarified that merchants using embedded third-party payment forms must be able to confirm that their websites are protected against scripts capable of compromising the payment process.

This can be achieved through suitable technical safeguards or by obtaining confirmation that the payment provider's solution includes appropriate protections when implemented correctly.

Merchants using a complete redirect to a hosted payment page have different eligibility conditions from those embedding a payment form on their own website.

This distinction matters.

Even when a merchant does not directly handle card numbers, an attacker who compromises its checkout page might replace a legitimate payment form with a fraudulent one or redirect customers to a malicious website.

Source: [PCI Security Standards Council — FAQ 1588 (February 2025)](https://www.pcisecuritystandards.org/faqs/1588/).

## Final thoughts

I find these two examples particularly interesting because they demonstrate how decisions made during checkout development extend beyond user experience.

Collecting a billing address might introduce additional friction, but it can also help with fraud detection and interchange qualification.

Hosting your own payment form might provide more control, but it can significantly increase your responsibilities for protecting sensitive customer information.

Using a payment provider reduces some of those responsibilities, but doesn't eliminate the risks associated with operating an online store.

Perhaps the most important question isn't simply how to make a checkout faster or easier to use.

It's how to understand the financial, technical and security consequences of the choices made when building it.