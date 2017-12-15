import React, { Component } from 'react';
import Book from './Book.js'

class BookShelf extends Component {


  render() {
    const { books, title, type } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.filter( book => book.shelf === type).map((book) => (
              <Book
                key={book.id}
                book={book}/>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
