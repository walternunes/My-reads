import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book.js'

class BookShelf extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, title, type, onChangeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.filter( book => book.shelf === type).map((book) => (
              <Book
                key={book.id}
                book={book}
                onChangeShelf={onChangeShelf}/>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
