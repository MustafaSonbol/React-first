import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export default function Contact() {
  function showLabel(e) {
    if (e.target.value.length > 0) {
      document
        .querySelector("label." + e.target.id)
        .classList.add("label-show");
    } else {
      document
        .querySelector("label." + e.target.id)
        .classList.remove("label-show");
    }
  }

  return (
    <>
      <div className="contact text-center pt-5 mt-5 pb-5">
        <div className="container">
          <h3 className="fs-1 fw-bold position-relative mb-5 mt-4">
            CONATCT SECTION
            <span className=" bg-white d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <div className="row gy-5">
            <div className="col-md-12">
              <label className="userName" htmlFor="userName">
                userName
              </label>
              <input
                onKeyUp={(e) => {
                  showLabel(e);
                }}
                id="userName"
                type="text"
                placeholder="userName"
                className=" form-control w-75 py-4 mx-auto"
              />
            </div>
            <div className="col-md-12">
              <label className="userAge" htmlFor="userAge">
                userAge
              </label>
              <input
                onKeyUp={(e) => {
                  showLabel(e);
                }}
                id="userAge"
                type="text"
                placeholder="userAge"
                className=" form-control w-75 py-4 mx-auto"
              />
            </div>
            <div className="col-md-12">
              <label className="userEmail" htmlFor="userEmail">
                userEmail
              </label>
              <input
                onKeyUp={(e) => {
                  showLabel(e);
                }}
                id="userEmail"
                type="email"
                placeholder="userEmail"
                className=" form-control w-75 py-4 mx-auto"
              />
            </div>
            <div className="col-md-12">
              <label className="userPassword" htmlFor="userPassword">
                userPassword
              </label>
              <input
                onKeyUp={(e) => {
                  showLabel(e);
                }}
                id="userPassword"
                type="text"
                placeholder="userPassword"
                className=" form-control w-75 py-4 mx-auto"
              />
            </div>
            <button className=" rounded-2 p-3 offset-2">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
