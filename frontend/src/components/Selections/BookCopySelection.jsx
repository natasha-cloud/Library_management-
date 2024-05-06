import React, { useState } from "react";

const BookCopySelection = ({ bookcopies }) => {
  const [selectedCopy, setSelectdCopy] = useState("");

  const copy_list = bookcopies.map((bookcopy) => {
    return (
      <li key={bookcopy.id} className="list-group-item d-flex">
        <input
          type="radio"
          className="form-check-input me-1"
          id={`book_copy_${bookcopy.id}`}
          name="book_copy"
          value={bookcopy.id}
          checked={bookcopy.id == selectedCopy}
          onChange={(e) => setSelectdCopy(e.target.value)}
        />
        <label
          htmlFor={`book_copy_${bookcopy.id}`}
          className="form-check-label"
        >
          <div className="mx-2 d-flex flex-nowrap">
            <img
              src={bookcopy.book.image}
              alt=""
              className="img-fluid rounded-circle border border-primary me-3"
              style={{ width: "50px", height: "50px" }}
            />

            <div className="book-info">
              <h6>{bookcopy.book.title}</h6>
              <div className="d-flex">
                <span className="fw-bold me-2">ISBN:</span>
                <span className="fs-6">{bookcopy.ISBN}</span>
              </div>
            </div>
          </div>
        </label>
      </li>
    );
  });

  return (
    <div className="card border p-3 rounded-end">
      <div className="card-body">
        <h4>Select book copy</h4>

        <div className="my-3 list">
          <ul
            className="list-group"
            style={{ maxHeight: "400px", overflow: "auto" }}
          >
            {copy_list.length > 0 ? (
              copy_list
            ) : (
              <p className="fs-4">No book selected</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookCopySelection;
