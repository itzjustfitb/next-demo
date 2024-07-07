import React, { useState } from "react";
import SearchResults from "../SearchResults";
import Card from "../Card";
import Categories from "../Categories";
import { DefaultBtn } from "../../assets/components.styles";

function Courses() {
  const [activeFilter, setActiveFilter] = useState(false);
  const courses = [
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
    {
      job: "UX/UI Designer",
      companyLogo: "https://avatars.githubusercontent.com/u/49068410?s=280&v=4",
      company: "Code Academy",
      image: "",
    },
  ];

  return (
    <section id="courses">
      <div className="courses__container">
        <div className="courses__top">
          <div className="courses__header">
            <h1>Let’s find you a course!</h1>
            <p>Explore courses from experienced, real-world experts</p>
          </div>
          <SearchResults
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div
          className={`courses__bottom ${
            activeFilter ? "active-container" : ""
          }`}
        >
          <Categories
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <div className="courses__cards">
            <div className="courses__cards-container">
              {courses.map((course, index) => (
                <Card key={index} course={course} />
              ))}
            </div>
            <DefaultBtn>See more</DefaultBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
