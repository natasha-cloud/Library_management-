import React, { useState} from "react";
import {Link, Form } from 'react-router-dom'

const PatronSelection = () => {

    const  book = ''
    const [q, setQ ] = useState('')
  return (
    <div className="card border p-3 rounded-end">
      <div className="card-body">
        <h4>Select book</h4>
        <div className="d-flex justify-content-between my-2 flex-wrap ">
          <input
            type="search"
            placeholder="Search book"
            className="form-control w-75 my-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <Link to="/select_book/book/new">
            <button className="fw-bold btn next rounded my-2">
              {" "}
              New <i className="bi bi-plus"></i>{" "}
            </button>
          </Link>
        </div>

        <h6 className="my-2">Select book to issue </h6>

        <div className="my-3 list">
          <ul
            className="list-group"
            style={{ maxHeight: "400px", overflow: "auto" }}
          >
              return (
                <li key={book.id} className="list-group-item d-flex">
                  <input
                    type="checkbox"
                    className="form-check-input me-1"
                    id={book.id}
                   
                  />
                  <label htmlFor={book.id} className="form-check-label">
                    <div className="mx-2 d-flex flex-nowrap">
                      <img
                        src={book.image}
                        alt=""
                        className="img-fluid rounded-circle border border-primary me-3"
                        style={{ width: "50px", height: "50px" }}
                      />

                      <div className="book-info">
                        <h6>{book.name}</h6>
                        <div className="d-flex">
                          <span className="text-secondary small">s</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </li>
              );
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default PatronSelection
