---
layout: post
title: "Updated: Adding custom amounts to your Steam Wallet"
tags: [gaming]
excerpt_separator: <!-- more -->
redirect_from:
  - /post/123200480682/adding-custom-amounts-to-your-steam-wallet
  - /post/123200480682/adding-custom-amounts-to-your-steam-wallet/embed
---

![Screenshot showing the process of adding funds to a Steam Wallet](/images/steam-wallet.png)

*This post was originally written in 2015, but has been revised to reflect changes to the Steam service.*

PC game distribution service Steam allows users to purchase funds for their ‘Steam Wallet’ which can then be used to buy games and in-game content.

That can be done on [this webpage](https://store.steampowered.com/steamaccount/addfunds). It’s great if you want to add £4, £10, £25, £50 or £100 to your account, but what if for some reason you wanted to add an amount that’s not listed? Is this possible?

The answer is, of course, yes! But it requires a little trickery:

<!-- more -->

On the ‘Add funds to your Steam Wallet’ webpage, enter the following into your web browser's address bar:

```js
javascript:submitAddFunds({dataset:{amount:401,currency:"GBP"}});
```
{:.console}

You can replace `401` with the amount you want to add in pence. `401` means £4.01. If you wish to use a different currency, replace `GBP` with the currency's [ISO 4217 code](https://www.iso.org/iso-4217-currency-codes.html).

Pressing the Return key will direct you to pay for your funds.

Note that when they say £4.00 is the “minimum fund level”, they’re not kidding! It’s unfortunately not possible to add less than this amount, even with this method. There also appears to be an upper limit somewhere between £300 and £400.
