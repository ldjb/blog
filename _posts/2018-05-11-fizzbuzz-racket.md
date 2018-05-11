---
layout: post
title: FizzBuzz in Racket using pattern matching
tags: [technology, programming]
excerpt_separator: <!-- more -->
---
Today I came across [this satirical take on the FizzBuzz programming test](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) (via [Hacker News](https://news.ycombinator.com/item?id=17043541)). The [FizzBuzz test](http://wiki.c2.com/?FizzBuzzTest) requires you to write a program that will output the positive integers 1 to n (where usually n=100) with certain substitutions, [as in the children's game](https://en.wikipedia.org/wiki/Fizz_buzz). If the number is divisible by 3, the value `Fizz` is provided. If the number is divisible by 5, the value `Buzz` is provided. If the number is divisible by both 3 and 5, the value `FizzBuzz` is provided.

Anyway, it got me thinking about how I would implement FizzBuzz using one of my favourite programming languages -- [Racket](https://racket-lang.org/), a descendant of [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) (itself a dialect of [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))).

<!-- more -->

First off, let's create a function `int->fb` that will simply take in an integer and output the correct response. Depending on its factors, it will either output the integer itself, or one of the symbols `'Fizz`, `'Buzz` or `'FizzBuzz`:

```racket
(define (int->fb int)
  (match (list (= (modulo int 3) 0)
               (= (modulo int 5) 0))
    ['(#t #t) 'FizzBuzz]
    ['(#t #f) 'Fizz]
    ['(#f #t) 'Buzz]
    [_ int]))
```

This uses a technique called [pattern matching](https://docs.racket-lang.org/guide/match.html). We create a list (though a cons pair would also work) with the first item being a boolean indicating whether `int` is a divisible by 3, and the second item being a boolean indicating whether `int` is divisible by 5.

We then determine which pattern the list matches against. If both items in the list are true, we return "FizzBuzz". If only one is true, we return "Fizz" or "Buzz" as appropriate. If neither are true, we return `int` itself. Let's see if it works:

```racket
> (int->fb 6)
'Fizz
> (int->fb 15)
'Buzz
> (int->fb 60)
'FizzBuzz
> (int->fb 64)
64
```

It works! Now we need to find a way to create a list of the first n numbers. We can define a function `fizzbuzz` that does this:

```racket
(define (fizzbuzz n)
  (if (< n 1)
      '()
      (append (fizzbuzz (- n 1))
              (list (int->fb n)))))
```

This takes in the parameter `n`, which is the length of the list to be returned. Although we could use iteration, it is neater to use recursion. Therefore we check to see whether `n` is less than 1. If it is, we return the empty list, otherwise we call the `fizzbuzz` function with `n` reduced by 1, appending the correct substitution for `n` to the returned list.

We can now produce a list of the first 100 numbers:

```racket
> (fizzbuzz 100)
(1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz)
```

### Bonus: FizzBuzz in ECMAScript using "pattern matching"

If [~~JavaScript~~ ECMAScript is a Lisp](https://www.crockford.com/javascript/javascript.html), and Racket is a Scheme is a Lisp, then it should be relatively straightforward to port my Racket implementation to ECMAScript, right? Here's my attempt:

```js
let int2fb = int => {
  switch ([int % 3 === 0, int % 5 === 0].toString()) {
    case "true,true": return "FizzBuzz";
    case "true,false": return "Fizz";
    case "false,true": return "Buzz";
    default: return int;}}

let fizzbuzz = n => {
  if (n < 1) {
    return [];}
  else {
    let arrRecursed = fizzbuzz(n - 1);
    arrRecursed.push(int2fb(n));
    return arrRecursed;}}
```

Okay, so ECMAScript doesn't really have an equivalent to Racket's `match` construct, but we can do something similar by converting an array to a string and comparing the result with other strings. And `Array.prototype.push` returns the length of the array rather than the array itself for some bizarre reason, which makes a bit of a mess. But hey, it works:

```js
> fizzbuzz(100)
[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"]
```
