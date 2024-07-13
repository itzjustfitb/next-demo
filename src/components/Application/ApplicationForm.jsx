import React from "react";
import { DefaultBtn } from "../../assets/components.styles";
import { TextField } from "@mui/material";

function ApplicationForm({ setActiveStep, setActiveForm }) {
  return (
    <form className="application__form">
      <div className="application__form-inputs">
        <TextField
          className="application__form-input"
          label="Full Name"
          variant="outlined"
          type="text"
        />
        <TextField
          className="application__form-input"
          label="Email"
          variant="outlined"
          type="email"
        />
        <TextField
          className="application__form-input"
          label="Salary expectation"
          variant="outlined"
          type="number"
        />
        <TextField
          className="application__form-input"
          label="Currency"
          variant="outlined"
          type="number"
        />
        <TextField
          className="application__form-input"
          label="Start date"
          variant="outlined"
          type="number"
        />
      </div>
      <div className="application__upload">
        <div className="application__upload-content">
          <h1>Upload your CV</h1>
          <p>Upload your personal information.Make sure your file is proper.</p>
        </div>
        <div className="application__upload-input">
          <label>
            <div className="application__upload-input-content">
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="36"
                    viewBox="0 0 37 36"
                    fill="none"
                  >
                    <path
                      d="M32.2286 16.3492L18.7052 29.8727C15.6298 32.948 10.6436 32.948 7.56825 29.8727C4.49287 26.7973 4.49287 21.8111 7.56825 18.7357L21.0917 5.21231C23.1419 3.16206 26.466 3.16206 28.5163 5.21231C30.5665 7.26256 30.5665 10.5867 28.5163 12.6369L15.5232 25.63C14.4981 26.6551 12.836 26.6551 11.8109 25.63C10.7858 24.6049 10.7858 22.9428 11.8109 21.9177L23.213 10.5156"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p>Choose the file</p>
              </div>
              <p>Only PDF or DOCX file (max 2mb)</p>
            </div>
            <input type="file" />
          </label>
        </div>
      </div>
      <DefaultBtn
        onClick={() => {
          setActiveStep((prev) => prev + 1);
          setActiveForm(true);
        }}
      >
        Next
      </DefaultBtn>
    </form>
  );
}

export default ApplicationForm;
