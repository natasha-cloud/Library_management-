import React from 'react'
import { Link  } from 'react-router-dom'

const BookCard = ({ book }) => {


    const text = 'Harry potter and the Prisoner of Azkaban'

    const tauncate = (text, end) => text.length > end ? text.slice(0, end) + '...' : text



  return (
    <>
        <div className='card h-100'>
            <img src={book.image} alt="Harry Potter" />
            <div className="card-body">
            <Link to={ `/book/${ book.id }/` }>
            <h6 className="card-title" data-bs-toggle="modal" data-bs-target="#exampleModal">{tauncate(book.title, 18)}</h6> 
            </Link>
                <p className="card-text"><small className="text-body-secondary">{book.author}</small></p>
            </div>
        </div>

    </>
  )
}

export default BookCard

