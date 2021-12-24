function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}. ${this.pages} pages, ${
      this.read ? 'read' : 'not read yet'
    }.`;
  };
}

const hobbit = new Books('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(hobbit.info());
