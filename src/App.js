import React from 'react'
import SearchBook from './pages/SearchBook.js'
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
        )}
      </div>
    )
  }
}

export default BooksApp
