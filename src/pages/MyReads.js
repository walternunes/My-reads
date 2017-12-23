import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import BookShelf from '../components/BookShelf'

const MyReads = (props) => {
  MyReads.propTypes = {
      books: PropTypes.array.isRequired,
      onChangeShelf: PropTypes.func.isRequired
  }
  const { books, onChangeShelf } = props
  const typesOfShelf = [{ title: 'Currently Reading', type: 'currentlyReading' },
                       { title: 'Want to Read', type: 'wantToRead' },
                       { title: 'Read', type: 'read' }]
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            { typesOfShelf.map(shelf => (
              <BookShelf
                key={shelf.type}
                title={shelf.title}
                type={shelf.type}
                books={books}
                onChangeShelf={onChangeShelf}
              />
            ))}
            </div>
          </div>
          <div className="open-search">
             <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export default MyReads
