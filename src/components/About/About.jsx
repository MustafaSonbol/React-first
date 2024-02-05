import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  return (
    <>
      <div className="about text-white mt-5">
        <div className="container">
          <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="about-body text-center">
              <h3 className="fs-1 fw-bold position-relative mb-5">
                ABOUT COMPONENT
                <span className="home-bg d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h3>
              <div className="row px-md-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
                <div className="col-md-6">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
