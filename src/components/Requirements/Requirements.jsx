import React, { useState } from "react";
import { DefaultBtn } from "../../assets/components.styles";

function Requirements() {
  const [saveActive, setSaveActive] = useState(false);

  const requirementsDetails = [
    {
      label: "Salary",
      value: 20,
    },
    {
      label: "Job type",
      value: "Part - time",
    },
    {
      label: "Skill",
      value: "Junior",
    },
    {
      label: "Number of Applicants",
      value: [20, 50],
    },
    {
      label: "Deadline",
      value: "26 may",
    },
  ];

  const descriptionAndRequirements = [
    {
      label: "Job Description",
      fields: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
    {
      label: "Requirements",
      fields: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      ],
    },
  ];

  const requirementsCategories = [
    {
      label: "Field",
      value: "UX/UI designer",
    },
    {
      label: "Job type",
      value: "Full time",
    },
    {
      label: "Deadline",
      value: "29 Jun",
    },
    {
      label: "Location",
      value: "Baku,Azerbaijan",
    },
  ];

  return (
    <section id="requirements">
      <div className="requirements__container">
        <div className="requirements__top">
          <h1>UI Designer</h1>
          <p>Code Academy</p>
        </div>
        <div className="requirements__bottom">
          <div className="requirements__categories">
            <div className="requirements__categories-container">
              {requirementsCategories.map((category, index) => (
                <div className="requirements__categories-row">
                  <span>
                    {category.label === "Field" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : category.label === "Job type" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : category.label === "Deadline" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : category.label === "Location" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </span>
                  <div className="requirements__categories-row-content">
                    <h1>{category.label}</h1>
                    <p>{category.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <DefaultBtn className="requirements__apply">Apply now</DefaultBtn>
          </div>
          <div className="requirements__content">
            <div className="requirements__content-top">
              <div className="requirements__content-header">
                <img
                  src="https://avatars.githubusercontent.com/u/49068410?s=280&v=4"
                  alt=""
                />
                <div>
                  <h1>Code Academy</h1>
                  <p>UI Designer</p>
                  <span>California - Onsite</span>
                </div>
              </div>
              <span
                className={saveActive ? "save-active" : ""}
                onClick={() => setSaveActive(!saveActive)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                >
                  <path
                    d="M8.33301 13C8.33301 10.1997 8.33301 8.79961 8.87798 7.73005C9.35734 6.78924 10.1222 6.02433 11.0631 5.54497C12.1326 5 13.5327 5 16.333 5H23.6663C26.4666 5 27.8667 5 28.9363 5.54497C29.8771 6.02433 30.642 6.78924 31.1214 7.73005C31.6663 8.79961 31.6663 10.1997 31.6663 13V35L19.9997 28.3333L8.33301 35V13Z"
                    stroke="#181818"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="requirements__content-details">
              {requirementsDetails.map((detail, index) => (
                <div key={index} className="requirements__content-detail">
                  <h1>{detail.label}</h1>
                  {detail.label === "Salary" ? (
                    <p>
                      $ {detail.value} / <span>hour</span>
                    </p>
                  ) : detail.label === "Number of Applicants" ? (
                    <p>
                      {detail.value[0]} / <span>{detail.value[1]}</span>
                    </p>
                  ) : (
                    <p>{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="requirements__buttons">
              <DefaultBtn color="#FFE81D">Description</DefaultBtn>
              <DefaultBtn color="#fff">Company</DefaultBtn>
            </div>
            {descriptionAndRequirements.map((row, index) => (
              <div key={index} className="requirements__row">
                <h1>{row.label}</h1>
                <ul className="requirements__row-fields">
                  {row.fields.map((field, index) => (
                    <li key={index}>{field}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requirements;
