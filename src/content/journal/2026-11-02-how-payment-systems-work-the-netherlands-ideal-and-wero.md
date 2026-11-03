---
title: "How Payment Systems Work: The Netherlands, iDEAL and Wero Explained"
description: What a payment system is, who carries the risk when something goes wrong, and why the Netherlands is replacing iDEAL with Wero, explained with real Dutch examples. The written version of episode 1 of my video series.
pubDate: 2026-11-02
tags:
  - payments
  - iDEAL
  - Wero
  - SEPA
  - instant payments
  - video
image: /images/journal/payment-systems-netherlands-og.jpg
video:
  youtubeId: PSkXdDwBMa4
  title: "How Payment Systems Work: The Netherlands, iDEAL & Wero Explained"
  uploadDate: 2026-11-02
  duration: PT22M12S
  playlistUrl: https://www.youtube.com/playlist?list=PLCVWF4_Kwa-Y
  playlistLabel: All episodes of Payment Systems, Explained
draft: false
---
In the Netherlands, only about one in six shop payments is made in cash. Cheques no longer exist. A bank transfer arrives in about five seconds, even at night or on a Sunday.

And right now, the country is replacing its own online payment method, iDEAL, with Wero, a payment wallet built by European banks.

This article is the written version of the first episode of **Payment Systems, Explained**, a video series I've just started. In each episode I take the basic building blocks of payments and show them working in a real country. I'm still learning to make videos, so the series, and the format, will grow over time.

## What a payment system is

A payment is a transfer of value from one person or business, the sender, to another, the receiver. In the Netherlands, that value is in euros.

Every payment has three steps:

1. **Initiation:** someone starts the payment.
2. **Funding:** the sender provides the money.
3. **Completion:** the receiver has the money.

Usually the sender starts the payment, as with a normal bank transfer. Sometimes the receiver does, as when your energy company collects its bill from your account with a direct debit.

A **payment system** is a group of providers, such as banks and payment processors, that follow the same technical standards and the same operating rules. A **payment network**, which in Europe is often called a *scheme*, is the organisation that writes those rules and owns the brand.

The difference matters. SEPA Instant Credit Transfer is a payment system: a rulebook European banks follow to move euros between accounts in seconds. iDEAL, and now Wero, are schemes: organisations with their own brand, their own rules for shops and their own prices, built on top of bank accounts.

### Seconds or days: it depends on the system

A single transfer from a Dutch banking app arrives within five seconds, at any hour. That has been normal since 2019.

Salaries and direct debits use a different system: regular SEPA payments, processed in batches. An employer doesn't send 500 separate salary payments. It sends its bank one file containing all of them. The bank passes the payments for other banks to a clearing house, in the Netherlands mainly equensWorldline, which sorts them per receiving bank. The banks then settle the totals with each other, and the salaries arrive by the next business day at the latest.

Direct debits from your energy company or insurer go through the same kind of batch process, in the opposite direction: the company collects instead of pays.

## Closed loop and open loop

Payment systems are built in one of two ways.

In a **closed loop** system, there are no banks in between. You have an account directly with the payment provider. PayPal is the best-known example: you and the shop both have a PayPal account, and PayPal moves the money between them. One company sets all the rules, so it can change things quickly. But it has to sign up every user itself, so it grows slowly.

In an **open loop** system, banks sit in between. Take a debit card payment at a Dutch supermarket.

Sanne banks with Rabobank, and her debit card is a Debit Mastercard. (Dutch banks are replacing their old Maestro and V PAY cards with Debit Mastercard and Visa Debit.) She taps her card at the checkout:

1. The terminal sends the payment to the supermarket's payment provider, called the **acquirer**.
2. The acquirer sends it through the **Mastercard network** to Rabobank, called the **issuer**.
3. Rabobank checks her balance and approves. The answer comes back in milliseconds.
4. Later, Rabobank and the acquirer settle the money, and the supermarket gets paid.

Sanne never signed anything with the supermarket's provider, and the supermarket never signed anything with Rabobank. Each side deals only with its own bank.

> When one bank joins an open loop system, all its customers can immediately pay the customers of every other bank in it. That's why open loop systems grow fast.

It's also how iDEAL spread so quickly in the Netherlands. Once the big Dutch banks joined, almost everyone with online banking could use it without signing up for anything new.

## The chain of liability

Open loop systems also need clear rules about who pays when something goes wrong. This is the **chain of liability**.

The network's operating rules bind the banks. Each bank then passes those obligations on to its own customers through its account terms. You never signed the network's rules, but they apply to you through your bank.

A simple example: your energy company collects money by direct debit, and you think the amount is wrong. Under the European direct debit rules, you can ask your own bank for a refund within eight weeks, without giving a reason. Your bank pays you back and claims the money from the energy company's bank, which recovers it from the energy company. Nobody goes to court; the rules decide who pays at each step.

Keep this chain in mind. It's exactly what changes when iDEAL becomes Wero.

## On-us transactions and correspondent banking

An **on-us transaction** is a payment where the same bank is on both sides. If you bank with ING and pay a friend who also banks with ING, the money doesn't need to leave ING. The bank simply moves it between two accounts in its own books, without a clearing house.

The Dutch market is dominated by three large banks, so many payments are on-us. That has a practical consequence for anyone reading statistics: the Dutch figures for instant payments only count payments between *different* banks. An ING-to-ING transfer isn't in the headline number.

**Correspondent banking** is how a bank makes payments in a country or currency it can't reach directly. It holds an account at a bank abroad, its correspondent bank, and sends and receives payments through that account.

A real example is the Netherlands and Suriname. Many Dutch people of Surinamese origin send money to family there. But Suriname is outside the euro area and outside SEPA, so a Dutch bank can't send money there the way it sends money to Spain or Germany. Surinamese banks rely on correspondent banks abroad to receive and send euros and dollars. In 2022, Suriname's president, Chan Santokhi, put it plainly: the country needs foreign intermediate banks because its own banks can't transfer money directly.

These relationships are fragile. Over the past decade, large international banks have ended relationships with many banks in the Caribbean, including in Suriname, because they judged the money-laundering risk too high for the business involved. This is called **de-risking**.

The Netherlands has been directly involved. In April 2018, Dutch authorities seized €19.5 million in cash at Schiphol Airport. It belonged to three Surinamese banks and was being flown to Hong Kong. Prosecutors suspected the banks hadn't checked properly where the cash came from. In March 2026 the case was settled: the three banks paid fines of between €124,500 and €166,000 each, and the money was returned.

Cases like this make foreign banks even more careful. For families, the result is that sending money to Suriname is slower and more expensive than sending it within Europe, even though a transfer inside the Netherlands takes five seconds.

## The Dutch payment systems

| Payment system | In the Netherlands | Key fact |
| --- | --- | --- |
| Cash | Euro notes and coins, Geldmaat ATMs | 17% of shop payments in 2025; accepted in 96% of shops |
| Paper payments | Cheques and the acceptgiro form | No longer supported; the acceptgiro ended on 1 June 2023 |
| Cards | Debit card (*pinpas*) | 83% of shop payments in 2025; more than 95% of debit card payments contactless |
| Batch transfers | SEPA credit transfer and direct debit (*incasso*) | About 2 billion direct debits in 2024 |
| Large-value payments | TARGET, run by the Eurosystem | Payments between banks and in financial markets |
| Instant transfers | SEPA Instant Credit Transfer | Standard since 2019; 505 million between banks in 2025 |

**Paper payments are no longer supported.** There were two kinds. A cheque: you wrote it and gave it to the person you were paying, who handed it to their bank to collect the money from yours. Cheques disappeared around the time the euro arrived. And the acceptgiro: a form a company or charity sent you with the amount already filled in, which you signed and mailed to your own bank so it would transfer the money. By 2022 only about 3 million were still processed a year, and Dutch banks stopped accepting them on 1 June 2023.

**Instant transfers** became the standard in 2019, when the large Dutch banks introduced them together. The Netherlands was the first euro country to do this on a large scale. Since 2025, EU law requires every euro-area bank to offer instant transfers at no extra cost compared with a normal transfer.

## Count and amount: two ways to measure payments

Payment volumes are measured in two ways. **Count** is the number of transactions. **Amount** is their total value. They tell very different stories.

| Dutch payment system | Count | Amount | Average payment |
| --- | --- | --- | --- |
| Debit card in shops (2025) | 5.83 billion | €150 billion | ≈ €26 |
| SEPA direct debit (2024) | 2.01 billion | €360 billion | ≈ €179 |
| Instant transfers between banks (2024) | 499 million | €625 billion | ≈ €1,250 |

There are almost twelve times as many debit card payments as instant transfers between banks, but instant transfers move about four times as much money. Card payments are many small amounts; bank transfers are fewer, larger ones.

Online payments are also growing faster than shop payments. In 2024, spending with iDEAL grew by 13%, while debit card spending in shops grew by 2.8%.

Not every figure is measured the same way. Card networks record every payment, so card figures are precise. Cash leaves no record, so it's estimated from a yearly survey by the Dutch central bank, DNB, and the Dutch Payments Association. Always check the source and the year of a payment statistic.

## iDEAL → Wero: processing, rules and brand

Every payment system provides three functions:

- **Processing:** moving the payment and settling the money between banks.
- **Rules:** the operating rules that bind everyone in the system.
- **Brand:** the name buyer and seller use to agree how to pay, as in "Can I pay with iDEAL?"

The Netherlands is now changing all three.

**iDEAL** is the Dutch online payment method. It was launched in 2005, and more than 350,000 businesses accept it. The webshop sends you to your own banking app, you approve the payment, and your bank transfers the money straight to the shop's bank. It only works with Dutch bank accounts.

**Wero** is a payment wallet from the European Payments Initiative (EPI), a company owned by European banks and payment companies. People in Germany, France and Belgium already use it. The Netherlands has decided to replace iDEAL with Wero; other countries keep their own national payment methods.

The switch happens in stages:

| When | What changes | Function |
| --- | --- | --- |
| 29 January – 31 March 2026 | Every Dutch webshop shows a combined "iDEAL \| Wero" logo | Brand |
| October 2026 | All Dutch banks are connected to Wero | Processing |
| From Q4 2026 | Shops move to Wero's systems | Processing |
| By 31 December 2027 | Target end of iDEAL; Wero's rules apply | Rules |

The Dutch central bank, DNB, oversees both iDEAL and Wero.

## Why replace something that works?

**Reach.** You can't use iDEAL at a German webshop, and Germans can't use it at Dutch ones. Wero is designed to work across countries. By October 2025, EPI counted more than 45 million users. Adding the Netherlands makes that network more useful for everyone in it: the same open-loop logic as before.

**Independence.** A large share of card payments in Europe run through Visa and Mastercard, two American companies. European banks want a widely used payment method whose rules and prices are decided in Europe.

**Buyer protection.** This one needs more explanation.

With iDEAL, you approve a bank transfer yourself. Your bank does exactly what you asked it to do, so once the money is sent, the payment is final. If your order never arrived, iDEAL had no process to get your money back. You had to contact the shop, and a refund only happened if the shop agreed. Card payments work differently: if something goes wrong, you can ask your bank to reverse the payment. That's called a chargeback.

iDEAL's approach was acceptable while Dutch shoppers used it mostly at Dutch webshops. But Wero is meant for shopping across Europe. If you're buying from a foreign webshop you've never heard of, you'll choose the payment method that lets you get your money back, which today is usually a card or PayPal. Without buyer protection, Wero couldn't compete with them.

So Wero has a dispute process in four steps. Say Sanne pays €80 with Wero for boots from a French webshop, and they never arrive:

1. **Pre-dispute.** Within 120 days she opens a claim in her app, and the shop has 30 days to solve it, for example with a refund.
2. **Dispute.** If they can't agree, her bank reviews the shop's evidence and decides.
3. **Pre-arbitration.** If one side disagrees, the two banks try once more to agree.
4. **Arbitration.** If that fails, EPI makes a final, binding decision.

One important detail: for payments in the Netherlands, disputes about the purchase itself, such as an order that never arrived, only apply after 31 December 2027. Until then, Dutch shoppers can dispute things like fraud or a double charge.

## Who carries the risk, and who pays for it

This is the chain of liability changing. With iDEAL, the risk of a missing order was on the shopper. With Wero, it moves to the shop, which also pays a fee for each dispute. One Dutch payment provider, for example, charges shops €6.25 for a dispute they accept, and several hundred euros if a dispute goes all the way to arbitration and the shop loses.

It also explains the price. iDEAL charged shops a low, fixed fee per payment. According to TrueLayer, a payment company that competes with Wero, Wero charges a percentage of the payment instead.

> When the rules move risk to someone, the price usually changes too.

One last point. Wero doesn't need new infrastructure. Underneath, it uses the same SEPA instant transfers that every euro-area bank now has to offer. The instant payment system is shared by all banks. What makes one payment method different from another is what's built on top: the brand, the rules and the price.

## What's next

The next episode goes to Mexico, a country with a fast transfer system run by its central bank, where many people still pay in cash.

You can follow the series on YouTube in the [Payment Systems, Explained playlist](https://www.youtube.com/playlist?list=PLCVWF4_Kwa-Y). If your business is dealing with payment acceptance, local payment methods or a migration like iDEAL to Wero, see how I work on [payment solutions](/payment-solutions/).

## Sources

- [DNB and Dutch Payments Association: Point of sale payments in 2025](https://www.dnb.nl/media/r2nkuxwh/point-of-sale-payments-in-2025.pdf)
- [Dutch Payments Association: Facts & Figures 2025](https://www.betaalvereniging.nl/en/facts-figures/)
- [Dutch Payments Association: Continued growth of instant payments](https://www.betaalvereniging.nl/en/news/growth-instant-payments/)
- [Dutch Payments Association: Account-to-account payments](https://www.betaalvereniging.nl/en/knowledge-base/account-to-account-payments/)
- [Dutch Payments Association: iDEAL annual sales approach debit card sales](https://www.betaalvereniging.nl/en/news/annual-turnover-ideal-pin-payments/)
- [Dutch Payments Association: Acceptgiro (discontinued)](https://www.betaalvereniging.nl/en/knowledge-base/recieving-payments/acceptgiro/)
- [NL Times: Everyone in the Netherlands getting a new bank card](https://nltimes.nl/node/87048)
- [EPI: Next steps in the iDEAL to Wero migration](https://epicompany.eu/media-insights/successful-first-phase-marks-major-next-steps-in-ideal-to-wero-migration/)
- [ABN AMRO: iDEAL to phase into Wero starting in 2026](https://www.abnamro.com/en/news/ideal-to-phase-into-wero-starting-in-2026)
- [PAY.: Wero's disputes and chargebacks process](https://support.pay.nl/en/knowledge/wero-s-disputes-and-chargebacks-process)
- [TrueLayer: The iDEAL opportunity](https://truelayer.com/blog/payments/the-ideal-opportunity-for-payments-in-the-netherlands/)
- [Caribbean National Weekly: Santokhi on correspondent banking](https://www.caribbeannationalweekly.com/news/caribbean-news/suriname-president-santokhi-voices-concern-at-new-us-banking-rules/)
- [Openbaar Ministerie: Settlements with three Surinamese banks (March 2026)](https://www.om.nl/actueel/nieuws/2026/03/17/transacties-met-drie-surinaamse-banken-vanwege-schuldwitwassen)
- [IMF: Loss of correspondent banking relationships in the Caribbean](https://imf.org/-/media/Files/Publications/WP/2017/wp17209.ashx)
