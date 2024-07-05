import React from "react";
import { DefaultBtn } from "../../assets/components.styles";

function HeaderAuth() {
  return (
    <div className="header__auth">
      <DefaultBtn color="transparent">Sign in</DefaultBtn>
      <DefaultBtn color="#FFE600">Login</DefaultBtn>
    </div>
  );
}

export default HeaderAuth;
