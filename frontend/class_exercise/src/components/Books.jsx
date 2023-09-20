import React from 'react'

//******* BOOK MODELS */
/*
id: Unique identifier (Primary Key)
title: Title of the book
isbn: ISBN number
publishedDate: Publication date
summary: Short summary of the book
authorId: Foreign Key relating the book to an author 
*/

const Books = ({books}) => {
  return (
    <>


{books.map(books => {  
    return (
        <div key={books.id}>
        <p>Title: {books.title}</p>
        <p>ISBN: {books.isbn}</p>
        <p>Published Date: coming soon</p>
        <p>Summary: {books.summary}</p>
        <p>Author ID: {books.authorId}</p>
        <hr/>
        </div>
    )
 })}
    </>
  )
}

export default Books