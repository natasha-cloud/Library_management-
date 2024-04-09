import React, { useState, useEffect } from "react";

import { Form } from "react-router-dom";
import blankimg from "@/assets/images/image_not_found.jpg";
import axios from "axios";

import ControledCheck from "@/components/Forms/ControledCheck";

const BookForm = () => {
  const [file, setfile] = useState();
  const [bookCategories, setbookCategories] = useState([]);
  const [genres, setGenre] = useState([]);
  const [categorySelected, setcategorySelected] = useState(false);
  const [genreChecks, setgenreChecks] = useState(new Array(0).fill(false));

  const handleCategorySelect = (e) => {
    const selected_category = bookCategories.filter(
      (cat_obj) => cat_obj.url == e.target.value
    );

    console.log(selected_category[0].genres);
    console.log(selected_category[0]);

    const genredivs = selected_category[0].genres.map((genre) => {
      return <ControledCheck key={genre.id} genre={genre} />;
    });

    console.log(genredivs.length);

    setGenre(genredivs);
    setcategorySelected(true);
  };
  const handleFileChange = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
    e.target.files[0];

    const input = document.getElementById("image-input");
    console.log(input);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/api/book_categories/");
        setbookCategories(response.data);
      } catch (errors) {
        console.log(errors);
      }
    };

    getCategories();
  }, []);

  const options = bookCategories.map((category) => {
    return (
      <option key={category.id} value={category.url}>
        {category.name}
      </option>
    );
  });

  return (
    <div
      className="container-fluid d-flex justify-content-center "
      id="book-form"
    >
      <div className="card mb-3 border p-3  rounded-end ">
        <Form action="" method="post" encType="multipart/form-data">
          <div className="card-body ">
            <h2 className="card-title">Add Book</h2>

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
                      name="image"
                    />
                    <span className="btn image-btn my-2 fw-bold">
                      Add cover image
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-sm-8 my-2 border rounded-end p-4">
                <div className="col-md-6 my-2">
                  <label htmlFor="title" className="form-label fw-bold">
                    Title:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book title"
                    className="form-control"
                    name="title"
                    id="title"
                  />
                </div>

                <div className="col-md-6 my-2">
                  <label htmlFor="publisher" className="form-label fw-bold">
                    Publisher:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book publisher"
                    className="form-control"
                    name="publisher"
                    id="publisher"
                  />
                </div>

                <div className=" my-2">
                  <label htmlFor="summery" className="form-label fw-bold">
                    Summery:
                  </label>
                  <textarea
                    placeholder="Enter book summery"
                    name="summery"
                    id="summery"
                    cols="15"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="col-md-6 my-2">
                  <label htmlFor="language" className="form-label fw-bold">
                    Language:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book language"
                    className="form-control"
                    name="language"
                    id="language"
                  />
                </div>
                <label htmlFor="main-genre"></label>

                <div className="col-md-6 my-2">
                  <h6 className="fw-bold">Select category</h6>
                  <select
                    name="category"
                    id="main-genre"
                    className="form-select my-2"
                    aria-label="Select category"
                    onChange={handleCategorySelect}
                  >
                    <option defaultValue="">Choose book category</option>
                    {options}
                  </select>
                </div>

                {categorySelected && (
                  <div className="my-2">
                    <h6 className="fw-bold text-capitalised">
                      Select book genres
                    </h6>
                    {genres}
                  </div>
                )}

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn rounded cancel" type="button">
                    Cancel
                  </button>
                  <button className="btn rounded next" type="submit">
                    Next
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

export default BookForm;
