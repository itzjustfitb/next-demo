import React from "react";
import { DefaultBtn, DefaultInput } from "../../../assets/components.styles";

function LoginForm() {
  return (
    <div className="auth__login">
      <div className="auth__login-header">
        <h1>Log in</h1>
        <p>Please login to continue to your account.</p>
      </div>
      <form>
        <DefaultInput placeholder="Email" type="email" />
        <DefaultInput placeholder="Password" type="password" />
        <DefaultBtn>Login</DefaultBtn>
      </form>
    </div>
  );
}

export default LoginForm;
