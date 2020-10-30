class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list')

    // create <tr> element
    const row = document.createElement('tr')

    // inserst colls
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `
    list.appendChild(row)
  }
  showAlert(message, className) {
    const div = document.createElement('div')
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')

    // insert allert before the <form> tag
    // const oldElement = document.getElementById('alrt')
    const oldDiv = document.querySelector('.alert')
    if (oldDiv) {
      const container = document.querySelector('.container')
      container.replaceChild(div, oldDiv)
    } else {
      container.insertBefore(div, form)
    }

    setTimeout(() => {
      const div = document.querySelector('.alert')
      if (div) {
        div.remove()
      }
    }, 3000)
  }
  clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks()
    books.forEach((book) => {
      const ui = new UI()
      ui.addBookToList(book)
    })
  }
  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }
  static removeBook(isbn) {
    console.log(isbn)
    const books = Store.getBooks()
  
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books))
  }
}

// DOM event listener
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// event listener for add
document.getElementById('book-form').addEventListener('submit', function (e) {
  // get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

  // instantiate book
  const book = new Book(title, author, isbn)

  // instantiate ui
  const ui = new UI()
  // console.log(ui)

  // validate
  if (title === '' || author === '' || isbn === '') {
    // error
    ui.showAlert('Please fill in all the fields', 'error')
  } else {
    ui.addBookToList(book)
    // add to local storage
    Store.addBook(book)

    ui.showAlert('Book added', 'success')
    ui.clearFields()
  }

  e.preventDefault()
})

// event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI()
  ui.deleteBook(e.target)
  // delete from localstorage 
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

  ui.showAlert('Book removed', 'success')
  e.preventDefault()
})
