"use_strict";

function Book(name, topic, pages, isbnNum) {
  this.name = name;
  this.topic = topic;
  this.pages = pages;
  this.isbnNum = isbnNum;

  this.getBookInfo = function () {
    const bookinfo =
      "Book: " +
      this.name +
      "\nTopic: " +
      this.topic +
      "\nPages: " +
      this.pages +
      "\nISBN: " +
      this.isbnNum;
    return bookinfo;
  };
}

function addBooks() {
  const booksToAdd = prompt("How many books to add");
  for (let i = 0; i < booksToAdd; i++) {
    const titel = prompt("Select a new book title");
    const subject = prompt("Select topic");
    const pages = prompt("Choose the new pages");
    const isbn = prompt("Select Isbn-number");

    books.push(new Book(titel, subject, pages, isbn));
  }
}

let books = [
  new Book("Hjärnstark", "Biology ", 253, " 9789175038452"),
  new Book("Omgivna av idioter ", "Psychology", 299, " 9789175038407"),
  new Book("Student hacks ", "Education", 192, " 9781786852465"),
];

addBooks();
books.forEach((book) => {
  console.log(book.getBookInfo());
  console.log("-----");
});
