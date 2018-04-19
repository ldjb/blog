---
layout: post
title: <i>Umineko</i> solution website reimplemented in Markdown and Jekyll
tags: [books, visual novels, technology]
excerpt_separator: <!-- more -->
---
Back in 2014, I created a website to host a friend's solutions to one of my all-time favourite mystery novels, Ryukishi07's _Umineko no Naku Koro ni_.

The original solutions came in plain text, which I wanted to apply formatting to. Not realising there were existing solutions for it, I formatted the files with my own custom tags, and wrote a parser in PHP that would read the files and output the web pages.

The result was acceptable, though not everything was automated, so the process was a little tedious.

Four years later, I am now rather a fan of Markdown and Jekyll, which power this blog. These technologies can make creating static websites a real breeze. I decided to use my newfound knowledge about them to create an improved version of the website I had created before.

<!-- more -->

Converting the formatted text files into Markdown was a simple matter of running straightforward substitutions. I then created a template that would be applied to each Markdown file, to render them as a web page.

One aspect I had to get a little creative with was how to represent red text. _Umineko no Naku Koro ni_ frequently makes use of red text to indicate statements the author has guaranteed can be taken as fact (this solves the problem a lot of mystery novels have where the possibility of an unreliable narrator makes it impossible to tell what the true facts of the case are). Of course, the solution website needed to use red text to quote these important statements too.

Markdown does not have native support for coloured text. kramdown (the Markdown converter used by Jekyll) supports the addition of classes to block elements, however I needed to do inline styling. I could have used pure HTML, but I did not fancy typing `<span class="red">foo</span>` whenever I wanted to insert red text. I decided instead to hijack the emphasis style (which I didn't need) instead.

In Markdown, when you place asterisks around a piece of text, it is emphasised. `*foo*` in Markdown becomes `<em>foo</em>` in HTML, which appears as: *foo*. Most browsers render this in italics.

In [my Jekyll template](https://github.com/ldjb/uminekosolution/blob/master/_layouts/default.html), I used the following for the content placeholder:

{% raw %}
```liquid
{{content
|replace: '<em>', '<span class="red">'
|replace: '</em>', '</span>'}}
```
{% endraw %}

This meant that `*foo*` in Markdown would become `<span class="red">foo</span>` in HTML, would would be displayed on the web page as: <span style="color: red;">foo</span>. I, of course, had to use CSS to style the `red` class to use red text:

```css
.red {
  color: red;
}
```

With that done, it was a simple matter of comitting my changes to a GitHub repository, and making the site available through GitHub Pages.

As a result of this exercise, the website is now easier to maintain, and I have had some useful practice with Jekyll at the same time.

* [*Umineko* solution website](https://ldjb.github.io/uminekosolution/)
* [GitHub repo](https://github.com/ldjb/uminekosolution)
