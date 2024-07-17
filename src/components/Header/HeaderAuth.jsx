import React from "react";
import { DefaultBtn } from "../../assets/components.styles";
import { Link } from "react-router-dom";

function HeaderAuth() {
  return (
    <div className="header__auth">
      <Link to="/register">
        <DefaultBtn>Sign in</DefaultBtn>
      </Link>
      <Link to="/login">
        <DefaultBtn>Login</DefaultBtn>
      </Link>
    </div>
  );
}

export default HeaderAuth;
