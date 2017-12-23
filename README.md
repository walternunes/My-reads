# RN-P1 My Reads
This project is part of React Nanodegree

### About
Project 1: The MyReads project is a bookcase application that allows you to select and sort books you've read, are reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library, which will be used to persist information and interact with the application.

The API used can be accessed by: https://reactnd-books-api.udacity.com <br>
Methods used:
#### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

#### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### How to run the project
* Clone the repo using ```git clone https://github.com/walternunes/My-reads.git``` and ```cd``` into the folder
* Install dependecies typing ```npm install```
* Run the project typing ```npm start```
* Access the page in ```http://localhost:3000/```


