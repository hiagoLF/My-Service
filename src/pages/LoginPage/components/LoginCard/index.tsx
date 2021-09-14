import React from "react";
import LoginForm from "../LoginForm";

import { LoginCardContainer } from "./styles";

const LoginCard: React.FC = () => {
  return (
    <LoginCardContainer>
      <div id="login-card-header">Login</div>

      <LoginForm />
    </LoginCardContainer>
  );
};

export default LoginCard;
