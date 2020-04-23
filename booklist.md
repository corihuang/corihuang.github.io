---
layout: page
title: Booklist
permalink: /booklist/
---

This is a page with a list of books I've read.

{% if site.data.books %}
  {% for book in site.data.books.items %}
  <p>Book</p>
  {% endfor %}
{% endif %}