import React, { useState } from "react";
import blankimg from "@/assets/images/blank-profile.png";
import { Form } from "react-router-dom";
const PatronForm = () => {
  const [file, setfile] = useState();

  const handleFileChange = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
    e.target.files[0];

    const input = document.getElementById("image-input");
    console.log(input);
  };
  return (
    <div
      className="container-fluid d-flex justify-content-center "
      id="book-form"
    >
      <div className="card mb-3 border p-3  rounded-end ">
        <Form action="" method="post" encType="multipart/form-data">
          <div className="card-body ">
            <h2 className="card-title">Add Patron</h2>

            <div className="row">
              <div className="col-sm-4 my-2">
                <div className="image-container border p-2">
                  <label htmlFor="image-input">
                    <div className="row justify-content-center">
                      <div className="col-9">
                        <img
                          src={file ? file : blankimg}
                          alt="Book image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="d-none"
                      id="image-input"
                      name="profile_image"
                    />
                    <span className="btn image-btn my-2 fw-bold">
                      Add profile image
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-sm-8 my-2 border rounded-end p-4">
                <div className="col-md-6 my-2">
                  <label htmlFor="first_name" className="form-label fw-bold">
                    First name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                  />
                  </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="last_name" className="form-label fw-bold">
                    Last name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last name"
                    className="form-control"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="phone_number" className="form-label fw-bold">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="form-control"
                    name="phone_number"
                    id="phone_number"
                  />
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn rounded cancel" type="button">
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

export default PatronForm;
