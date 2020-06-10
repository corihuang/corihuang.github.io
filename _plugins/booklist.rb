# Generate book list data
require 'net/http'

dataLocation = "./_data/books.json"

# Raw list of books by ISBN
isbnList = [
  "0988262592",
  "9780374717117",
  "0316229253",
  "9781429969352",
  "0571225381",
  "0060959479",
  "9780785764038",
  "9780191606717",
  "9781466853447",
  "9781455586660",
  "9780812981605",
  "9781101947326",
  "9781583228036",
  "9780735216112",
  "9780316229302",
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

puts "\t Reading list: \t Generating book data"