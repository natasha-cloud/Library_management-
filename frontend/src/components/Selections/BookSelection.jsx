import React, { useState, useEffect } from "react";
import { Link, Form } from "react-router-dom";
import axios from "axios";

const BookSelection = () => {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");
  const [slectedBook, setSelectedBook] = useState('')

  useEffect(() => {
    const getallbooks = async () => {
      const response = await axios.get("/api/books/");
      console.log(response);
      setBooks(response.data);
    };
    getallbooks();
  }, [books]);

  const search = (books) => {
    return books.filter((book) => {
      return (
        book["title"].toString().toLowerCase().indexOf(q.toLowerCase()) > -1 && book['is_book_available']
      );
    });
  };

  return (
    <div className="card border p-3 rounded-end">
      <div className="card-body">
        <h4>Select book</h4>
        <input type="text" name='book' value={slectedBook} />
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
            {search(books).map((book) => {
              return (
                <li key={book.id} className="list-group-item d-flex">
                  <input
                    type="radio"
                    className="form-check-input me-1"
                    id={book.id}
                    name='book'
                    value={book.id}
                    checked={book.id == slectedBook}
                    onChange={(e) => setSelectedBook(e.target.value)}
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
                        <h6>{book.title}</h6>
                      </div>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookSelection;
