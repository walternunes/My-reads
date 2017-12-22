import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf'
import * as BooksAPI from '../BooksAPI'

class MyReads extends Component {
  state = {
    books: []
  }

  componentDidMount() {
        this.getAllBooks();
  }

  getAllBooks() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

  onChangeShelf = ( bookMoved, targetShelf ) => {
    BooksAPI.update(bookMoved, targetShelf).then(() =>{
      this.getAllBooks();
    })
  }

  render() {
    const { books } = this.state
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
                onChangeShelf={this.onChangeShelf}
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
}

export default MyReads
