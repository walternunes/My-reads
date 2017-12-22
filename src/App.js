import React from 'react'
import { Route } from 'react-router-dom'
import SearchBook from './pages/SearchBook.js'
import MyReads from './pages/MyReads.js'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route path="/search" component={SearchBook} />
          <Route exact path="/" component={MyReads} />
      </div>
      )
    }
  }

export default BooksApp
