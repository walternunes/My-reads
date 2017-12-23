import React from 'react'
import { Route } from 'react-router-dom'
import SearchBook from './pages/SearchBook.js'
import MyReads from './pages/MyReads.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
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
    return (
      <div className="app">
          <Route path="/search" render={() => <SearchBook shelfBooks={books} onChangeShelf={this.onChangeShelf} /> }/>
          <Route exact path="/" render={() => <MyReads books={books} onChangeShelf={this.onChangeShelf} /> } />
      </div>
      )
    }
  }

export default BooksApp
