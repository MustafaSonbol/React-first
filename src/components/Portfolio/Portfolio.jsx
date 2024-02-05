import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faStar } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/images/poert1.png";
import image2 from "../../assets/images/port2.png";
import image3 from "../../assets/images/port3.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

const imagesList = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: image2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: image3,
    alt: "Image 3",
  },
];

export default function Portfolio() {
  function handleImg(e) {
    if (
      e.target.classList.contains("layer") ||
      e.target.classList.contains("flag")
    ) {
      console.log(e.target);
      document
        .querySelector(".img-display")
        .classList.replace("d-none", "d-flex");
      console.log(e.target.dataset.src);
      document
        .querySelector(".img-display img")
        .setAttribute("src", e.target.dataset.src);
    }
  }
  function closeImg(e) {
    if (e.target.classList.contains("img-display")) {
      document
        .querySelector(".img-display")
        .classList.replace("d-flex", "d-none");
    }
  }

  return (
    <>
      <div className="portfolio text-center mt-5 pt-5 pb-5">
        <div className="container">
          <h3 className="fs-1 fw-bold position-relative mb-5 mt-5">
            PORTFOLIO COMPONENT
            <span className=" bg-white d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <div className="row gy-5">
            {imagesList.map((i) => (
              <div className="col-md-4" key={i.id}>
                <div className="img-card position-relative">
                  <img className="w-100 rounded-3" src={i.src} alt={i.alt} />
                  <div
                    onClick={(e) => {
                      handleImg(e);
                    }}
                    className="layer"
                    data-src={i.src}
                  >
                    <FontAwesomeIcon
                      data-src={i.src}
                      className="flag display-2 fw-bolder"
                      icon={faPlus}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            ))}
            {imagesList.map((i) => (
              <div className="col-md-4" key={i.id}>
                <div className="img-card position-relative">
                  <img className="w-100 rounded-3" src={i.src} alt={i.alt} />
                  <div
                    onClick={(e) => {
                      handleImg(e);
                    }}
                    className="layer"
                    data-src={i.src}
                  >
                    <FontAwesomeIcon
                      data-src={i.src}
                      className="flag display-2 fw-bolder"
                      icon={faPlus}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          closeImg(e);
        }}
        className="img-display position-fixed h-100 w-100 d-flex justify-content-center align-items-center d-none"
      >
        <img src={""} alt="" />
      </div>
    </>
  );
}
