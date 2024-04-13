import React from "react";

const AuthorCard = ({ author }) => {
  
  const birth_year = new Date(author.birth_year).getFullYear()
  const death_year = new Date(author.death_year).getFullYear()
  
  return (
    <div className="col-sm-6  col-md-4 my-2 ">
      <div className="card mb-3 border  rounded-end h-100 ">
        <div className="card-body ">
          <div className="row">
            <div className="col-4">
              <div className="img-div">
                <img
                  src={author.image}
                  alt="Author image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className=" col-8 author-info">
              <h5>{author.name}</h5>
              <p className="d-flex flex-nowrap text-secondary">
              <small>{ author.birth_year ? birth_year : '****' }</small> - <small>{author.death_year ? death_year : '****'}</small>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
