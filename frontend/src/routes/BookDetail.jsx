import React from 'react'

import { useNavigate, useLoaderData } from 'react-router-dom'
// import axios from 'axios'

const BookDetail = () => {

  const book = useLoaderData()

  return (
    <div className='container-fluid' id='book-details'>
     <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-md-4 my-2">
          <div className="row justify-content-center">
            <div className="col-9">
          <img src={book.image} alt={book.title} className='img-fluid' />
            </div>
          </div>
        </div>
        <div className="col-md-8 my-2">
          <div className="card-body book-info h-100 border rounded-end">
            <h4 className="card-title">{ book.title }</h4>
            <p className="card-text">The wider oart of the card</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 min ago</small></p>
          </div>
        </div>
      </div>

     </div>
    </div>
  )
}

export default BookDetail






