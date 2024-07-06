import React from "react";
import { DefaultBtn } from "../../assets/components.styles";

function HeaderAuth() {
  return (
    <div className="header__auth">
      <DefaultBtn href="/register" color="transparent">
        Sign in
      </DefaultBtn>
      <DefaultBtn href="/login" color="#FFE600">
        Login
      </DefaultBtn>
    </div>
  );
}

export default HeaderAuth;
