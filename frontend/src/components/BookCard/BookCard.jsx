import React from 'react'
import harry from '@/assets/images/Harry Potter and the prisoner of Azkaban.jpg'

const BookCard = ({ book }) => {


    const text = 'Harry potter and the Prisoner of Azkaban'

    const tauncate = (text, end) => text.slice(0, end) + '...'

    console.log(text.slice(0, 4))

  return (
    <>
        <div className='card'>
            <img src={book.image} alt="Harry Potter" />
            <div className="card-body">
            <h6 className="card-title" data-bs-toggle="modal" data-bs-target="#exampleModal">{tauncate(book.title, 18)}</h6>
                <p className="card-text"><small className="text-body-secondary">{book.author}</small></p>
            </div>
        </div>

    </>
  )
}

export default BookCard

