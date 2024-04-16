import React from "react";

import { useNavigate, useLoaderData } from "react-router-dom";
// import axios from 'axios'

const BookDetail = () => {
  const book = useLoaderData();

  const book_authors = book.authors.map((author => author.name))
  const book_genres = book.genres.map((genre) => genre.name )

  return (
    <div className="container-fluid" id="book-details">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-details-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-details"
            type="button"
            role="tab"
            aria-controls="nav-details"
            aria-selected="true"
          >
            Details
          </button>
          <button
            className="nav-link"
            id="nav-ch-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ch"
            type="button"
            role="tab"
            aria-controls="nav-ch"
            aria-selected="false"
          >
            Circulation History
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-details"
          role="tabpanel"
          aria-labelledby="nav-details-tab"
          tabIndex="0"
        >
          <div className="container-fluid my-3">
            <div className="card mb-3 border-0">
              <div className="row g-0">
                <div className="col-md-4 my-2">
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 my-2">
                  <div className="card-body book-info h-100 border rounded-end">
                    <h4 className="card-title">{book.title}</h4>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Publisher:</span> { book.publisher }</p>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Authors:</span> { book.authors.length > 0 ?  book_authors.join() : 'No authors specified'  }</p>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Category:</span> { book.category.name}</p>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Genres:</span> { book.genres.length > 0 ? book_genres.join() : 'No genres specified'  }</p>
                    <p className="card-text my-2 text-italic"><span className="fw-bold me-1" >Summery:</span> <span className="d-block">{book.summery}</span></p>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Is Available:</span> { book.is_book_available? <i className="bi bi-check-circle-fill check"></i>: <i className="bi bi-x-circle-fill x-cross"></i> }</p>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Number of copies available:</span> { book.book_no_available}</p>
                    <p className="card-text my-2"><span className="fw-bold me-1" >Number of copies borrowed:</span> { book.book_no_borrowed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-ch"
          role="tabpanel"
          aria-labelledby="nav-ch-tab"
          tabIndex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
