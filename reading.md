---
layout: page
title: Reading List
permalink: /reading/
---

These are some of the books and written content that I find enjoyable and have influenced the way I think.

{% if site.data.books %}
  <ul class="book-list">
  {% for book in site.data.books.items %}
  <li>
    <img src="{{ book.volumeInfo.imageLinks.thumbnail }}" />
    <h4>{{ book.volumeInfo.title }} </h4>
    <p>{{ book.volumeInfo.authors }}</p>
  </li>
  {% endfor %}
  </ul>
{% endif %}