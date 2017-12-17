import React, { Component } from 'react';
import {update} from '../BooksAPI'

class Book extends Component {

  
  updateBookShelf(book, event ) {
    update(book, event).then(r =>{
      console.log(r);
    })
  }


  render() {
    const { book } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.updateBookShelf(book, event.target.value)} defaultValue={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
            {book.authors.map((author, index) => (
                <div className="book-authors" key={index}>{author}</div>
            ))}
        </div>
      </li>
    )
  }
}

export default Book
