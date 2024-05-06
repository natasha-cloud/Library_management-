import React, {useState } from "react";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import BookSelection from "../components/Selections/BookSelection";
import PatronSelection from "../components/Selections/PatronSelection";
import BookCopySelection from "../components/Selections/BookCopySelection";
import axios from "axios";

import blankimg from "@/assets/images/blank-profile.png";
import IssuesTabel from "../components/tabels/IssuesTabel";


const IssueBook = () => {
  const action_data = useActionData();
  const issues = useLoaderData()
  const [bookcopies, setbookCopies] = useState([]);


  const getbookcopies = async (book_id) => {
    console.log("Hello");
    try {
      const response = await axios.get(`/api/book/book_copies/${book_id}/`);
      setbookCopies(response.data);
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-issue-form-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-issue-form"
            type="button"
            role="tab"
            aria-controls="nav-issue-form"
            aria-selected="true"
          >
            Issue book form
          </button>
          <button
            className="nav-link"
            id="nav-issue-history-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-issue-history"
            type="button"
            role="tab"
            aria-controls="nav-issue-history"
            aria-selected="false"
          >
            Issue history
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-issue-form"
          role="tabpanel"
          aria-labelledby="nav-issue-form-tab"
          tabIndex="0"
        >
          <Form className="container-fluid" method="post">
            <div className="row">
              <div className="col-md-6 my-2">
                <BookSelection onSelect={getbookcopies} />
              </div>
              <div className="col-md-6 my-2">
                <BookCopySelection bookcopies={bookcopies} />
              </div>
              <div className="col my-2">
                <PatronSelection />
              </div>
            </div>
          </Form>
        </div>
        <div
          className="tab-pane fade"
          id="nav-issue-history"
          role="tabpanel"
          aria-labelledby="nav-issue-history-tab"
          tabIndex="0"
        >
        {issues  && <IssuesTabel issues={issues}/> }
       
        </div>
      </div>
    </div>
  );
};

export default IssueBook;
