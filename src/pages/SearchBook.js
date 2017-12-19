import React, { Component } from 'react';
import Book from '../components/Book'
import * as BooksAPI from '../BooksAPI'

class SearchBook extends Component {
  state = {
      query: '',
      books: []
    }


  onChangeShelf = ( bookMoved, targetShelf ) => {
      //TODO add a toast
      BooksAPI.update(bookMoved, targetShelf).then(() =>{
        if(targetShelf === 'none') {
          alert('Book removed from the shelf')
        } else {
          alert('Book added to the shelf successfully')
        }
      })

  }

  findBook(query){
    this.setState({query})
    if(query) {
      BooksAPI.search(query).then(books => {
           if(books.error){
               this.setState({books: []})
           } else {
             this.setState({books})
           }
         })
     } else {
       this.setState({books: []})
     }
  }


  render() {
    const {query, books} = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.findBook(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {  books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  onChangeShelf={this.onChangeShelf}
                  />
              ))
            }

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook