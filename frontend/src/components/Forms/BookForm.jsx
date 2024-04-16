import React, { useState, useEffect } from "react";

import { Form } from "react-router-dom";
import blankimg from "@/assets/images/image_not_found.jpg";
import axios from "axios";

import ControledCheck from "@/components/Forms/ControledCheck";
import SelectAuthors from "../Selections/SelectAuthors";

const BookForm = () => {
  const [file, setfile] = useState();
  const [bookCategories, setbookCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(new Object);
  const [selectedGenres, setSelectedGenres] = useState([]);

  let genresdivs = []

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

  const handleCheck = (checkid) => {
    setSelectedGenres((previous) => {
      if(previous.includes(checkid)){
        return previous.filter((genreid) => genreid != checkid)
      } else {
        return [...previous, checkid]
      }
    })
  }


  




  const handleCategorySelect = (e) => { 
    const selected_category = bookCategories.filter(
      (cat_obj) => cat_obj.url == e.target.value
    );
      setSelectedCategory(selected_category[0])
    };


    
if(selectedCategory.genres){
  genresdivs = selectedCategory.genres.map(genre => <ControledCheck key={genre.id} genre={genre} togglecheck={ handleCheck } checked={selectedGenres.includes(genre.id)}/>)
  
}
  

  



  const handleFileChange = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
    e.target.files[0];

    const input = document.getElementById("image-input");
    console.log(input);
  };


 

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
     <Form action="" method="post" encType="multipart/form-data">
      <div className="card mb-3 border p-3  rounded-end ">
          <div className="card-body ">
            <h2 className="card-title">Add Book</h2>

            <div className="row">
              <input type="hidden" value={selectedGenres} name="genre_list"  />
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

                {selectedCategory.genres && (
                  <div className="my-2">
                    <h6 className="fw-bold text-capitalised">
                      Select book genres
                    </h6>
                    {genresdivs}
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
        <SelectAuthors/>
      </Form>
    </div>
  );
};

export default BookForm;
