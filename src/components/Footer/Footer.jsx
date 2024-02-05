import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top text-center text-white p-md-5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-4">
                <h4>Location</h4>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4">
                <h4>AROUND THE WEB</h4>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>ABOUT FREELANCER</h4>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center text-white py-3">
          <div className="container">
            <p className=" p-0 m-0">Copyright © Your Website 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}
