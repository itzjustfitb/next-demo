import React from "react";

function Card({ course }) {
  const { job, companyLogo, company, image } = course;

  return (
    <div className="card">
      <div className="card__top">
        <div className="card__header">
          <h1>{job}</h1>
          <div>
            <img src={companyLogo} alt={company + "Logo"} />
            <p>{company}</p>
          </div>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M8.25 16.5L13.75 11L8.25 5.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="card__bottom">
        <img src={image} alt={job} />
      </div>
    </div>
  );
}

export default Card;
