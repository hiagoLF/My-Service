import React from "react";
import LoginCard from "./components/LoginCard";

import { LoginPageContainer } from './styles';

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <div id="login-header">My Service</div>

      <LoginCard />
      {/* <div>Login Card</div> */}

      <div id="fake-space"></div>
    </LoginPageContainer>
  );
};

export default LoginPage;
