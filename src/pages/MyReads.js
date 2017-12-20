import React, { Component } from 'react';
import Book from '../components/Book'
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
            console.log(books);
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
    return (


        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                type={'currentlyReading'}
                title={'Currently Reading'}
                books={books}
                onChangeShelf={this.onChangeShelf}
              />
              <BookShelf
                type={'wantToRead'}
                title={'Want to Read'}
                books={books}
                onChangeShelf={this.onChangeShelf}
              />
              <BookShelf
                type={'read'}
                title={'Read'}
                books={books}
                onChangeShelf={this.onChangeShelf}
              />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
    )
  }
}

export default MyReads
