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
        console.log("---->")
      })

  }

  findBook(query){
    this.setState({query})
    console.log("--->")
    if(query) {
      BooksAPI.search(query).then(books => {
         console.log("<><>")
         console.log(books)
         books ? this.setState({books}): this.setState({books: []})
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
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.findBook(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.length > 0 && books.map((book) => (
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
