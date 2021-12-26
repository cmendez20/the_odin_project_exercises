const submitButton = document.querySelector('#btnsubmit');
const form = document.querySelector('.form');
const card = document.querySelector('.card');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const readStatus = function (e) {
  const bookIndex = e.target.parentElement.parentElement.dataset.index;
  console.log(bookIndex);

  if (myLibrary[bookIndex].read === 'Read') {
    myLibrary[bookIndex].read = 'Unread';
  } else {
    myLibrary[bookIndex].read = 'Read';
  }

  renderLibrary(myLibrary);
};

function addBookToLibrary() {
  const bookTitleValue = form.title.value;
  const bookAuthorValue = form.author.value;
  const bookPagesValue = form.pageCount.value;
  const bookReadValue = form.read.value;

  let userBook = new Book(
    bookTitleValue,
    bookAuthorValue,
    bookPagesValue,
    bookReadValue
  );

  myLibrary.push(userBook);

  renderLibrary(myLibrary);
  clearInput();
}

const renderLibrary = myLibrary => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.remove();
  });

  myLibrary.forEach((book, index) => {
    let div = document.createElement('div');
    div.setAttribute('data-index', index);
    div.classList.add('card');

    div.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Page Count: ${book.pages}</p>
    <p>Status: <button class="btn statusBtn">${book.read}</button></p>
    <button class="btn btn--remove" data-type="removeBtn">Remove book</button>
    `;
    document.body.append(div);
  });
};

const clearInput = function () {
  form.reset();
};

form.addEventListener('submit', e => {
  e.preventDefault();
  addBookToLibrary();
});

document.addEventListener('click', e => {
  if (e.target.dataset.type === 'removeBtn') {
    const parentDiv = e.target.parentElement;
    const parentIndex = parentDiv.dataset.index;
    myLibrary.splice(parentIndex, 1);
    parentDiv.remove();
    console.log(myLibrary);
    renderLibrary(myLibrary);
  }

  if (e.target.classList.contains('statusBtn')) {
    console.log('clicked status button');
    readStatus(e);
  }
});
