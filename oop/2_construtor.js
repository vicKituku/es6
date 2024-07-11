// constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiate an object
const book1 = new Book("book 1", "john doe", "1993");
const book2 = new Book("book 2", "jane doe", "1994");

console.log(book1.getSummary());
console.log(book2.getSummary());
