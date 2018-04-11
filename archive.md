---
layout: default
---

{% for post in site.posts %}
* [{ post.title }}]({{ site.baseurl }}{{ post.url }}) ({ post.date | date: "%A %-d %B %Y" }})
{% endfor %}
