import React, { useEffect, useState } from "react";
import { useLoaderData, Form,  useSubmit } from "react-router-dom";

import PatronCard from "../components/PatronCard/PatronCard";

const Patrons = () => {
  const {patrons, q } = useLoaderData();
  const submit = useSubmit()
 
  useEffect(()=>{
   document.getElementById("q").value = q
  }, [q])

  const patron_cards = patrons.map((patron) => {
    return <PatronCard key={patron.id} patron={patron} />;
  });

  return (
    <div className="container-fluid">
      <div className="querydiv d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className="header d-flex justify-content-between ">
          <h2>Patrons</h2>
          <span className="count align-self-center rounded-pill border text-dark border-dark-subtle fw-bold px-1 mx-3">
            {patrons.length}
          </span>
        </div>
        <Form className="filter flex-grow-1" id="search-form" role="search" >
          <div className="my-2">
            <div className="input-group flex-nowrap mx-2">
              <i
                className="bi bi-filter-right fw-bold input-group-text"
                id="search-icon-title"
              ></i>
              <input
              name="q"
              id="q"
                type="search"
                className="form-control border border-primary"
                placeholder="Search patron name, email or id.........."
                aria-label="Search title"
                aria-describedby="search-icon-title"
                defaultValue={q}
                onChange={(e) =>submit(e.currentTarget.form)}
              />
            </div>
          </div>
        </Form>
      </div>

      <div className="patron-list">
        <div className="row">{patron_cards}</div>
      </div>
    </div>
  );
};

export default Patrons;
