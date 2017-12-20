import React from 'react'
import SearchBook from './pages/SearchBook.js'
import MyReads from './pages/MyReads.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook />
        ) : (
          <MyReads/>
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
