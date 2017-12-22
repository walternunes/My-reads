import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/Book'
import * as BooksAPI from '../BooksAPI'

class SearchBook extends Component {
  state = {
      query: '',
      books: [],
      toastMessage: ''
    }

  showToast(toastMessage){
      this.setState({toastMessage})
      const toast = this.refs.simpleToast
      toast.className = "show"
      setTimeout(() => { toast.className = toast.className.replace("show", "")}, 3000)
  }

  onChangeShelf = ( bookMoved, targetShelf ) => {
    BooksAPI.update(bookMoved, targetShelf).then(() =>{
      if(targetShelf === 'none') {
        this.showToast('Book removed from the shelf successfully')
      } else {
        this.showToast('Book added to the shelf successfully')
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
    const {query, books, toastMessage} = this.state

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.findBook(event.target.value)}
            />

          </div>
        </div>
        <div ref="simpleToast" id="simpleToast">{toastMessage}</div>
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
        {//TODO add error 0 results here}
        }
      </div>

    )
  }
}

export default SearchBook
