import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import blankimg from "@/assets/images/blank-profile.png";

const AuthorForm = () => {
  const [file, setfile] = useState();
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
    e.target.files[0];

    const input = document.getElementById("image-input");
    console.log(input);
  };
  return (
    <div
      className="container-fluid d-flex justify-content-center "
      id="author-form"
    >
      <div className="card mb-3 border p-3  rounded-end ">
        <Form action="" method="post" encType="multipart/form-data">
          <div className="card-body ">
            <h2 className="card-title">Add Author</h2>

            <div className="row">
              <div className="col-sm-4 my-2">
                <div className="image-container border p-2">
                  <label htmlFor="image-input">
                    <div className="row justify-content-center">
                      <div className="col-9">
                        <img
                          src={file ? file : blankimg}
                          alt="Author image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="d-none"
                      id="image-input"
                      name="image"
                    />
                    <span className="btn image-btn my-2 fw-bold">
                      Add author image
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-sm-8 my-2 border rounded-end p-4">
                <div className="col-md-6 my-2">
                  <label htmlFor="author_name" className="form-label fw-bold">
                    Author name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="form-control"
                    name="name"
                    id="author_name"
                  />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="birth_year" className="form-label fw-bold">
                    Birth date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="birth_year"
                    id="birth_year"
                  />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="death_year" className="form-label fw-bold">
                    Death date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="death_year"
                    id="death_year"
                  />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn rounded cancel" type="button" onClick={()=> navigate(-1)}>
                    Cancel
                  </button>
                  <button className="btn rounded next" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AuthorForm;
