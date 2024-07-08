import React, { useState } from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";
import HeaderAuth from "./HeaderAuth";
import HeaderControls from "./HeaderControls";

function Header() {
  const [authActive, setAuthActive] = useState(true);
  const [navigationActive, setNavigationActive] = useState("");

  const navigations = [
    {
      label: "Courses",
      value: "/courses",
    },
    {
      label: "Jobs",
      value: "/jobs",
    },
    {
      label: "Events",
      value: "/events",
    },
    {
      label: "Network",
      value: "/network",
    },
    {
      label: "Members",
      value: "/members",
    },
    {
      label: "Contacts",
      value: "/contacts",
    },
  ];

  return (
    <header>
      <div className="header__container">
        <Link to="/">
          <img src={siteLogo} alt="Next Us" />
        </Link>
        <nav>
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              className={
                navigation.label === navigationActive ? "active-navigation" : ""
              }
              to={navigation.value}
              onClick={() => setNavigationActive(navigation.label)}
            >
              {navigation.label}
            </Link>
          ))}
        </nav>
        {authActive ? <HeaderControls /> : <HeaderAuth />}
      </div>
    </header>
  );
}

export default Header;
