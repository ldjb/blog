---
layout: post
title: Hello, Jekyll Now!
excerpt_separator: <div id="more"></div>
---

*This is an updated version of a previously published post.*

Once again, I am attempting to write a blog. I've attempted to do so several times before, with varying degrees of success. Here are some of the services I've tried, what they did well, and what I didn't like about them.

<div id="more"></div>

### Wordpress

This seems quite good initially. It's free software (both as in freedom as well as beer) you can use on pretty much any web host that supports PHP and a MySQL database. It's very customisable, so you can get your blog just how you like it.

However, in my experience, it's far from lightweight, meaning you need a fairly beefy server if you don't want your blog loading slow enough for it to be slightly annoying. There are ways you can speed things up, but that only helps so much.

A semi-official commercial blog hosting service is available at Wordpress.com, which is decent if you just want somewhere to write a blog, but a lot of features require payment and can be rather expensive.

### Tumblr

This is a completely centralised service with no self-hosting option (although you are able to use your own domain name for free). It's relatively simple to use, but perhaps too simple. The formatting you can apply to blog posts are very limited (you can't set text colour, for example), so you are very much constrained by the numerous limitations of the system.

Also, it seems more like a social network than a blogging platform. Whilst you can use it to write an ordinary blog, that seems to be far from the norm. One useful feature of Tumblr is you can quickly and easily reblog other people's posts. This feature is so useful that the vast majority of posts on Tumblr appear to be reblogs.

I initially thought reblogs were great because I could reblog other people's posts and share my thoughts on the matter. But whilst the system supports it, if you attempt to do so, you'll soon face the wrath of an angry mob who insist that this is not the proper etiquette. Apparently one must not share one's views underneath a reblog in the main section. Instead, one may do so in the post's tags, which I'm fairly certain was not designed for this purpose.

And whilst I couldn't care less what those people think, it did spur me to find a better alternative to Tumblr.

### Medium

Like Tumblr, this is a centralised service with no self-hosted option. However, it's focused more on writing than on community. However, there is functionality to quite easily respond to other people's posts. Formatting options are also very limited, and the design of your blog is very constrained. But that doesn't really matter if you simply want to focus on your writing.

On the downside, although you used to be able to use a custom domain name, this is no longer possible. Also, the platform seems to be designed more for articles, rather than as a diary. I want a platform that can be used for all manner of different posts, from longer ones to just a few thoughts. So I didn't find Medium to be completely suitable.

### Ghost

This seems like decent software for running a blog. A hosted service is available for a fee, but aside from a free trial, there is no free tier. It is possible to self-host this software, and though I attempted to do so, it seemed like quite an involved process. Also, this seems to be primarily designed for journalism, not for diaries.

### Mastodon

I absolutely love this software. It's more of an alternative to Twitter than a fully fledged blogging platform, but what it does, it does very well. I had an instance set up for a while, but due to its rapid development cycle, I had to frequently update the software. I ultimately could not justify the time required to maintain the server. But I would like to use Mastodon again in the future, so long as someone else is hosting it for me.

### GitHub Gist

Someone suggested I use GitHub Gist as a blog. I am a frequent user of GitHub Gist, and it's a great service. It's similar to other pastebin websites, but is designed with code in mind, although it does support Markdown. But my use of this service is the very reason why it is unsuitable for me to use it as a blog. Unless I were to create a brand new GitHub account, my blog posts would be mixed up with all my other Gists. There are third-party services that enable you to use GitHub Gist to host blog posts, but you have to access the blog through the third-party service. Also, they don't seem to work too well, from what I can tell.

### My own software

I tried making my own blogging software. How hard can it be, I thought. Well, much harder than I imagined, in fact. Unless you write your blog posts in HTML (and I certainly don't want to have to do that), you need to use some other markup and convert to HTML or have some sort of WYSIWYG interface. You also have to figure out how to handle image uploads, storage and so on. There are just so many different things involved in blogging software. None of them are exactly complicated, but the sheer quantity of things to consider makes it a fair amount of work. Work that requires time. Time I didn't have.

### Livedoor

I recently tried using a popular Japanese blogging service called Livedoor. It did a lot of the things I was looking for, but there were two main problems:

* By default, blogs on this platform do not use responsive web design. Therefore, blogs look and behave differently depending on whether the user is using a desktop PC or a smartphone. Some usability issues were pointed out to me about the default mobile theme, and whilst it might be possible to adjust some things, I would rather the blog have a clean design right out of the box so I do not have to go to excessive lengths to get something I feel is acceptable.

* Since it's a Japanese blogging service, the user interface is entirely in Japanese. Although this is not a problem for me, I have to consider the readers, the majority of which probably don't know Japanese. Due to the language barrier, there is a high probability that visitors would have difficulty navigating the blog.

### What I want from a blogging platform

Having used a number of different blogging platform, I considered what I actually want from one:

* Hosted – though I'd ideally like to host it myself, I know I just don't have the time to maintain a live server in my free time, worry about uptime and so on. So I want someone else to host my blog.
* Easy to use – I don't want to spend a lot of time configuring my blog…
* Customisable – …but I'd like to be able to make my blog feel like it's mine.
* Custom domain name – it's my blog, so it should be served from a domain I control.
* Easy export – if I ever want to leave the service, I want to be able to take my content with me, without resorting to scraping my own blog.
* No community woes – I don't want the existing community to have a go at me because I'm not using the service the way they'd like me to.
* Clean design - the blog should look good right out of the box.
* Does not require knowledge of non-English languages - I don't want to make things difficult for visitors.

After sharing these requirements with a friend, he suggested I try [Jekyll Now](https://www.jekyllnow.com/). I had tried using Jekyll before, but had found it a tad complicated, but Jekyll Now seems like a good way to quickly get a blog up and running, which can then be customised further. Jekyll Now is what is powering this blog, and I've been quite impressed with it so far. I have made some adjustments to the code, and I love how easy it is to make things feel the way you want them to.

There are, however, two slight concerns I have at the moment:

* There does not seem to be an easy way to compress or reduce the size of images I want to include in blog posts. Therefore, if I want to use an image that has a large file size, I would likely have to manually adjust the image before uploading it to the GitHub repo.

* Lack of pagination – It seems that the front page will list every single blog post, which could mean a very long front page if I write enough posts. Jekyll does seem to have some sort of pagination feature, so that might be something I'll look into.

These are only minor concerns, however, and are things I might be able to address at a later time. At this time, however, I look forward to blogging using Jekyll Now.

### This blog… what is it?

Like all my previous endeavours, this will simply be a place where I'll post whatever comes to mind. I might write about a topic that's of interest to me, or I might simply post a link to an interesting website I found. I don't really use social media anymore, so this will hopefully take the place of that.

There have been times when I've tended to write lengthy pieces of writing but only shared them with a small number of friends. I aim to post such pieces of writing here from now on.

I won't spend a lot of time thinking about *how* to present what I want to say. I mostly just want to get my thoughts down. After all, this blog is actually primarily for me. But if you take interest in anything I have to say, then you're more than welcome here.

Anyway, until next time~
