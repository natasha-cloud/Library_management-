import React from "react";
import { Link } from "react-router-dom";



const PatronCard = ({ patron }) => {
  return (
    <div className="col-md-6  col-mb-3 my-2">
      <div className="card mb-3 ">
        <div className="row g-0">
          <div className="col-sm-4">
            <img
              src={patron.profile_image}
              alt="Profile Image"
              className="img-fluid rounded-start h-100"
            />
          </div>
          <div className="col-sm-8">
            <div className="card-body h-100">
              <Link>
              <h5 className="card-title">{ patron.full_name }</h5>
              </Link>
              <div className="my-1 d-flex flex-wrap">
              <span className="card-text fw-bold me-2">Email:</span><span>{patron.email}</span>
              </div>
             <div className="my-1  d-flex flex-wrap">
             <span className="card-text fw-bold me-2">Phone Number:</span><span>{patron.phone_number}</span>
             </div>
             <div className="my-1  d-flex flex-wrap">
             <span className="card-text fw-bold me-2">Date joined:</span><span>{patron.date_joined}</span>
             </div>
              <p className="card-text">
                <small className="text-body-secondary ">Last updated: { patron.last_updated}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatronCard;
