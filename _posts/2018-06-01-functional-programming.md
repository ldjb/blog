---
layout: post
title: If you know GCSE Maths, you know functional programming!
tags: [programming]
excerpt_separator: <!-- more -->
---

It took me an unbelievably long time to grasp functional programming. In the lectures I took, it was described in terms of lambda calculus with lots of weird mathematical symbols that didn't make sense to me.

However, little did I know that I had already learnt functional programming back in GCSE Maths, without even knowing it!

<!-- more -->

On the BBC Bitesize website, there is [information on using algebraic formulae with function notation](https://www.bbc.com/education/guides/z36vcj6/revision/6) [^0].

[^0]: The linked page is for the Edexcel exam board, but there are similar pages for [AQA](https://www.bbc.com/education/guides/zqpfcj6/revision/6) and [Eduqas](https://www.bbc.com/education/guides/z8cqpbk/revision/6).

As you can see, you can define a formula like:

> f(x) = x + 1

This lets you substitute x with any number. For example, x=3:

> f(3) = 3 + 1 = 4

Actually, this works exactly the same way when doing functional programming. For example, I can create a function in Python with the same functionality, which we invoke like so:

```py
> f(3)
4

> f(5)
6

> f(-2)
-1
```
{:.console}

Defining this function is different from how we do it in maths, but it's relatively intuitive:

```py
def f(x):
  return x + 1
```

Isn't this like just any other Python function? Why, yes it is. But the key thing is that the functions in functional programming have no side-effects. We take the parameters, transform them in some way, then return the result, without modifying any external variable. As such, whenever we call the function with the same arguments, we should expect to always receive the same result.

So, how do we do this in Lisp/Scheme/Racket? It's actually quite similar. But note that these languages use prefix notation -- not infix -- so there is a different syntax for calling functions.

Instead of `f(x)`, we write `(f x)`. Really, all we've done is brought the `f` inside the brackets, and added a space to separate it from the `x`. So, to define the same function as before:

```racket
(define (f x)
  (+ x 1))
```

You'll notice that `+` is also a function that accepts multiple arguments.

So now we can call the function like so:

```racket
> (f 3)
4

> (f 5)
6

> (f -2)
-1
```
{:.console}

And that's functional programming in a nutshell! That wasn't so bad, was it? Now, let's solve some of the problems given on the BBC Bitesize page using Racket:

> f(x) = 3x + 2 and g(x) = x<sup>2</sup> - 1  
Find f(-2) and g(3)

```racket
(define (f x)
  (+ (* 3 x) 2))

(define (g x)
  (- (expt x 2) 1))
```

```racket
> (f -2)
-4

> (g 3)
8
```
{:.console}

> f(x) = 2x + 3 and g(x) = x<sup>2</sup>  
Find fg(4), gf(4) and ff(4)

```racket
(define (f x)
  (+ (* 2 x) 3))

(define (g x)
  (expt x 2))
```

```racket
> (f (g 4))
35

> (g (f 4))
121

> (f (f 4))
25
```
{:.console}

Piece of cake. :-)
