---
title: "Mexico Built the Rails. So Why Does It Still Pay in Cash?"
description: Mexico makes 7 billion instant transfers a year, yet most small purchases are still paid in cash. A walk through SPEI, CoDi, card fees, OXXO and remittances.
pubDate: 2026-11-03
tags:
  - payments
  - Mexico
  - SPEI
  - CoDi
  - instant payments
  - remittances
  - financial inclusion
draft: false
---
It's lunchtime at a taquería in Iztapalapa, on the east side of Mexico City. A customer orders tacos for her family, MXN 250, and pays with two notes from her purse. By the end of the day, the drawer will hold three or four thousand pesos.

That same afternoon, the owner's nephew pays the stall's rent from his banking app, and the money reaches the landlord's account at another bank in a few seconds. That evening, a family in Michoacán receives a transfer from a son working in California, and a teenager in Guadalajara buys sneakers online and pays for them in cash at a convenience store.

All four payments are ordinary in Mexico, and together they describe a country running two payment economies at once. **By value, Mexico is already electronic**: in 2025 its central bank's transfer system moved about MXN 592 trillion, roughly 17 times the size of the whole economy. **By count, it is still a cash country**: 85 of every 100 adults say cash is how they mainly pay for anything under MXN 500, and the amount of cash in circulation doubled between 2019 and 2025.

This article explains how both can be true. It's the written companion to the second episode of my series **Payment Systems, Explained**, after [the first one on the Netherlands](/journal/2026-11-02-how-payment-systems-work-the-netherlands-ideal-and-wero/). The short version: **Mexico didn't lack payment infrastructure. It lacked a reason for the person behind the counter to accept it.** On 14 December 2026, Mexico's central bank makes its biggest bet yet that it can change that.

## Two economies in one country

Mexico's national financial inclusion survey (ENIF, run by the statistics institute INEGI and the banking regulator CNBV) asks adults how they usually pay for purchases under MXN 500, roughly a family meal at a taquería. In 2024, **85.2% said cash**. For more than four in five adults, everyday spending still means notes and coins.

The size of the purchase matters. In a 2025 study by the central bank, Banco de México (known as Banxico), 89% of city dwellers said that, where every method is accepted, they prefer cash for purchases of MXN 200 or less. Above MXN 1,000, that fell to 54%. Cash rules small amounts; cards and transfers take over as the amount grows.

The other side of the counter matters even more. About 54% of Mexican workers are informal, and the informal economy *grew* in this period, from 22.2% of GDP in 2020 to a record 25.4% in 2024. The digital payments boom happened alongside it, not instead of it.

Most Mexican businesses are tiny, and tiny businesses run on cash. Microbusinesses are 95.5% of all firms, and **only 13.5% of them accept cards**. In 2024 surveys of corner shops (*tienditas*) by the retailers' association ANPEC, 55.6% had no card terminal, 95.8% paid their suppliers in cash, and 83.8% said cash simply worked better for them.

Then there's a paradox. If Mexicans pay less in cash, why is there so much more of it? Notes and coins in circulation went from MXN 1.74 trillion at the end of 2019 to **MXN 3.545 trillion** at the end of 2025. The jump started in 2020, when cash grew 25% in a single year even as people used it less, because households held it as a safety net. In 2025, 28% of urban adults kept cash outside the banking system, many of them for emergencies.

So "Mexico still uses cash" means three things: a way to pay for small purchases, a way to save, and the way much of the economy gets paid. Each has a different cause and a different fix.

## The system most Mexicans use without knowing its name

Here's what surprises most people outside Mexico: the country already has one of the world's largest instant payment systems. It's called **SPEI** (Sistema de Pagos Electrónicos Interbancarios), and Banxico has run it since 2004.

SPEI began as plumbing between banks. When you send money to someone at another bank, your bank can take money out of your account but can't put it into an account somewhere else. Something has to move the money *between the two banks*. In many countries that happens in batches, a few times a day or the next business day. SPEI settles **each transfer individually and immediately**, using the accounts banks hold at the central bank. Once SPEI processes a transfer, the receiving bank really has the money; nobody is waiting for anyone to pay later. It runs 24 hours a day, every day, and in 2025 it was available 99.99% of the time.

### Following one transfer

Lucía pays her MXN 6,500 rent from her BBVA app to her landlord, who banks with Banorte.

What Lucía sees: she picks the landlord from her contacts (or types his 18-digit account number, the **CLABE**), enters the amount, confirms with her fingerprint, and gets a confirmation screen. The landlord gets a notification almost at once.

What happens behind the scenes:

1. **BBVA checks the payment**: that it's really Lucía, that she has the money, and that it's within her transfer limit. (Since late 2025, customers can set their own limit; otherwise a default of 1,500 UDIs, an inflation-linked unit, applies. That's about MXN 13,200.)
2. **BBVA sends the order to SPEI** at Banxico.
3. **SPEI settles it immediately**, moving MXN 6,500 from BBVA's account at Banxico to Banorte's.
4. **Banorte credits the landlord.** Banxico's rules require this within five seconds for transfers of up to 1,500 UDIs.
5. **Both sides can download an electronic receipt**, the CEP, that proves the payment happened.

This is the **open loop** from the Netherlands episode: Lucía never signed anything with Banorte, and her landlord never signed anything with BBVA. Each deals only with their own bank, and SPEI connects every bank to every other.

### How big it has become

In 2025, SPEI processed **7.3 billion transfers by end users**, up 36.8% from 5.3 billion a year earlier. That's about 14 times the 505 million instant transfers between Dutch banks in 2025, in a country with about seven times the population. In the last quarter of 2025, **82.9 million people, about 81% of Mexicans aged 15 and over, sent or received at least one transfer**: roughly six transfers per adult per month. Brazil's Pix, at about 31 a month, is far ahead; Colombia's new system reached about three in its first year. (Definitions differ, so treat these as rough comparisons.)

Most transfers are small (94.6% were for about MXN 13,200 or less), and they got cheaper: the average fee banks charge individuals fell from MXN 2.6 to MXN 1.5 in 2025, and three large institutions charge nothing. Nor is SPEI only for banks: 41 of its 94 direct participants were non-banks, including fintechs.

### Why SPEI succeeded without a brand

SPEI has no consumer logo and no advertising. Most Mexicans say "I'll send you a transfer," not "I'll pay you by SPEI." So why did it take off?

Because **people adopt a payment method when the person they're paying already accepts it.** Landlords, relatives, employers, freelancers and online stores all had a CLABE. Nobody had to persuade them to accept anything new. They shared a number, and the money arrived.

That idea explains what happened next, when Banxico tried to bring SPEI to the shop counter.

## CoDi: the free product nobody sold

By 2019 Banxico had a fast, cheap way to pay people. The next target was where cash really rules: the counter of the *tiendita*, the market stall and the taquería. In September 2019 it launched **CoDi** (Cobro Digital, "digital collection").

With CoDi, **the shop requests the payment** instead of the customer typing an account number. Picture Don Ramón's *tiendita* and a customer buying MXN 85 of groceries:

1. Don Ramón enters MXN 85 in his banking app, which shows a **QR code** containing a payment request.
2. The customer scans it with her own banking app, which shows the shop's name and the amount.
3. She approves, and her bank sends an ordinary SPEI transfer, settled in seconds.
4. Don Ramón's app confirms the payment.

No card network, no terminal to buy, **no fee for the merchant**, instant money. For a shop paying 3–4% on cards, that should have been irresistible.

It wasn't. In 2025, after six years, CoDi recorded **4.4 million operations**, fewer than SPEI handles every half day. On paper, around 21.8 million accounts are signed up for CoDi, but Banxico counted only **279,400 accounts actually used** in the last quarter of 2025: about one in eighty. Only 1,081 merchants used CoDi at the end of 2025.

### Why it failed

The technology worked. The problem was **who had a reason to push it**.

When a customer pays by card, the bank that issued the card earns a fee on every payment, called **interchange**, and the bank that signed up the merchant earns a share of the merchant's fee. When the same customer pays by CoDi, neither bank earns anything. Banks had every reason to promote cards and little reason to promote CoDi. Many buried it deep in their apps, behind an extra registration step, with a different design at every bank. Banxico is now forcing all apps to show transfers the same way, which tells you how much that mattered.

Two more things worked against it. At first only banks could offer CoDi, so the wallets and fintech apps winning young users couldn't distribute it. And for paying a person, plain transfers already worked fine.

A 2025 study by David Argente and co-authors for the US National Bureau of Economic Research found that Brazil's Pix and Costa Rica's SINPE Móvil spread to every income group within about five years, while CoDi stayed concentrated among higher-income users. In 2024, 38% of Mexican adults had heard of CoDi, and only 12.8% of them had ever used it.

In 2023 Banxico added **DiMo** (Dinero Móvil): send money to a **phone number** instead of a CLABE, with the recipient's name shown before you confirm. It signed up 16.4 million users by the end of 2025, but made only 3.1 million transfers that year: about one per user every five years. It made paying a friend slightly easier, which was never the problem. It did nothing for the counter.

> A payment system lowers the cost of a payment. It doesn't create the reason to accept one.

It's the Netherlands lesson in reverse. iDEAL conquered Dutch online shopping without any mandate because it **solved a merchant's problem**: guaranteed, cheap payments from customers who trusted their bank app. CoDi tried to solve a merchant problem too, but nobody in the chain was paid to bring merchants on board, and customers had no protection if something went wrong.

## Follow the MXN 250: what a card payment really costs

If CoDi failed, cards are what most shops add first. To see why that's both easy and expensive, follow one payment.

Back at the taquería, the customer now taps her debit card on a small **Clip** reader, the kind you see on market stalls all over Mexico. The order is MXN 250. She taps, the reader beeps, she gets a receipt by text message.

Behind the scenes:

1. **The reader sends the payment to Clip**, an **aggregator**: instead of the taquería signing a contract with a bank, it signs up with Clip, which handles thousands of small merchants under its own agreement with a bank.
2. **Clip passes it to its acquiring bank**, which is officially responsible for the merchant side of card payments.
3. **The acquirer sends it to a card switch.** Domestic card payments in Mexico are mainly routed by **Prosa** and **E-Global**, switches owned by the big banks.
4. **The customer's bank, the issuer, approves** after checking her balance and running fraud checks, and the answer travels back the same way.
5. **Later, the money moves**: the banks settle what they owe each other, the acquirer pays Clip, and Clip pays the taquería, usually the next day.

Clip charges **3.6% plus 16% VAT (IVA) on the fee**:

| | MXN |
| --- | --- |
| Customer pays | 250.00 |
| Clip's fee (3.6%) | 9.00 |
| VAT on the fee (16%) | 1.44 |
| **Taquería receives, next day** | **239.56** |

Of those MXN 9, the customer's bank receives the interchange. Banxico publishes the maximums: 1.15% for debit (never more than MXN 13.50 per payment) and 1.91% for credit. Here, that's up to about MXN 2.88. The rest is split between Clip, its bank, the switch and the card network, in proportions that aren't public. A registered business that issues tax invoices can recover the VAT. An informal taquería can't, so MXN 10.44 is its real cost.

### A month of sales, method by method

To compare, picture a business selling **MXN 100,000 a month** at MXN 250 a sale, and work out what it would pay if every sale came through each method. Treat the numbers as a rough guide: they use list prices from late 2026, and providers change them often.

| How the business gets paid | Monthly cost incl. VAT | Share of sales | Money arrives |
| --- | --- | --- | --- |
| Bank terminal (BBVA: 2.15% + MXN 0.42 per sale + fixed fees) | ≈ MXN 2,780 | ≈ 2.8% | Next business day |
| Mercado Pago Point reader (3.5%) | ≈ MXN 4,060 | ≈ 4.1% | Immediately |
| Clip reader (3.6%) | ≈ MXN 4,180 | ≈ 4.2% | About 24 hours |
| OXXO cash voucher via a gateway (Conekta: 2.6% + MXN 3) | ≈ MXN 4,410 | ≈ 4.4% | About a week |
| Online card payments via a gateway (3.4–3.6% + MXN 3–4) | ≈ MXN 5,300–5,900 | ≈ 5.3–5.9% | Days, or instantly for more |
| Transfer straight into the business's account | ≈ 0, plus time matching payments to sales | ≈ 0% | Seconds |
| CoDi or DiMo | 0 | 0% | Seconds |
| Cash | No fee; bank trips, theft and errors | Not measured | Immediately |

Three things stand out. **The cheapest options are the ones nobody uses at the counter**, so the gap shows what a business *could* save, not what it will. **Small sales are punished by fixed fees**: online, MXN 3–4 per sale adds 1.2–1.6 points at a MXN 250 ticket. And **the smallest businesses pay the highest rates.** Banxico's July 2026 figures show retailers on bank terminals paying 2.77% on debit and 2.94% on credit on average, and merchants on aggregators paying 2.58% and 2.89%, well below the 3.5–3.6% list prices. That suggests larger merchants negotiate while the smallest pay full price. A bank terminal would save our business about MXN 1,300–1,400 a month, but it comes with contracts, minimums and fixed monthly charges that wipe out the saving for a tiny shop.

Notice too that debit costs merchants almost as much as credit, even though debit interchange is much lower: lower costs for banks don't automatically reach merchants. In 2023, Mexico's competition authority at the time, COFECE, put average interchange at 1.36%, against about 0.2% in Europe.

### Easier, not cheaper

Aggregators transformed acceptance. Of Mexico's **6.54 million card terminals** at the end of 2024, 70% belonged to aggregators such as Clip and Mercado Pago, which reached every municipality by removing the friction: no contract, no minimum volume, no terminal rental, fast payouts.

But there's little sign they made acceptance *cheaper*. Their list prices sit above bank averages, and Mexico still has only 607 terminals per 10,000 adults, against 1,390 in Brazil. **Fintechs made accepting cards easier, not cheaper.** For a business on thin margins, that's why cash still feels like the better deal.

## Who owns the pipes

The Netherlands episode split every payment system into **processing** (moving and settling money), **rules** (who is responsible for what) and **brand** (the logo you recognize). In Mexico these belong to different owners. Visa and Mastercard own the brands and write card rules; Visa alone accounts for about 61% of credit cards and 64% of debit cards. Much of the domestic processing runs through the two bank-owned switches: Prosa (owned by Santander, Banorte, Scotiabank, HSBC and Invex) and E-Global (BBVA and Banamex).

That arrangement has been contested for years. In December 2023, Visa agreed to buy 51% of Prosa. On 20 February 2026, Mexico's new antitrust authority, the **Comisión Nacional Antimonopolio**, which replaced COFECE in 2025, **blocked the deal**. It argued the deal would remove an independent processor, that Prosa sees transaction data from every card brand, and that it would endanger Prosa's own domestic brand, Carnet.

Regulators have also gone after the fees. In October 2025, Banxico and the CNBV proposed capping interchange at 0.6% for credit and 0.3% for debit, then withdrew the plan in February 2026 after objections from banks, fintech card issuers and the US government. A softer draft followed on 27 August 2026: 1.30% per credit payment and, for debit, 0.30% with a ceiling of MXN 10.80 per payment, phased in over three years along with annual average limits, plus a requirement that aggregators pay merchants the same day. Consultation closed on 24 September, and in early November the rule still wasn't final.

What would it mean for our MXN 100,000 business? With 70% of card sales on debit and 30% on credit, and the full saving passed on, **at most about MXN 780 a month**. But the draft doesn't require anyone to pass the saving on, and aggregator prices aren't regulated. A taquería paying 3.6% to Clip may see none of it.

Washington is watching too: the US government's 2026 report on foreign trade barriers criticized the October 2025 draft and Banxico's proposed rules for the card switches.

## Why cash still wins at the counter

Fees can't be the whole story: CoDi was free and failed anyway. The evidence points to several causes that reinforce each other.

**Accounts arrived, but use didn't follow.** Between 2021 and 2024, adults with a formal financial product rose from 67.8% to **76.5%**. But much of that came from accounts people *received*: accounts for collecting government benefits rose from 6.5% to 11.6% of adults, and accounts opened in apps from 2.7% to 10.3%. The World Bank's 2025 Global Findex, using different questions, finds that only **41% of Mexican adults made or received a digital payment**.

Picture a grandmother in rural Oaxaca. Her government pension arrives on a Bienestar card (between September 2025 and June 2026, 99.3% of the 33.9 million people receiving these benefits were paid on cards). She withdraws it all at a Banco del Bienestar branch and pays for everything in cash. The survey counts her as financially included. She isn't a digital payer, because nobody she pays accepts anything else. Only 25.1% of rural adults say cards or transfers are accepted almost everywhere, against 56.3% in cities.

**Nobody wants to move first.** A shop has no reason to accept cards if customers don't carry them, and customers have no reason to carry them if shops don't accept them. Mexico has unusually good evidence on breaking this deadlock. Between 2009 and 2012 the government gave about a million debit cards to poor families in its Prospera program. The economist Sean Higgins, in a 2024 paper in the *American Economic Review*, found that corner stores near those families started accepting cards, and then *other* local consumers became 21% more likely to adopt cards too. **Acceptance follows a big, simultaneous shift in demand.** CoDi had a payment system but no such shift.

**Being visible to the tax authority.** Every card payment or transfer leaves a record, and for an informal business that's a risk. Mexico taxed cash deposits from 2008 to 2013, and since 1 April 2026 the tax authority, the SAT, has had real-time access to data from digital platforms. In focus groups run by the Center for Effective Global Action, some merchants said they preferred cash because it "leaves fewer traces." Nobody has measured how much this holds back digital payments, but it's a real contradiction: one arm of the state pushes merchants toward digital, while another makes digital easier to tax.

**Fraud without a way back.** A thief can take what's in your wallet; a fraudster can empty your account. In the first quarter of 2026, the consumer protection agency CONDUSEF received **1.515 million complaints about possible fraud**, 31.5% more than a year earlier, and institutions refunded **24.3% of the money claimed**. Part of that rise reflects more people going digital, but the structure matters too. A transfer is final; there's no chargeback like there is on a card. That's the **chain of liability** from the Netherlands episode: with a card, the rules let you ask your bank to reverse a payment; with a transfer, the risk sits with whoever pressed "send." Mexico has focused on prevention, with transfer limits and a crackdown on "mule" accounts that receive stolen money, rather than on getting victims' money back.

Unsurprisingly, almost 40% of Mexican adults say their money isn't safe in financial institutions. Trust can be built, though: a 2021 study in the *Journal of Finance* found that Prospera families who could cheaply check their balance at ATMs came to trust their bank and started saving.

**Money arrives as cash and goes back to cash.** In Banxico's 2025 study, 28% of urban adults said they get cash from wages paid in cash. Mercado Pago says its users make, on average, two cash deposits and **four cash withdrawals** a month. For many households, a digital account is a bridge back to cash. Cash is also a budgeting tool: half of people who track their spending do it by physically dividing money into piles.

Phones are no longer the main barrier: 86.1% of Mexicans aged six and over used the internet in 2025. But 79.3% of mobile users are on prepaid plans, and when the data runs out, a QR payment can fail. Cash always works, although it has costs too: in 2025, 12% of urban adults had recently given up a purchase because nobody had change.

## OXXO: the cash toll booth of the digital economy

Nothing shows the two economies meeting like OXXO, the red-and-yellow convenience store on almost every corner. With 24,297 stores, OXXO makes up between 41% and 48% of the shops and pharmacies that act as agents for banks, where people deposit and withdraw cash.

E-commerce depends on it. Mexicans spent **MXN 941 billion online** in 2025, up 19.2%, according to the online sales association AMVO. Most online buyers used debit (69%) or credit cards (54%), but **23% paid at least once with a cash voucher** at a store like OXXO.

Diego, 17, wants sneakers from an online store in Guadalajara. He doesn't have a card. At checkout he picks "pay at OXXO," and the store's payment gateway generates a **reference number and barcode** for MXN 1,200. He shows it at an OXXO and pays the cashier in cash. OXXO confirms the payment to the gateway, the store ships the sneakers, and the store receives the money days later.

Merchants like vouchers because there are no chargebacks. They dislike them because many are never paid, leaving orders hanging; I've written about [how that plays out for a business selling time-limited inventory](/payment-solutions/case-studies/oxxo-pay-cash-vouchers-time-limited-inventory/).

OXXO also earns a fee when people put cash into or take it out of digital accounts; Nu added OXXO deposits in 2025, and Clip wants to grow its own cash points from 28,000 to 100,000. Every wallet that wants customers paid in cash pays that toll, so OXXO gains whether Mexico stays with cash or leaves it.

## Remittances: the money crossing the border goes digital

A family in Zamora, Michoacán, receives about US$400 a month from a son in California. Their state received US$5.4 billion in remittances in 2025, equal to 10.5% of its economy. Nationally, remittances hit a record **US$64.7 billion in 2024**, then fell in 2025 for the first time in 11 years, to about US$62 billion. BBVA Research blames fewer new migrants, the most deportations in 12 years, weaker US job growth and a strong peso. From January to August 2026 they rose 2.2%, but the number of transfers fell 2.2% while the average transfer grew from US$391 to US$409: fewer people, sending more each.

How the money arrives is changing fast. In 2025, **50.4% of remittances were paid into accounts**, the first time deposits overtook cash pickup, and 52.7% in early 2026 (up from 44.4% in 2024), according to the Center for Latin American Monetary Studies. In 2024, sending cash-to-cash through a store cost about US$8–12; sending through an app or into a bank account, about US$5.

Two policies push the same way. Since **1 January 2026, the US charges a 1% tax on remittances funded with cash**, money orders or cashier's checks; transfers paid from an account or card are exempt. On US$350 that's US$3.50, a big surcharge when a digital transfer costs about US$5 in total, and 84% of Mexican migrants in the US already have bank accounts. Meanwhile, **Directo a México**, the public link run by Banxico and the US Federal Reserve since 2003, takes its last transfers on 20 November 2026, after a drastic fall in volume.

Private companies fill the gap, and some use **stablecoins**, digital tokens designed to hold a fixed value against the dollar. The crypto company Bitso describes the model: a remittance firm's dollars become stablecoins, cross the border on a blockchain, turn into pesos and land in the family's account by SPEI. The family never sees a stablecoin. Bitso says it handled **14.7% of US-to-Mexico remittances** from January to August 2026. That's the company's own figure, and Banxico doesn't track which systems remittance firms use behind the scenes, so it can't be checked independently.

Whatever happens upstream, the journey usually ends the same way: a five-second SPEI transfer into a Mexican account.

## What other countries teach, and what they don't

Mexico is often told to copy Brazil or India. Each did things Mexico could do, under conditions Mexico doesn't share.

**Brazil's Pix**, launched in November 2020, is designed, operated and regulated by the central bank, which made participation **mandatory for large institutions** and let non-banks in. It reportedly handled about 80 billion transactions in 2025. Merchants pay about 0.22% per payment, against 1.1% for debit cards and 2.2% for credit, according to the Bank for International Settlements. And cards didn't collapse: Brazilian credit card transactions more than doubled between 2020 and 2025.

**India's UPI** charges merchants nothing and handled 24 billion transactions in September 2026 alone. But zero fees depend on a shrinking government subsidy, two apps hold 79% of the market, and India had shocks Mexico can't design: the 2016 cancellation of most banknotes and a national digital ID.

**The Netherlands' iDEAL** handles 71% of Dutch online purchases without any mandate. But three banks dominate that market and informality is low, while Mexican banks earn interchange on cards and have little reason to push a free alternative.

**Colombia's Bre-B** is the closest match to what Mexico is doing now. Launched fully in October 2025 with a legal requirement for banks *and* wallets to connect, it registered 116 million aliases for 36 million customers in its first year. It also had launch problems, including misrouted money and refunds that took weeks. Its central bank now says technology isn't what holds it back; habits, merchant acceptance and fraud are. 78.6% of Colombian adults still prefer cash.

The lessons that travel: require banks and wallets to take part; give the system one brand, one QR code and one directory of aliases; charge merchants a small fee below card rates, so someone earns money signing them up; build fraud recovery before scaling; and expect cards and instant payments to grow together. What doesn't travel: a national ID used in payments, a cash shock like India's, a large subsidy, and low informality.

## 14 December 2026: Mexico's bet

Instead of launching a new brand, Banxico is changing SPEI from inside, by regulation. Most changes are due by **14 December 2026**. Under Circular 9/2026, every bank and fintech app must present transfers, CoDi requests and DiMo payments with the same screens and steps, and typing a CLABE will no longer be required. Banxico has also told institutions to link a customer's phone number to their account on request, so a phone number becomes an address for receiving money. And a revamped "SPEI 2.0" is due to process transfers in parallel, so a fast one doesn't wait behind a slow one.

The **Ley de Economía Digital**, a digital payments law approved by the Senate on 20 October 2026, would let Banxico require card terminals to accept QR payments, and let the finance ministry name sectors where digital payment is required. It takes effect once it's published in the official gazette, and the list of sectors comes after that.

On paper, this fixes CoDi's technical weaknesses, and the 4.6 million aggregator terminals already in shops could accept QR payments without new hardware. But it leaves CoDi's central question unanswered: **who earns money by bringing merchants on board?** Aggregators earn 3.5–3.6% on cards. A free QR payment on the same terminal earns them nothing and could eat into those card fees. Unless someone is paid to promote it, the new option may sit on terminals the way CoDi sat in banking apps. And nothing in the December package gives you a way to get money back when a transfer goes wrong. Colombia suggests what comes next: the technology can be ready on time, while changing merchants' and customers' habits takes years.

Three signals will show which way it goes. If SPEI overtakes cards in number of transactions (Banxico has reportedly said this could happen by the end of 2026) and QR payments appear on aggregator terminals, Mexico is accelerating. If CoDi and DiMo stay tiny and the fee caps stall, it isn't. A real transformation would need what Mexico hasn't done yet: one brand that banks and wallets must offer, a small merchant fee that pays someone to sign up shops, and legal fraud recovery.

## The rail was never the problem

Mexico upends the usual explanation for slow digital payments. It has had a central-bank real-time payment system since 2004, and it doesn't lack phones or even accounts. What it lacked was someone paid to bring the merchant along, a way to get money back when a transfer goes wrong, and a tax system that doesn't make the first merchant to go digital the first one to be audited.

SPEI shows that Mexicans switch quickly when the person on the other side already accepts digital payments. CoDi shows that a free system nobody is paid to distribute goes nowhere. So far the winners are young, urban, formally employed people with bank accounts, and the companies serving them: aggregators, neobanks, BBVA and OXXO. The people left behind are rural households, older adults, informal micro-businesses paying the highest rates, and fraud victims who get back about a quarter of what they claim.

Three questions will decide the next few years. Will aggregators see instant payments as an opportunity or as a threat to their card margins? Will the card fee and switch rules be finalized in a form that changes the economics, despite pressure from banks and Washington? And will the tax authority's push for visibility slow merchants down faster than Banxico's push for convenience speeds them up?

The business opportunities sit where those questions meet: checkout by transfer that matches payments to orders automatically, QR acceptance on terminals already in shops, protection for buyers who pay by transfer, and cash points that become places to pay.

When I go back to that taquería in Iztapalapa in a year, the question won't be whether Mexico has the technology to pay digitally. It does. The question is whether anyone has made it worth the owner's while.

## What's next

The video version of this episode is coming to the [Payment Systems, Explained playlist](https://www.youtube.com/playlist?list=PLCVWF4_Kwa-Y). For related reading, see [local acquiring in emerging markets](/journal/2026-10-19-local-acquiring-in-emerging-markets-benefits-challenges-and-real-examples/) and [how much a merchant actually keeps from a successful payment](/journal/2026-10-19-the-payment-was-successful-but-how-much-money-did-the-merchant-actually-keep/). If your business sells into Mexico and is working through card acceptance, OXXO, SPEI or local acquiring, see how I work on [payment solutions](/payment-solutions/).

*Figures are the latest available in early November 2026. Where sources disagree, I've used Banxico's own reports. Fees are list prices and change often.*

## Sources

- [Banxico: Annual report on financial market infrastructures 2025 (SPEI, CoDi, DiMo)](https://www.banxico.org.mx/publicaciones-y-prensa/informe-anual-sobre-las-infraestructuras-de-los-me/%7BDF8FE964-F97C-1B2D-777B-B026EF74C9CF%7D.pdf)
- [Banxico: Quantitative studies on cash use, 2025](https://www.banxico.org.mx/billetes-y-monedas/estudios-e-indicadores/%7B546BB087-E4A6-A14F-F9CD-37F847CDB674%7D.pdf)
- [Banxico: Merchant discount rates by business type, credit cards](https://www.banxico.org.mx/servicios/tasas-de-descuento-para-tarjetas-de-credito-por-gi/tasas-descuento-por-giro-cred.html) and [debit cards](https://www.banxico.org.mx/servicios/tasas-de-descuento-para-tarjetas-de-debito-por-gir/tasas-descuento-por-giro-debi.html)
- [Banxico: Interchange fees](https://www.banxico.org.mx/sistemas-de-pago/cuotas-intercambio-comisiones.html)
- [Banxico: Directo a México](https://www.banxico.org.mx/sistemas-de-pago/directo-mexico-remesas-banco-.html)
- [INEGI: ENIF 2024 results](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2025/enif/ENIF2024_CP.pdf)
- [INEGI: ENDUTIH 2025 (internet and phone use)](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/endutih/ENDUTIH_25.pdf)
- [INEGI: ENOE employment survey, September 2026](https://www.inegi.org.mx/contenidos/programas/enoe/15ymas/doc/enoe_presentacion_ejecutiva_0926.pdf)
- [BBVA Research: ENIF data on small businesses and inclusion](https://www.bbvaresearch.com/wp-content/uploads/2025/07/El-Economista-Mipymes-vs-inclusion-financiera.pdf)
- [BBVA Research: Remittances to Mexico, 2025 close](https://www.bbvaresearch.com/wp-content/uploads/2026/02/Mexico_Remesas_Cierre_2025.pdf)
- [BBVA Research: Mexico begins 2026 with a new remittance tax](https://www.bbvaresearch.com/en/publicaciones/mexico-2026-begins-with-new-remittance-tax/)
- [CEMLA: Notas de Remesas 10 (May 2026)](https://www.cemla.org/foroderemesas/notas/2026-10-notas-de-remesas.pdf)
- [AMVO: Estudio de Venta Online 2026](https://images.produ.com/wp-content/uploads/2026/03/12132700/AMVO_Estudio-de-Venta-Online-2026-Prensa-1_compressed.pdf)
- [BIS Quarterly Review: Fast payments, design and adoption (March 2024)](https://www.bis.org/publ/qtrpdf/r_qt2403c.htm)
- [Argente et al., NBER Working Paper 34280 (2025)](https://ideas.repec.org/p/nbr/nberwo/34280.html)
- [Higgins, "Financial Technology Adoption," American Economic Review (2024)](https://www.aeaweb.org/doi/10.1257/aer.20201952)
- [Kellogg Insight on Bachas, Gertler, Higgins and Seira (Journal of Finance, 2021)](https://insight.kellogg.northwestern.edu/article/debit-cards-helping-low-income-households-save)
- [CEGA: Small businesses in Mexico on the benefits and drawbacks of e-payments](https://medium.com/center-for-effective-global-action/weighing-the-benefits-and-drawbacks-of-e-payments-insights-from-small-businesses-in-mexico-eaff8a9575eb)
- [RegAlert: Banxico Circular 2/2025](https://regalert.today/document/circular-2-2025-modifies-circular-14-2017-3e69eebd-1140-46c9-8b49-6e43b16cb5b0/text) and [Circular 9/2026](https://regalert.today/document/circular-9-2026-modifies-circular-14-2017-4d22fc54-922f-4c41-b0fd-1191da966738/text)
- [Expansión: CNA blocks Visa's purchase of Prosa (20 Feb 2026)](https://expansion.mx/economia/2026/02/20/cna-dice-no-visa-compra-prosa)
- [Expansión: Banxico and CNBV soften card fee proposal (27 Aug 2026)](https://expansion.mx/economia/2026/08/27/banxico-cnbv-suaviza-propuesta-cuotas-por-pagos-con-tarjeta)
- [Expansión: COFECE finds barriers in card processing (Sep 2023)](https://expansion.mx/economia/2023/09/14/cofece-barreras-competencia-procesamiento-pagos)
- [El Financiero: Senate approves the digital economy law (20 Oct 2026)](https://www.elfinanciero.com.mx/nacional/2026/10/20/senado-aprueba-ley-de-economia-digital-pago-digital/)
- [El Informador: What SPEI 2.0 changes (1 Nov 2026)](https://www.informador.mx/economia/spei-2.0-transferencias-bancarias-en-mexico-cambiaran-que-beneficios-tendran-los-usuarios-20261031-0120.html)
- [Expansión: Why Directo a México closed (8 Oct 2026)](https://expansion.mx/economia/2026/10/08/por-que-cerro-programa-remesas-banxico-directo-a-mexico)
- [DPL News: CNBV data on card terminals](https://dplnews.com/?p=300279)
- [Mexico Business News: Card payments in 2025](https://mexicobusiness.news/finance/news/mexico-card-payments-surge-226-mx69-trillion-2025)
- [EL CEO: Small shops and electronic payments (Sep 2026)](https://elceo.com/negocios/pequenos-comercios-en-mexico-solo-1-de-cada-4-acepta-pagos-electronicos/)
- [Vanguardia: Fraud complaints rise 31.5% in early 2026](https://vanguardia.com.mx/noticias/mexico/quejas-por-fraudes-bancarios-repuntan-315-por-ciento-al-iniciar-2026-II21926394)
- [Sovos: SAT access to digital platform data](https://sovos.com/mx/blog/iva/sat-acceso-informacion-plataformas-digitales/)
- [BBVA: Point-of-sale terminal fact sheet](https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/cobros-y-pagos/TCR_21.5X28_FichaTerminalPuntodeVenta_V4.pdf)
- [Banco de la República: Bre-B working paper (March 2026)](https://d1b4gd4m8561gs.cloudfront.net/sites/default/files/publicaciones/archivos/bre-b-working-paper-march-2026.pdf)
- [EPI: Next steps in the iDEAL to Wero migration](https://epicompany.eu/media-insights/successful-first-phase-marks-major-next-steps-in-ideal-to-wero-migration/)
- [Rio Times: Bitso and US–Mexico remittances (Oct 2026)](https://www.riotimesonline.com/mexico-bitso-15-percent-remittances-2026/)
