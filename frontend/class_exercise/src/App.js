import React, {useState, useEffect} from 'react'
//import apiConn from './apiConn'
import Books from './components/Books'


const App = () => {

    //develop the app with fake data
    //then replace the fake data with the real data

//******* BOOK MODELS */
/*
id: Unique identifier (Primary Key)
title: Title of the book
isbn: ISBN number
publishedDate: Publication date
summary: Short summary of the book
authorId: Foreign Key relating the book to an author 
*/

const books = [

{
  "title": "The Hunger Games",
  "isbn": "978-0439023481",
  "publishedDate": {
    "$date": "2008-09-14T00:00:00.000Z"
  },
  "summary": "Could you survive on your own, in the wild, with everyone out to make sure you don't live to see the morning?",
  "authorId": 1
},

{
  "title": "Harry Potter and the Philosopher's Stone",
  "isbn": "978-0747532743",
  "publishedDate": {
    "$date": "1997-06-26T00:00:00.000Z"
  },
  "summary": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.",
  "authorId": 2
},

{
  "title": "Twilight",
  "isbn": "978-0316015844",
  "publishedDate": {
    "$date": "2005-09-06T00:00:00.000Z"
  },
  "summary": "About three things I was absolutely positive.",
  "authorId": 3
}

]

//******* AUTHOR MODELS */
/*
id: Unique identifier (Primary Key)
name: Author's full name
bio: Short biography of the author
birthdate: Date of birth of the author
books: Associated books (One-to-Many relationship with the Books model)
*/

const authors = [
  {
   "name": "Suzanne Collins",
    "bio": "American television writer and novelist",
    "birthdate": {
      "$date": "1962-08-10T00:00:00.000Z"
    },
    "books": [1]
  },
  {
    "name": "J. K. Rowling",
    "bio": "British author, philanthropist, film producer, television producer and screenwriter",
    "birthdate": {
      "$date": "1965-07-31T00:00:00.000Z"
    },
    "books": [2]
  },
  {
    "name": "Stephenie Meyer",
    "bio": "American novelist",
    "birthdate": {
      "$date": "1973-12-24T00:00:00.000Z"
    },
    "books": [3]
  }
]

//const [books, setBooks] = useState([]),
useEffect(() => {getBooks()}, [])

function getBooks() {
//apiConn.get('/books')
 // .then(response => {
 //   setBooks(response.data)
 // })
//.catch(error => {
 // console.log(error)
//})
}

  return (
    <>
    <h1>Welcome to the Reading App</h1>
    <Books books={books}></Books>
    </>
  )
}

export default App
