---
layout: page
title: Booklist
permalink: /booklist/
---

This is a page with a list of books I've read.

{% if site.data.books %}
  <ul class="book-list" style="list-style:none;">
  {% for book in site.data.books.items %}
  <li style="display:inline-block; text-align:center; margin:12px;">
    <img src="{{ book.volumeInfo.imageLinks.thumbnail }}" style="box-shadow:0px 2px 6px rgba(0,0,0,.15); height:190px;"/>
    <h4>{{ book.volumeInfo.title }} </h4>
    <p>{{ book.volumeInfo.authors }}</p>
  </li>
  {% endfor %}
  </ul>
{% endif %}