---
layout: post
title: Constants can change!
tags: [programming]
excerpt_separator: <!-- more -->
---

## Constants can change!
A common misconception I've noticed amongst fellow programmers is the idea that constants can never be modified. Whilst it is true that a constant's value may never change *during runtime*, it may certainly be appropriate for a programmer to modify it *in the source code*.

<!-- more -->

Consider the following JavaScript for calculating a product's price *before* value-added tax (VAT) is applied, given its price *after* it has been applied:
```js
const VAT_PERCENT = 17.5;
let calcBasePrice = sellingPrice => sellingPrice / (1 + VAT_PERCENT / 100);
```

Now suppose a recession occurs and the Chancellor of the Exchequer decides to reduce VAT from 17.5% to 15%. Well in that case, we can simply change the first line of code to:
```js
const VAT_PERCENT = 15;
```

Since we've changed the value of `VAT_PERCENT`, why not just make it a variable? Well, let's see what happens if we do. Oh, and let's create a new function whilst we're at it to calculate the VAT:
```js
var VAT_PERCENT = 15;
let calcBasePrice = sellingPrice => sellingPrice / (1 + VAT_PERCENT / 100);

var VAT_PERCENT = 15;
let calcVAT = sellingPrice => sellingPrice * (1 - 1 / (1 + VAT_PERCENT / 100));
```

Well, whoever wrote the above code is clearly not the best programmer. They've accidentally re-declared the `VAT_PERCENT` variable, and the `calcVAT` function is a bit overly complex. Still, the code works. That's the important part, right?

Now suppose the Chancellor of the Exchequer decides to increase VAT from 15% to 20%. The programmer updates the code:
```js
var VAT_PERCENT = 20;
let calcBasePrice = sellingPrice => sellingPrice / (1 + VAT_PERCENT / 100);

var VAT_PERCENT = 15;
let calcVAT = sellingPrice => sellingPrice * (1 - 1 / (1 + VAT_PERCENT / 100));
```

Oh no! The programmer has updated the first declaration of `VAT_PERCENT`, but hasn't noticed that `VAT_PERCENT` was declared a second time.

This is why constants are so useful. Once you've declared and assigned them, they cannot be re-declared or re-assigned.

So why not use these named constants all the time? Why not do:
```js
const NINETY_NINE = 99;
const ONE = 1;
for (var i = NINETY_NINE; i >= ONE; --i) {
  console.log(i + " bottles of beer on the wall,");
  console.log(i + " bottles of beer.");
  console.log("Take one down, pass it around,");
  console.log(i-1 + " bottles of beer on the wall.");
}
```

That certainly works, but there is no point in declaring a named constant for the number three. Unlike VAT which is subject to change, the number ninety-nine will always have the value `99`, and the number one will always have the value `1`. Therefore it is perfectly legitimate to use a literal constant for this purpose.

In summary:
* Use **variables** for things that change *during runtime*.
* Use **named constants** for things that are subject to change *external to the program* (or for convenience/legibility, e.g. π).
* Use **literal constants** for things that will absolutely never change (unless giving it a name is more convenient/legible).
