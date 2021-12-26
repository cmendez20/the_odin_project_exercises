const submitButton = document.querySelector('#btnsubmit');
const form = document.querySelector('.form');

const myLibrary = [
  {
    title: 'Book Title',
    author: 'Chris Mendez',
    pages: '420',
    read: true,
  },
  {
    title: 'Book Title 2',
    author: 'Chris Mendez The 2nd',
    pages: '724',
    read: false,
  },
  {
    title: 'Book Title 3',
    author: 'Chris Mendez The 3rd',
    pages: '720',
    read: true,
  },
];

function Book(title, author, pages, read) {
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

function addBookToLibrary() {
  const bookTitleValue = document.querySelector('#form-input--title').value;
  const bookAuthorValue = document.querySelector('#form-input--author').value;
  const bookPagesValue = document.querySelector('#form-input--pages').value;
  const bookReadValue = document.querySelector('#form-input--read').value;

  let userBook = new Book(
    bookTitleValue,
    bookAuthorValue,
    bookPagesValue,
    bookReadValue
  );

  console.log(userBook);
  myLibrary.push(userBook);

  renderLibrary(myLibrary);
}

const renderLibrary = myLibrary => {
  let index = myLibrary.length - 1;
  let book = myLibrary[index];
  console.log(book);
  let div = document.createElement('div');
  div.innerHTML = `
  <h2>${book.title}</h2>
  <p>Author: ${book.author}</p>
  <p>Page Count: ${book.pages}</p>
  <p>Book read? ${book.read}</p>
  `;
  document.body.append(div);
};

// myLibrary.forEach(book => {
//   let div = document.createElement('div');
//   div.innerHTML = `
//     <h2>${book.title}</h2>
//     <p>Author: ${book.author}</p>
//     <p>Page Count: ${book.pages}</p>
//     <p>Book read? ${book.read}</p>
//     `;
//   document.body.append(div);
// });

form.addEventListener('submit', e => {
  e.preventDefault();
  addBookToLibrary();
});
