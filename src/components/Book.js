import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
      book: PropTypes.object.isRequired,
      onChangeShelf: PropTypes.func.isRequired
  }


  render() {
    const { book, onChangeShelf } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : null})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => onChangeShelf(book, event.target.value)} defaultValue={book.shelf ? book.shelf : "none"}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
            {book.authors && book.authors.map((author, index) => (
                <div className="book-authors" key={index}>{author}</div>
            ))}
        </div>
      </li>
    )
  }
}

export default Book
