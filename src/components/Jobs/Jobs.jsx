import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import { courses, pageHeaderContent } from "../../constants";
import { DefaultBtn } from "../../assets/components.styles";

function Jobs({ activeFilter, setActiveFilter }) {
  return (
    <section id="jobs">
      <div className="jobs__container">
        <PageHeader
          content={pageHeaderContent}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <div
          className={`jobs__bottom ${activeFilter ? "active-container" : ""}`}
        >
          <Categories
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <div className="jobs__cards">
            <div className="jobs__cards-container">
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

export default Jobs;
