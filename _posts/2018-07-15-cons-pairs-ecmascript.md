---
layout: post
title: Cons pairs and lists in ECMAScript using Church encoding
tags: [programming]
excerpt_separator: <!-- more -->
---

One of the really cool things covered by Abelson and Sussman's classic series of lectures, [*Structure and Interpretation of Computer Programs* (SICP)](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-001-structure-and-interpretation-of-computer-programs-spring-2005/), was how fundamental programming constructs could be implemented almost from nothing. This, of course, culminated in the implementation of Scheme within Scheme itself, but it's interesting to look at some of the smaller building blocks.

<!-- more -->

A lot of this relies on [Church encoding](https://en.wikipedia.org/wiki/Church_encoding), with which we can implement one of the most fundamental data structures -- the cons pair:

> cons = λx . λy . λz . z x y  
car = λz . z (λx . λy . x)  
cdr = λz . z (λx . λy . y)

SICP explains how to implement this in Scheme, but ECMAScript (a.k.a JavaScript) is a Lisp (okay, this meme is getting old now), so it's a straightforward translation:

```js
const cons = (x, y) => z => z(x, y);
const car = z => z((x, y) => x);
const cdr = z => z((x, y) => y);
```

Cool, now we can do fun stuff like:

```js
> car(cons("hello", "world"));
"hello"

> cdr(cons("hello", "world"));
"world"
```
{:.console}

Now, how about lists? Well, we need to implement booleans first:

```js
const myTrue = (x, y) => x;
const myFalse = (x, y) => y;
const isFalse = l => l(_ => myFalse, myTrue);
```

`true` and `false` are reserved words in ECMAScript, so I have had to make up my own names for them. And now finally I can create lists by doing something like this:

```js
const list = (...args) => args.reduceRight((x, y) => cons(y, x), myFalse);
```

As you can see, lists are terminated with a `myFalse`. Implementing this without relying on ECMAScript's built-in methods are left as an exercise to the reader.

Let's try creating a list and accessing its members:

```js
> const myList = list(1, 2, 3);
function cons()

> car(myList);
1

> car(cdr(myList));
2

> car(cdr(cdr(myList)));
3
```
{:.console}

And if we want to turn that list back into an ECMAScript-native array? We can implement a function to do that:

```js
const listToArray = (thisList, thisArray=[]) => {
  thisArray.push(car(thisList));
  if (isFalse(cdr(thisList)) == myTrue) {
    return thisArray;}
return listToArray(cdr(thisList), thisArray);}
```

And call it like so:

```js
> const foo = list("s", "u", "c", "c", "e", "s", "s");
undefined

> listToArray(foo);
[ "s", "u", "c", "c", "e", "s", "s" ]
```
{:.console}
