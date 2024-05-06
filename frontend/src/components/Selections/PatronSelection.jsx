import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const PatronSelection = () => {
  const [patrons, setPatrons] = useState([]);
  const [q, setQ] = useState("");
  const [selectedPatron, setSelectedPatron] = useState("");
  const navigate = useNavigate()
  const serachParam = [
    "full_name",
    "email",
    "date_joined",
    "phone_number",
    "id",
  ];

  useEffect(() => {
    const getallpatrons = async () => {
      const response = await axios.get("/api/patrons/");
      setPatrons(response.data);
    };
    getallpatrons();
  }, []);

  const search = (patrons) => {
    return patrons.filter((patron) => {
      return serachParam.some((newItem) => {
        return (
          patron[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <div className="card border p-3 rounded-end">
      <div className="card-body">
        <h4>Select Patron </h4>
        <div className="d-flex justify-content-between my-2 flex-wrap ">
          <input
            type="search"
            placeholder="Search patron by full name, email, date joined, phone number, id"
            className="form-control w-75 my-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <Link to="/add/patron">
            <button className="fw-bold btn next rounded my-2">
              {" "}
              New <i className="bi bi-plus"></i>{" "}
            </button>
          </Link>
        </div>

        <h6 className="my-2">Select patron to issue </h6>

        <div className="my-3 list">
          <ul
            className="list-group"
            style={{ maxHeight: "400px", overflow: "auto" }}
          >
            {search(patrons).map((patron) => {
              return (
                <li key={patron.id} className="list-group-item d-flex">
                  <input
                    type="radio"
                    className="form-check-input me-1"
                    id={`patron_${patron.id}`}
                    name="patron"
                    value={patron.id}
                    checked={patron.id == selectedPatron}
                    onChange={(e) => setSelectedPatron(e.target.value)}
                  />
                  <label htmlFor={`patron_${patron.id}`} className="form-check-label">
                    <div className="mx-2 d-flex flex-nowrap">
                      <img
                        src={patron.profile_image}
                        alt="Profile image"
                        className="img-fluid rounded-circle border border-primary me-3"
                        style={{ width: "50px", height: "50px" }}
                      />

                      <div className="book-info">
                        <h6>{patron.full_name}</h6>
                        <div className="d-flex">
                          <span className="fw-bold me-2">ID:</span>
                          <span className="fs-6">{patron.id}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">
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
            Issue book
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PatronSelection;
