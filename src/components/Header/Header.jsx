import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";
import HeaderAuth from "./HeaderAuth";

function Header() {
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
        <img src={siteLogo} alt="Next Us" />
        <nav>
          {navigations.map((navigation, index) => (
            <Link key={index} to={navigation.value}>
              {navigation.label}
            </Link>
          ))}
        </nav>
        <HeaderAuth />
      </div>
    </header>
  );
}

export default Header;
