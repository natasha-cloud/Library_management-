import React, { useEffect } from "react";
import { useLoaderData, useNavigation, Form, useSubmit } from "react-router-dom";

import BookCard from "./../components/BookCard/BookCard";
import Alphabet from "../components/sort and filter/Alphabet";


const Catalogue = () => {
  const { books, q } = useLoaderData();

  const submit = useSubmit()
  const navigation = useNavigation()
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q")
  console.log(navigation)
  const bookdivs = books.map((book) => {
    return (
      <div key={book.id} className="col-6 col-sm-3 col-lg-2 ">
        <BookCard book={book} />
      </div>
    );
  });

  useEffect(()=>{
   document.getElementById('book-search').value = q
  },[q])


  return (
    <div className="container-fluid">
      <Form  className="querydiv d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className="header d-flex justify-content-between ">
          <h2>Catalogue</h2>
          <span className="count mx-3 align-self-center rounded-pill border text-dark border-dark-subtle fw-bold px-1">
            123
          </span>
        </div>
        <div className="filter row justify-content-lg-end align-items-center flex-grow-1">
          <div className="col-sm-6 my-2">
            <div className="input-group flex-nowrap mx-2">
              {searching ? <span className="fw-bold input-group-text"><span  id="search-loader"></span></span>  :
                <i
                className="bi bi-search fw-bold input-group-text"
                id="search-icon-title"
              ></i>
              }
              
              <input
                name="q"
                id='book-search'
                defaultValue={q}
                type="search"
                className="form-control border border-primary"
                placeholder="Search title.."
                aria-label="Search title"
                aria-describedby="search-icon-title"
                onChange={(e) => {
                  const isFirstSearch = q == null;
                  submit(e.currentTarget.form, {replace : !isFirstSearch,})}}
              />
            </div>
          </div>

          <div className="col-sm-6 my-2">
            <select
              name=""
              id=""
              className="form-select border border-primary"
              aria-label="Filter books"
            >
              <option defaultValue=""> Filter books</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="alphabet-slider"></div>
      </Form>
      {/*  End of querydiv */}
      <Alphabet />
      {navigation.state === 'loading' ? <div className="loader-container">
              <div id="loader"></div>
      </div>
       : <div className="row">{bookdivs}</div>}
      
    </div>
  );
};

export default Catalogue;
