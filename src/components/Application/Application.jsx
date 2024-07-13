import React, { useState } from "react";
import ApplicationLetter from "./ApplicationLetter";
import ApplicationForm from "./ApplicationForm";

function Application({ setActiveModal }) {
  const [activeStep, setActiveStep] = useState(1);
  const [activeForm, setActiveForm] = useState(false);
  const steps = ["Personal information", "Motivation letter"];
  return (
    <section id="application">
      <div className="application__container">
        <div className="application__top">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M16.25 6.5L9.75 13L16.25 19.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="application__header">
            <h1>Apply for “UX/UI Designer” role in Hiring Company</h1>
            <p>Make sure you fill correct information about yourself.</p>
          </div>
        </div>
        <div className="application__bottom">
          <div className="application__progress">
            {steps.map((step, index) => {
              return (
                <div key={index} className="application__progress-row">
                  <div
                    className={`application__progress-step ${
                      activeStep === index + 1
                        ? "active"
                        : activeStep >= index + 1
                        ? "completed"
                        : ""
                    }`}
                  >
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </div>
                  <div
                    key={index}
                    className="application__progress-passage"
                  ></div>
                </div>
              );
            })}
          </div>

          {!activeForm ? (
            <ApplicationForm
              setActiveForm={setActiveForm}
              setActiveStep={setActiveStep}
            />
          ) : (
            <ApplicationLetter
              setActiveModal={setActiveModal}
              setActiveForm={setActiveForm}
              setActiveStep={setActiveStep}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Application;
