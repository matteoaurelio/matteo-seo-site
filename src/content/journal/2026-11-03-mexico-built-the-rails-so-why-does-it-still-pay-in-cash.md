---
title: "Mexico Built the Rails. So Why Does It Still Pay in Cash?"
description: Mexico makes 7 billion instant transfers a year, yet most small purchases are still paid in cash. A walk through SPEI, CoDi, card fees, OXXO and remittances.
pubDate: 2026-11-03
updatedDate: 2026-11-04
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

That same afternoon, the owner's nephew pays the stall's rent from his banking app, and the money reaches the landlord's account at another bank in a few seconds. That evening, a family in Michoacán receives money from a son working in California, and a teenager in Guadalajara buys sneakers online and pays for them in cash at a convenience store.

All four payments are ordinary in Mexico. Together they describe a country running two payment economies at the same time.

Measured by **value**, Mexico is already electronic. In 2025 its central bank's transfer system moved about MXN 592 trillion, roughly 17 times the size of the whole economy. The number is that large because it includes companies paying suppliers, employers paying salaries and financial institutions moving money among themselves.

Measured by **count**, the number of individual payments people make, Mexico is still a cash country. Eighty-five out of every 100 adults say cash is how they mainly pay for anything under MXN 500, and the amount of cash circulating in the economy doubled between 2019 and 2025.

This article explains how both can be true, and why it matters. It's the written companion to the second episode of my series **Payment Systems, Explained**, after [the first one on the Netherlands](/journal/2026-11-02-how-payment-systems-work-the-netherlands-ideal-and-wero/).

The short version: **Mexico didn't lack payment infrastructure. It lacked a reason for the person behind the counter to accept it.** On 14 December 2026, Mexico's central bank makes its biggest bet yet that it can change that.

## Two economies in one country

Start with the customer. Every three years, Mexico's statistics institute (INEGI) and its banking regulator (the CNBV) run a national survey on how adults use financial services, called ENIF. One question is simple: how do you usually pay for purchases under MXN 500, roughly a family meal at a taquería?

In 2024, **85.2% of adults said cash**.

That doesn't mean 85% of all payments in Mexico are in cash. It describes what people *usually* do for small, everyday purchases. But those purchases make up most of the payments a household makes in a week, so they shape habits more than anything else.

Size matters. In 2025, the central bank, Banco de México (Banxico), asked adults in cities which method they prefer when every option is accepted. For purchases of MXN 200 or less, 89% said cash. Above MXN 1,000, only 54% did. For a MXN 30 bottle of water, cash is fast, needs no phone signal and costs nothing. For a MXN 3,000 phone, carrying cash feels risky and a card offers protection. Mexicans aren't against digital payments; they use cash where cash is most convenient, and that's a large share of daily life.

### The other side of the counter

The customer is only half the story. The other half is the business receiving the money, and here informality matters enormously.

An informal job is one without a formal contract or social security: a street vendor, a market stall worker, a cook in a family taquería. About **54% of Mexican workers** are informal. And the informal economy *grew* in this period, from 22.2% of GDP in 2020 to a record 25.4% in 2024. Informal businesses run on cash for practical reasons: they're often paid in cash, they pay their suppliers in cash, and they may prefer to keep few records. So Mexico's digital payments boom happened alongside a growing informal economy, not instead of it.

Most Mexican businesses are also very small. Microbusinesses, usually firms with up to ten employees, are 95.5% of all firms, and **only 13.5% of them accept cards**. In 2024 surveys of corner shops (*tienditas*) by the retailers' association ANPEC, 55.6% had no card terminal, 95.8% paid their own suppliers in cash, and 83.8% said cash simply worked better for them.

Put the two halves together and the deadlock is clear. A customer who would happily pay by card often can't, because the shop doesn't accept it. And the shop has little reason to accept cards when most customers pay in cash anyway.

### The cash paradox

One more number confuses many people. If Mexicans pay less in cash, why is there so much more of it? At the end of 2019 there were MXN 1.74 trillion in notes and coins in circulation. By the end of 2025 there were **MXN 3.545 trillion**, more than double.

The answer is that cash does two jobs: it's a way to pay, and a way to keep money. The jump started in 2020, during the pandemic, when cash in circulation grew 25% in a single year even as people used it less to pay. Banxico's explanation is that households held it as a safety net, mostly in large notes. In 2025, 28% of urban adults said they keep cash outside the banking system, many of them for emergencies.

So "Mexico still uses cash" means three things: a way to pay for small purchases, a way to save, and the way much of the economy gets paid. Each has a different cause and needs a different solution. Most of this article is about the first: why paying at the counter is so hard to move away from cash, even though Mexico has excellent digital infrastructure.

## The system most Mexicans use without knowing its name

Here's what surprises most people outside Mexico: the country already has one of the world's largest instant payment systems. It's called **SPEI** (Sistema de Pagos Electrónicos Interbancarios), and Banxico has run it since 2004.

To see why it matters, consider the basic problem every payment between two banks has to solve. When you send money to someone at another bank, your bank can take money out of your account, but it can't put it into an account somewhere else. Something has to move the money *between the two banks*. That step is called **settlement**, and the infrastructure that does it is what the industry calls a **payment rail**.

In many countries, banks settle with each other in batches, a few times a day or the next business day. Until then, the receiving bank is effectively waiting to be paid. SPEI settles **each transfer individually and immediately**, using the accounts banks hold at the central bank. Once SPEI processes a transfer, the receiving bank really has the money. It runs 24 hours a day, every day, and in 2025 it was available 99.99% of the time.

### Following one transfer

Lucía rents a small apartment in Puebla for MXN 6,500 a month. She banks with BBVA; her landlord banks with Banorte.

What Lucía sees: she picks the landlord from her saved contacts in the BBVA app (the first time, she typed his 18-digit account number, called a **CLABE**), enters the amount, confirms with her fingerprint and gets a confirmation screen. The landlord's phone shows a notification almost at once.

What happens behind the scenes:

1. **BBVA checks the payment**: that it's really Lucía, that she has the money, and that it's within her transfer limit. Customers can set their own limit; if they don't, a default of 1,500 UDIs applies. (A UDI is a unit that rises with inflation; 1,500 UDIs is about MXN 13,200.)
2. **BBVA sends the transfer order to SPEI** at Banxico.
3. **SPEI settles it immediately**, moving MXN 6,500 from BBVA's account at the central bank to Banorte's.
4. **Banorte credits the landlord.** Banxico's rules require this within five seconds for transfers of up to 1,500 UDIs.
5. **Both sides can download an electronic receipt**, called a CEP, the digital equivalent of a stamped deposit slip.

This is an **open-loop** system, a concept from the Netherlands episode. Lucía never signed anything with Banorte, and her landlord never signed anything with BBVA. Each deals only with their own bank, and SPEI connects every bank to every other. That's why systems like this can grow quickly: when one more bank joins, all its customers can immediately pay everyone else's.

### How big it has become

In 2025, SPEI processed **7.3 billion transfers by people and companies**, 36.8% more than the 5.3 billion of the year before. That's roughly 14 times the 505 million instant transfers between banks in the Netherlands, in a country with about seven times the population.

More telling than the total is how many people use it. In the last three months of 2025, **82.9 million people, about 81% of Mexicans aged 15 and over, sent or received at least one transfer.** Divide the annual total by the adult population and you get roughly six transfers per adult per month. Some of those are business payments, so the personal figure is lower, but transfers are clearly part of ordinary life.

For comparison, Brazil's central-bank instant payment system, Pix, sees roughly 31 payments per person per month, and Colombia's new system reached about three in its first year. Countries count slightly differently, so treat these as rough. But they place Mexico where it belongs: far behind Brazil, ahead of a newcomer.

Most transfers are small: 94.6% were for about MXN 13,200 or less. The huge peso value comes from a minority of very large business payments; the typical transfer is more like Lucía's rent. Transfers are also getting cheaper. The average fee banks charge individuals fell from MXN 2.6 to MXN 1.5 during 2025, and three large institutions charge nothing. And SPEI is no longer just for banks: 41 of its 94 direct participants in 2025 were non-banks, including fintechs, which means a digital wallet can offer transfers without going through a traditional bank.

### Why SPEI succeeded without a brand

SPEI has no consumer logo and no advertising. Most Mexicans say "I'll send you a transfer," not "I'll pay you by SPEI." So why did it take off?

Because **people adopt a payment method when the person they're paying already accepts it.** Think about who Lucía pays by transfer: her landlord, her family, the person who fixes her laptop, an online shop. All of them already had a bank account and a CLABE. Nobody had to sign up for anything, buy equipment or pay a fee to receive money. They shared a number, and the money arrived.

That idea, acceptance first, also explains what happened when Banxico tried to bring SPEI to the one place transfers hadn't reached: the shop counter.

## CoDi: the free product nobody sold

By 2019, Banxico had a fast, cheap way for people to pay each other. The next target was where cash still ruled: the *tiendita*, the market stall, the taquería. In September 2019 it launched **CoDi** (Cobro Digital, "digital collection").

With CoDi, **the shop requests the payment** and the customer approves it. Picture Don Ramón's *tiendita* and a customer buying MXN 85 of groceries:

1. Don Ramón enters MXN 85 in his banking app, which shows a **QR code** containing a payment request.
2. The customer scans it with her own banking app, which shows the shop's name and the amount.
3. She approves, and her bank sends an ordinary SPEI transfer, settled in seconds.
4. Don Ramón's app confirms the money has arrived.

For a small shop, this looked ideal: no terminal to buy, no card network, **no fee**, and money that arrives instantly instead of the next day. For a shop owner paying 3–4% on every card sale, it should have been irresistible.

It wasn't. In 2025, after six years, CoDi recorded **4.4 million payments**, fewer than SPEI handles in half a day. On paper, around 21.8 million accounts were signed up, but Banxico counted only **279,400 accounts actually used** in the last quarter of 2025: about one active account for every 80 registered. At the end of 2025, only 1,081 merchants were using it.

### Why it failed: follow the incentives

The technology worked. The problem was that almost nobody involved had a strong reason to push it. It helps to look at each participant in turn.

**The banks.** When a customer pays by card, the bank that issued the card earns a fee on every payment (called interchange, explained in the next section), and the bank that provides the shop's terminal earns a fee too. When the customer pays by CoDi, neither earns anything. So banks had every reason to promote cards and little reason to promote CoDi. Many placed it deep in their apps, behind an extra registration step, with a different design at every bank. Banxico is now forcing all apps to show transfers in one standard way, which tells you how much that mattered.

**The fintechs.** At first, only banks could offer CoDi, so the wallets and apps winning young users couldn't distribute it.

**The merchants.** A free payment method is only useful if customers use it. Nobody was paid to visit Don Ramón, explain CoDi and help him set it up. In the card world, that expensive job of signing up merchants one by one is funded by fees. CoDi had no fees, so it had no sales force.

**The customers.** Paying a person already worked well with a normal transfer. Paying in a shop already worked with cash, and often with cards. CoDi solved a problem most customers didn't feel they had.

Research supports this reading. A 2025 study by the economist David Argente and co-authors, published by the US National Bureau of Economic Research, found that Brazil's Pix and Costa Rica's SINPE Móvil spread to every income group within about five years, helped by low costs, coordinated effort by providers and early awareness campaigns. CoDi stayed concentrated among higher-income users. In 2024, 38% of Mexican adults had heard of CoDi, and only 12.8% of them had ever used it.

### DiMo: half a fix

In 2023, Banxico tried again with **DiMo** (Dinero Móvil). Instead of an 18-digit CLABE, you send money to a **phone number**, and the app shows the recipient's name before you confirm, which helps prevent mistakes and some scams. Behind the scenes, it's a normal SPEI transfer.

DiMo signed up 16.4 million users by the end of 2025, but they made only 3.1 million transfers with it that year: roughly one per user every five years. It made paying a friend a little easier. But paying a friend was never Mexico's problem, and DiMo did nothing for the counter.

> A payment system lowers the cost of a payment. It doesn't create the reason to accept one.

That's the Netherlands lesson seen from the other side. In the Netherlands, iDEAL, a bank-run method that sends online shoppers to their own banking app to approve a payment, became the main way people pay online without any government requiring it. It succeeded because it **solved a merchant's problem**: cheap, guaranteed payments from customers who already trusted their bank app. CoDi tried to solve a merchant's problem too, but nobody was paid to bring merchants on board, and customers had no protection if something went wrong.

## Follow the MXN 250: what a card payment really costs

If CoDi didn't take off, cards are what most Mexican shops add first when they move beyond cash. To see why that's both easy and expensive, it helps to meet the companies involved. There are more of them than most people realize.

- The **issuer** is the customer's bank, which gave her the card.
- The **acquirer** is the bank on the merchant's side. It's responsible for the shop's card payments and guarantees the shop gets paid.
- An **aggregator** sits between small shops and the acquirer. Instead of each shop signing a contract with a bank, the aggregator signs up thousands of small businesses under its own agreement. In Mexico, Clip and Mercado Pago are the best-known.
- A **switch** routes the payment between the merchant's side and the customer's bank. Mexico's domestic card payments are mainly routed by two switches, **Prosa** and **E-Global**, owned by the large banks.
- The **card network**, Visa or Mastercard, owns the brand and writes the rules.

Two fees hold this together. The **merchant discount rate** is the percentage the shop pays on each card sale. Part of it goes to the customer's bank as the **interchange fee**, which pays the issuer for things like fraud checks, running the card and, with credit cards, lending the customer money. The rest is shared between the acquirer, the aggregator, the switch and the network.

### One taco order, step by step

Back at the taquería, the customer now taps her debit card on a small **Clip** reader, the kind you see on market stalls across Mexico. She taps, the reader beeps, she gets a receipt by text message.

Behind the scenes, the reader sends the payment to Clip, which passes it to its acquiring bank. The acquirer sends it to a switch, which routes it to the customer's bank (crossing to the other switch if her bank is connected there). Her bank checks her balance, runs fraud checks and approves, and the answer travels back to the reader. Later, the banks settle what they owe each other, the acquirer pays Clip, and Clip pays the taquería, usually after about 24 hours.

Clip charges **3.6% of each sale, plus 16% VAT (IVA) on that fee**:

| | MXN |
| --- | --- |
| Customer pays | 250.00 |
| Clip's fee (3.6%) | 9.00 |
| VAT on the fee (16%) | 1.44 |
| **Taquería receives, the next day** | **239.56** |

Out of Clip's MXN 9, the customer's bank receives the interchange. In Mexico, interchange isn't capped by law; Banxico publishes the current maximums of 1.15% for debit cards (never more than MXN 13.50 per payment) and 1.91% for credit. On this debit payment, that's up to about MXN 2.88. The rest of the MXN 9 is divided among Clip, its bank, the switch and the network, in proportions that aren't public.

One more detail matters for small businesses. A formally registered business can usually recover the VAT it pays on fees. An informal taquería can't. So its real cost is MXN 10.44, about 4.2% of the sale.

### What this means for a small café

A MXN 10 fee doesn't sound like much. Its weight becomes clear over a month.

Take a small café in Guadalajara. The following numbers are **illustrative assumptions**, not data about a real business: the café takes **MXN 50,000 a month in card payments**, the average purchase is MXN 120 (a coffee and a pastry), so it processes about 417 card payments a month, and 70% of them are by debit card, 30% by credit.

Here's what it would pay each month under different options, using list prices from late 2026 and including VAT on the fees:

| Option | What it charges | Monthly cost | Share of card sales |
| --- | --- | --- | --- |
| Clip reader | 3.6% per sale | ≈ MXN 2,090 | ≈ 4.2% |
| Mercado Pago Point reader | 3.5% per sale | ≈ MXN 2,030 | ≈ 4.1% |
| BBVA bank terminal | 2.15% + MXN 0.42 per sale, plus MXN 1,800 in one-off fees spread over two years | ≈ MXN 1,540 | ≈ 3.1% |
| Average rate banks charge restaurants (Banxico, July 2026) | 2.17% debit, 2.53% credit | ≈ MXN 1,320 | ≈ 2.6% |

The gap between Clip and the BBVA terminal is about MXN 550 a month, or roughly MXN 6,600 a year.

To see what that means, add one more assumption. Suppose that after paying for coffee, milk, rent and staff, the café keeps about 10% of sales as profit, before card fees. On MXN 50,000 of card sales, that's about MXN 5,000. With Clip, card fees would absorb around 42% of that profit. With the BBVA terminal, about 31%. Same coffee, same customers, very different outcome.

### Why the smallest businesses tend to pay more

If the bank terminal is cheaper, why do so many small businesses choose an aggregator, and why do the smallest often pay the highest rates? Some reasons are documented; others are more speculative.

**Fixed costs weigh more on small businesses.** A bank terminal comes with a contract, upfront fees (about MXN 1,800 at BBVA) and a monthly charge if the business sells below a minimum. A café selling MXN 50,000 a month on cards can absorb that. A *tiendita* selling MXN 15,000 can't: the fixed costs eat the lower percentage. Aggregators have no contract, minimum or rental, so for the smallest businesses they're often cheaper overall, even at a higher rate.

**List prices aren't what everyone pays.** Banxico publishes the average rates providers actually charge merchants, by type of business. In July 2026, merchants on aggregators paid on average 2.58% on debit and 2.89% on credit, well below the 3.5–3.6% that aggregators advertise. One plausible explanation is that larger merchants negotiate lower rates while the smallest pay list price. Banxico's data don't prove that directly; it's an interpretation, though a reasonable one.

**Informality can raise the fee itself.** Interchange in Mexico varies by type of business. Mexico's former competition authority, COFECE, found in 2023 that businesses that can't prove what kind of business they are end up paying higher interchange, and informal businesses are the most likely to be in that position.

Banxico's figures hold one more surprise. Debit cards cost merchants almost as much as credit cards (for retailers on bank terminals, 2.77% versus 2.94% on average), even though interchange on debit is much lower. You'd expect a much cheaper debit payment for the shop. It isn't, which suggests that lower costs for banks don't automatically reach merchants. COFECE made a related point in 2023, finding that average interchange in Mexico was 1.36%, against about 0.2% in Europe, where interchange is capped by law.

### Easier, not cheaper

None of this means aggregators failed. They transformed card acceptance. At the end of 2024, Mexico had **6.54 million card terminals**, and 70% belonged to aggregators such as Clip and Mercado Pago; banks ran about 21%. Mercado Pago alone reported 1.4 million active readers in mid-2026. Aggregators reached every municipality by removing what kept small businesses away: contracts, minimum sales, terminal rental, slow payouts.

But there's little sign they made acceptance *cheaper*. Their list prices sit above the rates banks charge on average, and Mexico still has only 607 card terminals per 10,000 adults, against 1,390 in Brazil.

**Fintechs made accepting cards easier, not cheaper.** For a business on thin margins, that's a big part of why cash still feels like the better deal. Cash costs nothing to accept and is available immediately, even if it brings other costs: trips to the bank, the risk of theft, errors in counting change.

## Who owns the pipes

To understand why card fees are where they are, recall a framework from the Netherlands episode. Every payment system has three layers: **processing** (moving and settling the money), **rules** (who is responsible for what, and who pays when something goes wrong) and **brand** (the logo customers recognize).

In Mexico, these layers belong to different owners. Visa and Mastercard own the brands and write the card rules; Visa alone accounts for about 61% of credit cards and 64% of debit cards. But much of the processing of domestic card payments runs through the two bank-owned switches: Prosa, owned by Santander, Banorte, Scotiabank, HSBC and Invex, and E-Global, owned by BBVA and Banamex.

Why does ownership matter? Because the banks that own the switches also issue cards and earn interchange. Whoever controls the routing of payments sees competitors' transaction data and can shape the cost of entry for newcomers. Mexico's competition authorities have raised this for years: COFECE issued a preliminary ruling in 2020 that card processing lacked effective competition, and confirmed barriers in 2023.

The issue came to a head with a deal. In December 2023, Visa agreed to buy 51% of Prosa. On 20 February 2026, Mexico's new antitrust authority, the **Comisión Nacional Antimonopolio** (which replaced COFECE in 2025), **blocked it**. Its reasons: the deal would remove an independent processor; Prosa sees transaction data from every card brand, which would have given Visa a view of its rivals' business; and it would endanger Prosa's own domestic card brand, Carnet.

### The fight over fees

Regulators also tried to lower the fees directly. In October 2025, Banxico and the CNBV proposed capping interchange at 0.6% for credit cards and 0.3% for debit, closer to European levels. They withdrew the plan in February 2026 after objections from banks, from fintech card issuers (for whom interchange is an important source of income) and from the US government.

A softer draft followed on 27 August 2026: 1.30% per credit card payment and, for debit, 0.30% with a ceiling of MXN 10.80 per payment, phased in over three years along with annual average limits. It would also require aggregators to pay merchants on the same day they receive the money. Consultation closed on 24 September, and in early November the rule still wasn't final.

What would it mean for our café? Assume its customers' banks currently charge the maximum published interchange, and that every peso of savings reaches the café. In that best case, it would save around **MXN 390 a month**: about MXN 300 on debit sales and MXN 90 on credit.

But both assumptions are generous. The draft doesn't require anyone to pass the savings on, and aggregator prices aren't regulated. A café paying 3.6% to Clip may never see any of it.

There's a geopolitical dimension too. The US government's 2026 report on foreign trade barriers criticized Mexico's first fee proposal and Banxico's proposed rules for the card switches. Who controls the pipes of Mexican payments is no longer only a Mexican question.

## Why cash still wins at the counter

Fees are part of the story, but not all of it: CoDi was free and still failed. Several other forces keep cash strong, and they reinforce each other.

### Accounts arrived, but usage didn't follow

Between 2021 and 2024, the share of adults with at least one formal financial product (an account, card, loan, insurance or pension) rose from 67.8% to **76.5%**, according to ENIF. That sounds like a success, and partly it is. But much of the growth came from accounts people *received*: accounts for collecting government benefits rose from 6.5% to 11.6% of adults, and accounts opened through fintech apps from 2.7% to 10.3%.

The World Bank's Global Findex survey, which asks different questions, gives a more sobering view: in 2025, only **41% of Mexican adults said they had made or received a digital payment**.

Picture a grandmother in rural Oaxaca. Her government pension arrives on a Bienestar card, as it does for almost everyone receiving these benefits (99.3% of 33.9 million recipients between September 2025 and June 2026). On payment day she withdraws all of it at a Banco del Bienestar branch and pays for everything in cash. The survey counts her as financially included. But she isn't a digital payer, because nobody she pays accepts anything else. Only 25.1% of rural adults say cards or transfers are accepted almost everywhere they shop, compared with 56.3% in cities. An account only helps you pay if the people you pay can receive the money.

### Nobody wants to move first

This is the classic chicken-and-egg problem of payments. A shop has no reason to accept cards if customers don't carry them; customers have no reason to carry cards if shops don't accept them.

Mexico has unusually good evidence on how to break it. Between 2009 and 2012, the government gave about a million debit cards to poor families in a benefits program called Prospera. The economist Sean Higgins, in a 2024 paper in the *American Economic Review*, found that corner stores near those families started accepting cards, because suddenly many of their customers had one. Then *other* local consumers, who hadn't received a card from the program, became 21% more likely to start using cards themselves. Wealthier shoppers even moved around 13% of their supermarket spending to the small shops.

The lesson: **acceptance follows a large, simultaneous shift in demand.** When enough customers arrive at once with a new way to pay, shops adapt, and that pulls in more customers. CoDi had the payment system, but never that shift.

### The fear of being seen

For informal businesses, there's another reason to prefer cash: every card payment or transfer leaves a record the tax authority, the SAT, can see.

Mexico has history here. It taxed large cash deposits from 2008 to 2013, banks still report large monthly cash deposits to the SAT, and since 1 April 2026 the SAT has had real-time access to transaction data from digital platforms. In focus groups with small merchants in Mexico City and Guadalajara, researchers at the Center for Effective Global Action heard some owners say they preferred cash because it "leaves fewer traces."

No study measures how much this fear holds back digital payments across Mexico, so its true size is unknown. But it creates a real contradiction: one part of the government pushes merchants toward digital payments, while another makes digital payments easier to tax. For a business on the edge of formality, the first digital payment can feel like the first step toward an audit.

### Fraud, and no way to get your money back

Losing cash and losing money from an account are different risks. A thief can take what's in your wallet. A fraudster who tricks you into sending a transfer, or gets into your banking app, can empty your account.

Fraud complaints are rising sharply. In the first quarter of 2026, the financial consumer protection agency, CONDUSEF, received **1.515 million complaints about possible fraud**, 31.5% more than a year earlier and about three of every four complaints of any kind. Financial institutions refunded **24.3% of the money claimed**. Part of that rise simply reflects more people using digital channels. But the way transfers work matters too.

When you pay by card, the merchant's side "pulls" the money, and card rules let you dispute the payment: you can ask your bank to reverse it, a process called a **chargeback**. A transfer works the other way. You "push" the money yourself, and once it's sent, it's final. There's no chargeback.

This is the **chain of liability** from the Netherlands episode: the rules that decide who absorbs a loss when something goes wrong. With a card, they often protect the customer. With a transfer, the risk sits with whoever pressed "send." Mexico has focused on prevention, with transfer limits customers can set and a crackdown on "mule" accounts that criminals use to receive stolen money. But for someone who has already lost money, there's still no formal path to getting it back. Brazil has built a recovery process for fraudulent Pix transfers, although even there only a small fraction of contested money is returned.

Trust follows from all this: in 2024, almost 40% of adults said their money isn't safe in financial institutions. But trust isn't fixed. A 2021 study in the *Journal of Finance* found that Prospera families who could check their balance cheaply at ATMs came to trust their bank over time and began saving more. People trust what they can see working.

### Money arrives as cash, and goes back to cash

Much of Mexico's money starts its journey as cash. In Banxico's 2025 study, 28% of urban adults said they receive wages in cash. And even money that arrives digitally often turns back into cash, because the next person in the chain won't accept anything else. Mercado Pago says its users make, on average, two cash deposits and **four cash withdrawals** a month. For many households, a digital account is less a replacement for cash than a bridge back to it.

Phones, interestingly, are no longer the main barrier: 86.1% of Mexicans aged six and over used the internet in 2025. But 79.3% of mobile users are on prepaid plans, and when the data runs out, a QR payment or banking app can fail at exactly the wrong moment. Cash always works. It has costs too (in 2025, 12% of urban adults had recently given up a purchase because nobody had change), but for many people they feel smaller and more familiar than the risks of going digital.

## OXXO: the cash toll booth of the digital economy

Nothing shows the two economies meeting more clearly than OXXO, the red-and-yellow convenience store on almost every corner.

With 24,297 stores, OXXO is more than a place to buy snacks. Banks and fintechs use shops like it as agents, where customers can deposit or withdraw cash without visiting a branch. OXXO alone makes up between 41% and 48% of all banking agent locations in Mexico.

### How a cash voucher works

E-commerce depends heavily on this network. Mexicans spent **MXN 941 billion online** in 2025, 19.2% more than the year before, according to the online sales association AMVO. Most online buyers used a debit (69%) or credit card (54%) at least once, but **23% paid at least once with a cash voucher** at a store like OXXO.

Diego, 17, wants sneakers that cost MXN 1,200 from an online store in Guadalajara. He doesn't have a card. At checkout he chooses "pay at OXXO," and the store's payment provider generates a **reference number and barcode**. He shows it at an OXXO and pays the cashier in cash. OXXO confirms the payment to the provider, the provider tells the store, and the store ships the sneakers. The store receives the money days later.

The store pays for this. With Conekta, one of the larger payment providers, an OXXO voucher costs the merchant 2.6% plus a fixed MXN 3, plus VAT: about MXN 40 on Diego's sneakers. Online card payments have a similar structure, typically 3.4–3.6% plus MXN 3–4 per payment. That fixed part matters more than it looks. On a MXN 1,200 purchase, MXN 3 is a quarter of a percentage point. On a MXN 120 purchase, it's two and a half points, which is why small online sales are so expensive to accept.

For the store, vouchers have a clear advantage: once Diego has paid in cash, the payment can't be reversed, so there are no chargebacks. They also have a drawback: many shoppers generate a voucher and never pay, leaving orders hanging and stock reserved for customers who never return. I've written about [how that plays out for a business selling time-limited inventory](/payment-solutions/case-studies/oxxo-pay-cash-vouchers-time-limited-inventory/).

### Why OXXO wins either way

OXXO also earns a fee when people move cash into or out of digital accounts. The digital bank Nu added cash deposits at OXXO in 2025, and Clip has said it wants to grow its own network of cash points from 28,000 to 100,000.

Think about what that means. Every digital wallet that wants customers who are paid in cash needs somewhere for them to deposit it, and that somewhere usually charges. OXXO profits when cash is used and when cash is converted into digital money. Whichever way Mexico moves, the toll booth stays open.

## Remittances: the money crossing the border goes digital

Mexico's largest flow of money from abroad tells the same story from another angle.

A family in Zamora, Michoacán, receives about US$400 a month from a son in California. It pays for food, school and medicine. They're far from unusual: Michoacán received US$5.4 billion in remittances in 2025, equal to 10.5% of the state's economy.

Nationally, remittances reached a record **US$64.7 billion in 2024**, then fell in 2025 for the first time in 11 years, to about US$62 billion. BBVA Research points to fewer new migrants arriving in the US, the most deportations in 12 years, weaker US job growth and a strong peso. The 2026 figures add a detail: from January to August, the value of remittances rose 2.2%, but the number of transfers fell 2.2%, and the average transfer grew from US$391 to US$409. Fewer people are sending money, but each is sending more.

### From cash pickup to bank accounts

How the money arrives is changing fast. Families used to collect remittances in cash at agencies, banks and stores. In 2024, 44.4% were paid directly into accounts instead. In 2025, it was **50.4%: the first time account deposits overtook cash pickup.** In early 2026, 52.7%, according to the Center for Latin American Monetary Studies.

Price is one reason. In 2024, sending money cash-to-cash through a store cost about US$8–12; sending through an app or into a bank account, about US$5.

Two policy changes push the same way. Since **1 January 2026, the United States has charged a 1% tax on remittances paid for with cash**, money orders or cashier's checks; transfers paid from a bank account or card are exempt. On a US$350 cash-funded transfer, that's US$3.50, a big surcharge when a digital transfer costs about US$5 in total. And since 84% of Mexican migrants in the US already have bank accounts, many can avoid it simply by paying differently. Meanwhile, **Directo a México**, the public link run by Banxico and the US Federal Reserve since 2003, takes its last transfers on 20 November 2026 after a drastic fall in use.

### Where stablecoins fit in

Some of the private companies filling the gap use **stablecoins**, digital tokens designed to keep a fixed value against the US dollar. The crypto company Bitso describes the model: a remittance company's dollars are converted into stablecoins, moved across the border on a blockchain, converted into pesos and paid into the family's account through SPEI. The family in Zamora never sees a stablecoin, just pesos arriving.

Bitso says it handled **14.7% of US-to-Mexico remittances** between January and August 2026. That's the company's own figure, and it can't be checked independently, because Banxico doesn't track which systems remittance companies use behind the scenes.

Whatever happens upstream, the journey usually ends the same way: a five-second SPEI transfer into a Mexican account. The system Mexico built in 2004 has quietly become the last step for money arriving from abroad.

## What other countries teach, and what they don't

Mexico is often told to copy Brazil or India. It's worth looking at what each actually did, because some of it could work in Mexico and some depended on conditions Mexico doesn't share.

**Brazil's Pix** launched in November 2020. Like Banxico with SPEI, Brazil's central bank designed it, runs it and writes its rules. The crucial differences were in those rules. Brazil made participation **mandatory for large banks**, so every major bank had to offer Pix, and it let non-banks join, so digital wallets could compete to offer it. Merchants pay a small fee, about 0.22% per payment, compared with 1.1% for debit cards and 2.2% for credit, according to the Bank for International Settlements. That fee is low enough to attract shops but high enough that someone earns money signing them up.

Pix reportedly handled about 80 billion transactions in 2025. And, contrary to many predictions, cards didn't disappear: Brazilian credit card transactions more than doubled between 2020 and 2025. Pix seems to have mostly taken the place of cash, debit card payments and older forms of bank transfer.

**India's UPI**, launched in 2016, took a different route. It lets technology companies like PhonePe and Google Pay build payment apps on a shared system, and charges merchants nothing. It handled 24 billion transactions in September 2026 alone. But zero fees depend on a shrinking government subsidy, two apps now control 79% of the market, and India had two shocks Mexico can't easily recreate: the overnight cancellation of most banknotes in 2016, which forced millions to find alternatives to cash, and a national digital ID that made opening accounts much easier.

**The Netherlands' iDEAL** handles 71% of Dutch online purchases without any regulator requiring it. But three banks serve most Dutch consumers, so agreement was relatively easy, and low informality means few businesses fear being visible. In Mexico, banks earn interchange on cards and have little reason to push a free alternative, and many businesses prefer to stay invisible.

**Colombia's Bre-B** is the closest parallel to what Mexico is doing now. Colombia's central bank launched it fully in October 2025, and a law requires both banks *and* digital wallets to connect. In its first year, Colombians registered 116 million aliases (phone numbers, ID numbers and other easy keys linked to accounts) for 36 million customers. There were launch problems, including money sent to the wrong place and refunds that took weeks. Most revealingly, Colombia's central bank now says technology is no longer what holds Bre-B back; habits, merchant acceptance and fraud are. And 78.6% of Colombian adults still prefer cash.

### The lessons that travel

Put side by side, these experiences suggest five lessons for Mexico:

1. **Require participation, don't just allow it.** Brazil and Colombia didn't leave it to banks to decide whether the new system was worth promoting.
2. **One brand, one QR code, one directory of aliases**, so customers and shops see the same thing everywhere. Mexico today has CoDi, DiMo and each bank's own "transfer" button.
3. **A small merchant fee, below card rates but above zero**, so someone earns money by visiting shops and signing them up. That's exactly what CoDi lacked.
4. **A way to recover money from fraud**, built before the system grows rather than after.
5. **Expect cards and instant payments to grow together**, rather than one replacing the other.

What doesn't transfer easily: a national digital ID used in everyday payments, a sudden shock like India's, a large government subsidy, or the low informality of a country like the Netherlands.

## 14 December 2026: Mexico's bet

Instead of launching a new brand like Pix, Banxico is changing SPEI from the inside, through regulation. Most of the changes are due by **14 December 2026**.

The most visible is **one standard way to pay**. Under a rule called Circular 9/2026, every bank and fintech app must present transfers, CoDi payment requests and DiMo phone payments with the same screens and steps. Paying should feel the same in any app, and typing an 18-digit CLABE will no longer be required.

The second turns **your phone number into an account address**. Banxico has told institutions to link a customer's phone number to their account on request, so people can receive money by sharing a number they already know by heart. The third is technical: a revamped "SPEI 2.0" is due to process transfers in parallel, so a quick transfer doesn't wait behind a slow one.

Separately, on 20 October 2026 the Senate approved a digital payments law, the **Ley de Economía Digital**. It would let Banxico require card terminals to accept QR payments, and let the finance ministry name sectors where digital payment is required. It takes effect once it's published in the official gazette, and the list of sectors comes after that.

### What the plan fixes, and what it doesn't

On paper, this fixes CoDi's technical weaknesses: inconsistent apps, hard-to-type account numbers, no presence at the counter. The 4.6 million aggregator terminals already in shops could start accepting QR payments without new equipment.

But it leaves CoDi's central question unanswered: **who earns money by bringing merchants on board?**

Look at it from an aggregator's side. Clip and Mercado Pago earn around 3.5–3.6% when a customer pays by card. If the same customer pays by free QR transfer on the same terminal, they earn nothing, and may lose a card payment they'd otherwise have processed. Unless someone is paid to promote QR payments, or the law forces them to, the option may sit unused on terminals the way CoDi sat unused in banking apps. And nothing in the December package creates a way to get your money back when a transfer goes wrong.

Colombia's experience suggests what to expect: the technology can be ready on time, while changing the habits of merchants and customers takes years.

### What to watch

Three signals will show which way Mexico is heading. If SPEI overtakes cards in the number of transactions (Banxico has reportedly said this could happen by the end of 2026) and QR payments start appearing on aggregator terminals, Mexico is accelerating. If CoDi and DiMo stay tiny and the fee caps stall, it isn't. And a real transformation would need what Mexico hasn't done yet: one brand that banks and wallets must offer, a small merchant fee that pays someone to sign up shops, and a legal process for recovering money lost to fraud.

## What it means for each player

For a **small merchant**, the cheapest way to accept payments often isn't the one you're using. A café selling MXN 50,000 a month on cards may save thousands of pesos a year by comparing an aggregator with a bank terminal. And receiving transfers directly into your own account can cost little or nothing, depending on your bank, if you can manage the work of matching each payment to a sale.

For **consumers**, transfers are fast and increasingly free, but they carry a risk cards don't: once you send money, it's gone. Until Mexico builds a recovery process, it's worth treating a transfer more like cash than like a card.

For **banks**, the current system works well. Card interchange is a profitable business, and free instant payments threaten it. That's the root of the problem regulators are trying to solve.

For **fintechs and aggregators**, the opportunities lie where the system is weakest: checkout by transfer that automatically matches payments to orders, QR payments on terminals already in shops, protection for buyers who pay by transfer, and cash points that turn into places to pay.

For **policymakers**, Mexico shows that building the system was the easy part. The hard part is designing incentives so that someone profits from bringing merchants along, and giving people enough protection to trust it.

## The rail was never the problem

Mexico challenges the usual explanation for slow digital payments. It has had a central-bank real-time payment system since 2004, and it doesn't lack phones or even accounts. What it lacked was someone paid to bring the merchant along, a way to get money back when a transfer goes wrong, and a tax system that doesn't make the first merchant to go digital feel like the first one to be audited.

SPEI shows that Mexicans switch quickly when the person on the other side already accepts digital payments. CoDi shows that a free system nobody is paid to distribute goes nowhere. So far, the winners are young, urban, formally employed people with bank accounts, and the companies serving them: aggregators, digital banks, BBVA and OXXO. The people left behind are rural households, older adults, informal micro-businesses paying the highest rates, and fraud victims who get back about a quarter of what they claim.

Three questions will decide the next few years. Will aggregators see instant payments as an opportunity or as a threat to their card income? Will the card fee and switch rules be finalized in a form that actually changes the economics, despite pressure from banks and Washington? And will the tax authority's push for visibility slow merchants down faster than Banxico's push for convenience speeds them up?

When I go back to that taquería in Iztapalapa in a year, the question won't be whether Mexico has the technology to pay digitally. It does. The question is whether anyone has made it worth the owner's while.

## What's next

The video version of this episode is coming to the [Payment Systems, Explained playlist](https://www.youtube.com/playlist?list=PLCVWF4_Kwa-Y). For related reading, see [local acquiring in emerging markets](/journal/2026-10-19-local-acquiring-in-emerging-markets-benefits-challenges-and-real-examples/) and [how much a merchant actually keeps from a successful payment](/journal/2026-10-19-the-payment-was-successful-but-how-much-money-did-the-merchant-actually-keep/). If your business sells into Mexico and is working through card acceptance, OXXO, SPEI or local acquiring, see how I work on [payment solutions](/payment-solutions/).

*Figures are the latest available in early November 2026. Where sources disagree, I've used Banxico's own reports. Fees are list prices and change often. The café example uses illustrative assumptions, not data from a real business.*

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
- [Greenberg Traurig: COFECE recommendations on card payment acceptance (2024)](https://www.gtlaw.com/en/insights/2024/01/cofece-emite-recomendaciones-a-los-servicios-de-recepcion-de-pagos-con-tarjeta)
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
