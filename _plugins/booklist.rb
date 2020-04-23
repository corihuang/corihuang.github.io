# Generate book list data
require 'net/http'

module GetBooks
  class Generator
    def generate(site)

        # Book data file location
        dataLocation = "./_data/books.json"

        # Raw list of books by ISBN
        isbnList = [
        "9780062678102",
        "0988262592",
        "9780374261597",
        "9780316229296"
        ]

        book_url = "https://www.googleapis.com/books/v1/volumes?q="

        isbnList.each do |isbn|
        book_url += "isbn:" + isbn + "+OR+"
        end

        book_url += "+&fields=items(volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks/thumbnail,volumeInfo/industryIdentifiers/identifier)+&maxResults=40"

        puts book_url

        uri = URI(book_url)
        response = Net::HTTP.get(uri)

        file = File.open(dataLocation, "w")
        file.puts response
        file.close
    end
  end
end