import React, { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Card from "../Card/Card";
import Categories from "../Categories/Categories";
import { DefaultBtn } from "../../assets/components.styles";
import PageHeader from "../PageHeader/PageHeader";
import { courses, pageHeaderContent } from "../../constants";

function Courses({ activeFilter, setActiveFilter }) {
  return (
    <section id="courses">
      <div className="courses__container">
        <PageHeader
          content={pageHeaderContent}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
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
                <Card key={index} course={course} id={index} />
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
