// Initializing variables for later
const fetch = require("node-fetch");
var book_url;
var imageLink;
var i=0;

// Populating list of ISBN numbers
var isbnslist = [
  "9780062678102",
  "0988262592",
  "9780374261597"
];

// for ( i = 0; i < isbns.length; i++)
//     {
//       isbnslist.push(String(isbns[i].isbn));
//     }

const url = isbnslist.reduce(
  (res, isbnslist, index) => res + (index ? "+OR+" : "") + "isbn:" + isbnslist,
  "https://www.googleapis.com/books/v1/volumes?q="
)

book_url = url + "+&fields=items(volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks/thumbnail,volumeInfo/industryIdentifiers/identifier)+&maxResults=40"

console.log(book_url)

fetch(book_url)
  .then(res => res.json())
  .then(data => console.log(data))
// .then(res => res.json())
// .then((out) => {
/** for (i=0; i < data.items.lengths; i++) {
 *   } */
//   for (i=0; i < out.items.length; i++) {
//     document.getElementById("grid-container").innerHTML += "<div class='grid-item'> <a rel='nofollow' target='_blank' href='https://www.google.com/search?q=" + out.items[i].volumeInfo.title.replace(/ /g, "+") + "+by+" + out.items[i].volumeInfo.authors[0].replace(/ /g, "+") + "><div><img alt='" + out.items[i].volumeInfo.title + "' book cover' src='" + out.items[i].volumeInfo.imageLinks.thumbnail.replace('&edge=curl','') + "> </div></a> <div> <h3><a rel='nofollow' target='_blank' href='https://www.google.com/search?q=" + out.items[i].volumeInfo.title.replace(/ /g, '+') + "+by+" + out.items[i].volumeInfo.authors[0].replace(/ /g, '+') + ">" + out.items[i].volumeInfo.title + "</a></h3> <p class='item>by " + out.items[i].volumeInfo.authors[0] + "</p> </div> </div>";
// }

/*
  Title: out.items[0].volumeInfo.title
  Author: out.items[0].volumeInfo.authors[0]
  Thumbnail: out.items[0].volumeInfo.imageLinks.thumbnail
  Description: out.items[0].volumeInfo.description
*/

  // i=0
  // var loadedBooks = []
  // while (i < Object.keys(out.items).length){
  //   if (out.items[i].volumeInfo.industryIdentifiers[0].identifier.length > 10){
  //     loadedBooks.push(out.items[i].volumeInfo.industryIdentifiers[0].identifier)
  //   } else {
  //     loadedBooks.push(out.items[i].volumeInfo.industryIdentifiers[1].identifier)
  //   }
  //   i++;
  // }

  // Array.prototype.diff = function(a) {
  //   if (this.filter(function(i) {return a.indexOf(i) < 0;}).length !== 0){
  //     console.log(this.filter(function(i) {return a.indexOf(i) < 0;}))
  //   }else{
  //     return "All books indexed";
  //   }
  // };

  // console.log(isbnslist.diff(loadedBooks))
// })
 .catch(err => { console.log(isbns); throw err });