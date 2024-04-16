import React, { useEffect, useState } from "react";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import AuthorCard from "../components/AuthorCard/AuthorCard";
import AuthorForm from "../components/Forms/AuthorForm";

const AuthorSelection = () => {
  const { authors, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");



  const [newAuthor, setNewAuthor] = useState(false);

  useEffect(()=>{
    if(location.pathname.indexOf('new') > -1){
      setNewAuthor(true)
    }
  }, [])


 

  const handleclick = () => setNewAuthor((n) => !n);

  useEffect(() => {
    document.getElementById("author-search").value = q;
  }, [q]);

  const author_cards = authors.map((author) => (
    <AuthorCard key={author.id} author={author} />
  ));
  return (
    <>
      <div
        className={`container-fluid d-flex justify-content-center align-items-center ${location.pathname.indexOf('new') > -1 ? 'd-none': ''} `}
        id="author-selection"
      >
        <div className="card mb-3 border   rounded-end w-75 ">
          <Form>
            <div className="card-body ">
              <h2 className="card-title">Find Author</h2>
              <div className="row">
                <div className="input-group">
                  {searching ? (
                    <span className="fw-bold input-group-text">
                      <span id="search-loader"></span>
                    </span>
                  ) : (
                    <i
                      className="bi bi-search fw-bold input-group-text"
                      id="search-icon-title"
                    ></i>
                  )}
                  <input
                    type="search"
                    className="form-control"
                    id="author-search"
                    name="q"
                    defaultValue={q}
                    onChange={(e) => {
                      setNewAuthor(false);
                      const isFirstSearch = q == null;
                      submit(e.currentTarget.form, { replace: !isFirstSearch });
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-plus w-75 p-2 my-2 fw-bold"
                    onClick={handleclick}
                  >
                    {newAuthor ? "Select Author" : "New Author"}
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      {newAuthor ? (
        <AuthorForm />
      ) : (
        <div className="container-fluid">
          {navigation.state === "loading" ? (
            <div className="loader-container">
              <div id="loader"></div>
            </div>
          ) : (
            <div className="row">{author_cards}</div>
          )}
        </div>
      )}
    </>
  );
};

export default AuthorSelection;
