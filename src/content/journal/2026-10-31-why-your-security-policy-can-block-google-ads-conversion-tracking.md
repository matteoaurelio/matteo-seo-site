---
title: "Why Your Security Policy Can Block Google Ads Conversion Tracking"
description: A Content Security Policy protects your site from malicious scripts, but it can also silently block Google Ads conversions. Here is why, including img-src, and how to fix it.
pubDate: 2026-10-31
tags:
  - cybersecurity
  - Content Security Policy
  - Google Ads
  - conversion tracking
  - analytics
draft: true
---
I recently worked with a client whose Google Ads conversion tracking only worked after their developers added several Google domains to the website's security settings. The marketing team heard "we need to whitelist some domains" and understandably asked: what does a security setting have to do with counting sales?

Quite a lot, it turns out. The setting is called a **Content Security Policy**, and it decides which outside services are allowed to run on your website, including Google Ads. This article explains what it is, why it exists, and why one tag can need so many domains. New terms are explained in the [cybersecurity glossary](/cybersecurity/glossary/#content-security-policy).

## What a Content Security Policy is

Think of a nightclub with a guest list. The bouncer does not judge anyone. If your name is on the list, you get in. If it is not, you do not.

A **Content Security Policy (CSP)** is that guest list for your website. Your server sends it to the browser together with every page, as a header called `Content-Security-Policy`. The browser then refuses to load anything that is not on the list: scripts, images, fonts, frames and background connections.

A simple policy looks like this:

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com;
  img-src 'self'
```

Each line is a **directive**, a rule for one type of resource:

- `default-src 'self'` means: by default, only load things from our own domain.
- `script-src` means: JavaScript may come from our own domain and from Google Tag Manager.
- `img-src 'self'` means: images may only come from our own domain.

That last line looks harmless. Most companies host their own images, so why allow anyone else? Keep it in mind, because it is the line that most often breaks conversion tracking.

## Why websites use one

A CSP exists to stop **cross-site scripting (XSS)**: an attacker finds a way to run their own JavaScript on your website. On a checkout page, that script can copy card numbers as customers type them and send them to the attacker's server. This is called online payment skimming, and I wrote about it in [the hidden costs and security risks behind an online checkout](/journal/2026-10-17-the-hidden-costs-and-security-risks-behind-an-online-checkout/).

With a strict CSP, the browser refuses to load the attacker's script because its domain is not on the list. Even if a malicious script does run, the browser refuses to send data to a domain that is not allowed. That is why security teams like strict policies, and why payment and compliance reviews often ask for one.

The problem is that the browser cannot tell an attacker's script from Google's. Both are code from another domain. If Google is not on the list, Google is blocked too.

## Why Google Ads needs several domains

Recording one conversion is not one request. When a customer lands on your thank-you page, the browser does several different things, and each one is checked against a different directive:

| Step | What the browser does | Directive that must allow it | Example Google domains |
|---|---|---|---|
| 1 | Downloads the Google tag script | `script-src` | `www.googletagmanager.com`, `www.googleadservices.com` |
| 2 | Sends the conversion as an image request | `img-src` | `googleads.g.doubleclick.net`, `www.google.com` |
| 3 | Sends data in the background | `connect-src` | `www.google.com`, `pagead2.googlesyndication.com` |
| 4 | Loads a hidden helper frame for some features | `frame-src` | `www.googletagmanager.com` |

If any one of these is blocked, part of the measurement breaks. Google's own CSP guide lists the domains needed for each product: Google Ads conversions and remarketing, Google Analytics, Floodlight and Merchant Center ([Google for Developers](https://developers.google.com/tag-platform/security/guides/csp)). Each product brings its own list, so a site that runs several of them can end up allowing quite a few domains. That is exactly what happened with my client.

### Why img-src matters so much

The oldest and most reliable way to send data to another website is to ask the browser to load an image. The "image" is a single invisible pixel. The interesting part is its web address, which carries the data. A simplified example:

```
https://www.google.com/pagead/1p-conversion/123456789/?value=89.00&currency=EUR&click_id=...
```

The browser loads the image, and in doing so it delivers the conversion ID, the order value and the click ID (Google calls it the `gclid`) that links the sale to the ad. This is a **tracking pixel**, and Google Ads, Meta, LinkedIn and most other ad platforms use them.

Browsers load images from anywhere by default, which is why pixels work so well. But a CSP changes that. The `img-src` directive covers every image request, visible or not ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src)). If `img-src` only allows your own domain, the browser refuses to load Google's pixel. And if there is no `img-src` at all, the browser falls back to `default-src`, so a strict `default-src 'self'` blocks the pixel just the same.

Here is why this is so easy to miss: **nothing on the page looks broken.** A blocked product photo leaves an empty box that someone would notice. A blocked pixel was invisible anyway. The checkout works, the customer is happy, and the only symptom is a conversion report that slowly stops matching your orders.

### Why google.nl, google.es and the others

Google's tags can send requests to Google's country domain for the visitor, such as google.nl or google.es, not only google.com. You might expect to allow them all at once with something like `google.*`, but a CSP does not allow a wildcard at the end of a domain name. You can write `*.google.com` to cover subdomains, but each country domain has to be listed one by one. Google's guide calls this out explicitly ([Google for Developers](https://developers.google.com/tag-platform/security/guides/csp)). If you advertise in five countries, that can mean five more lines.

## How to tell if your CSP is blocking conversions

- **Timing.** Conversions drop right after a website release, a new hosting or CDN setup, or a security review, while orders in your shop system stay the same.
- **Tag Assistant.** Open your site in Google Tag Assistant. If the policy blocks a resource, a CSP issue appears under Page issues, with a list of the blocked resources ([Google for Developers](https://developers.google.com/tag-platform/security/guides/csp)).
- **The browser console.** Open your thank-you page, then press F12 (Cmd + Option + I on a Mac) and look at the Console tab. A blocked pixel shows a message like: *Refused to load the image '…google.com…' because it violates the following Content Security Policy directive: "img-src 'self'"*.
- **Compare numbers.** Match the orders in your back end with the conversions in Google Ads for the same days. A gap that started on a specific date is a strong clue.

## How to fix it without weakening security

The lazy fix is to allow everything, for example `img-src *` or `script-src https:`. That brings tracking back, but it also lets the attacker's domain in again. A better approach:

1. **List the tags you actually run.** Google Ads conversions, remarketing, GA4, Floodlight, Merchant Center, Meta, LinkedIn and so on.
2. **Copy each tag's domains from the official source.** Google's list changes over time, so use their CSP guide rather than an old blog post. This article included.
3. **Add each domain only to the directive that needs it.** A pixel domain belongs in `img-src`, not in `script-src`.
4. **Use a nonce for the inline tag snippet.** The Google Tag Manager snippet is a small inline script. Instead of allowing all inline scripts with `'unsafe-inline'`, Google recommends a **nonce**: a random value the server creates for every page and adds both to the policy and to the snippet.
5. **Test in report-only mode first.** Send the new policy as `Content-Security-Policy-Report-Only`. The browser reports what it would block but blocks nothing, so you can fix the list before customers are affected ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only)).
6. **Add CSP to the marketing launch checklist.** Every new pixel or tool brings new domains. "Did we update the CSP?" belongs next to "Did we test the conversion?".

## What a working policy can look like

This is an illustration for a shop that runs GA4 and Google Ads in the Netherlands and Spain. Check the current list in Google's guide before you copy anything. It is spread over several lines here to make it readable. In the real header, everything sits on one line.

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-RANDOM_VALUE_PER_PAGE'
    https://www.googletagmanager.com
    https://www.googleadservices.com
    https://www.google.com;
  img-src 'self'
    https://www.googletagmanager.com
    https://www.googleadservices.com
    https://*.google-analytics.com
    https://googleads.g.doubleclick.net
    https://*.g.doubleclick.net
    https://pagead2.googlesyndication.com
    https://www.google.com
    https://www.google.nl
    https://www.google.es;
  connect-src 'self'
    https://www.googletagmanager.com
    https://*.google-analytics.com
    https://*.analytics.google.com
    https://*.g.doubleclick.net
    https://www.googleadservices.com
    https://ad.doubleclick.net
    https://www.google.com
    https://www.google.nl
    https://www.google.es
    https://pagead2.googlesyndication.com;
  frame-src https://www.googletagmanager.com;
```

Notice how short the list of your own sources is, and how long Google's is. That is normal. It is also why security and marketing teams need to talk before a policy goes live, not after the numbers drop.

## The takeaway

A Content Security Policy and conversion tracking want the same thing: only trusted code should run on your website. They just disagree about who is trusted until someone writes it down. When a developer says "we need to whitelist some Google domains", they are not asking for a favour. They are adding Google to the guest list so the browser lets your measurement in, while still keeping attackers out.

## Sources

- [Use a Content Security Policy with the Google tag and Tag Manager](https://developers.google.com/tag-platform/security/guides/csp), Google for Developers
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), MDN Web Docs
- [CSP: img-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src), MDN Web Docs
- [Content-Security-Policy-Report-Only](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only), MDN Web Docs
- [img-src](https://next.centralcsp.com/en/docs/web-security/policies/content-security-policy/directives/img-src), CentralCSP
