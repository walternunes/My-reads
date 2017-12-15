import React from 'react'
import SearchBook from './components/SearchBook.js'
import BookShelf from './components/BookShelf.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
        this.getBooks();
  }

  getBooks() {
        BooksAPI.getAll().then(books => {
            console.log(books);
            this.setState({ books });
        });
    }

  render() {
    const { books } = this.state
    console.log(this.state);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook />
        ) : (
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
                />
                <BookShelf
                  type={'wantToRead'}
                  title={'Want to Read'}
                  books={books}
                />
                <BookShelf
                  type={'read'}
                  title={'Read'}
                  books={books}
                />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
