# Generate book list data
require 'net/http'

dataLocation = "./_data/books.json"

# Raw list of books by ISBN
isbnList = [
  "9780062678102",
  "0988262592",
  "9780374261597",
  "9780316229296",
  "9780316229289"
]

book_url = "https://www.googleapis.com/books/v1/volumes?q="

isbnList.each do |isbn|
  book_url += "isbn:" + isbn + "+OR+"
end

book_url = book_url.chomp("+OR+")

book_url += "+&fields=items(volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks/thumbnail,volumeInfo/industryIdentifiers/identifier)+&maxResults=40"

uri = URI(book_url)
response = Net::HTTP.get(uri)

file = File.new(dataLocation, "w")
file.write(response)
file.close

puts "Generating book data"