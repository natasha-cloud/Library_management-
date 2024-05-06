import React, { useEffect, useState } from "react";
import blankimg from "@/assets/images//Percy Jackson and the Olympians-The Titan's Curse.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SelectAuthors = () => {
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [q, setQ] = useState("");
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  const search = (authors) => {
    return authors.filter((author) => {
      return (
        author["name"].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      );
    });
  };

  useEffect(() => {
    const getauthors = async () => {
      try {
        const response = await axios.get("/api/book_authors/");
        setAuthors(response.data);
      } catch (errors) {
        console.log(errors);
      }
    };

    getauthors();
  }, []);

  const handleCheck = (checkid) => {
    setSelectedAuthors((previous) => {
      if (previous.includes(checkid)) {
        return previous.filter((genreid) => genreid != checkid);
      } else {
        return [...previous, checkid];
      }
    });
  };

  return (
    <div className="card border p-3 rounded-end">
      <div className="card-body">
        <h4>Author details</h4>

        <input type="hidden" name="author_list" value={selectedAuthors} />
        <div className="d-flex justify-content-between my-2 flex-wrap ">
          <input
            type="search"
            placeholder="Search book authors"
            className="form-control w-75 my-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <Link to="/select_book/author/new">
            <button className="fw-bold btn next rounded my-2">
              {" "}
              New <i className="bi bi-plus"></i>{" "}
            </button>
          </Link>
        </div>

        <h6 className="my-2">Select book authors</h6>

        <div className="my-3 list">
          <ul
            className="list-group"
            style={{ maxHeight: "400px", overflow: "auto" }}
          >
            {search(authors).map((author) => {
              const birth_year = author.birth_year
                ? new Date(author.birth_year).getFullYear()
                : "****";
              const death_year = author.death_year
                ? new Date(author.death_year).getFullYear()
                : "****";

              return (
                <li key={author.id} className="list-group-item d-flex">
                  <input
                    type="checkbox"
                    className="form-check-input me-1"
                    id={author.id}
                    checked={selectedAuthors.includes(author.id)}
                    onChange={() => handleCheck(author.id)}
                  />
                  <label htmlFor={author.id} className="form-check-label">
                    <div className="mx-2 d-flex flex-nowrap">
                      <img
                        src={author.image}
                        alt=""
                        className="img-fluid rounded-circle border border-primary me-3"
                        style={{ width: "50px", height: "50px" }}
                      />

                      <div className="author-info">
                        <h6>{author.name}</h6>
                        <div className="d-flex">
                          <span className="text-secondary small">{`${birth_year} - ${death_year}`}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link>
            <button
              className="btn rounded cancel"
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </Link>
          <button className="btn rounded next" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAuthors;
