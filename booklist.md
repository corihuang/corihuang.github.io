---
layout: page
title: Booklist
permalink: /booklist/
---

This is a page with a list of books I've read.

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