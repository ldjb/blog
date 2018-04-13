---
layout: page
title: Browse posts by tag
---
{% for tag in site.tags %}
{% assign thisTag = tag | first %}
### {{thisTag}}
{% assign thisTagsPosts = site.posts | where_exp: "post", "post.tags contains thisTag" %}
{% for post in thisTagsPosts %}
* [{{post.title}}]({{post.url}}) ({{ post.date | date: "%F" }})
{% endfor %}
{% endfor %}
