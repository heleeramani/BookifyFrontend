import React from "react";
import "../style/AuthorUpdate.css";
import Updateimage from '../images/updateimage.jpg';

const AuthorUpdate = () => {

  return (
    <div className="authorupdate-wrap">
      <div className="authorupdate-container">
        <div className="card1 mt-5 card-height">
          <div className="row g-0 text-center">
            <div className="col-md-6 back-color p-3">
              <div className="card-body1">
                <h3 className="card-title1 text-light title-text">
                  Stay in Touch with Our Updates
                </h3>
                <p className="card-text1">
                  <a href="/author" title="authors">
                    More Info <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img 
                src={Updateimage}  // Correct way to pass the imported image
                className="img-fluid rounded-start"
                alt="Update"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorUpdate;
