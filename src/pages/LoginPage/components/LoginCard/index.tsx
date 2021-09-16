import React from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import api from "../../../../services/api";
// import LoginForm from "../LoginForm";
import { useSideBar } from "../../../../contexts/SideBarContext";

import { LoginCardContainer } from "./styles";
import { useHistory } from "react-router";

const LoginCard: React.FC = () => {
  const { setSideBarInformations } = useSideBar();
  const history = useHistory()

  const handleGoogleLogin = async (googleData: GoogleLoginResponse) => {
    console.log(googleData);
    const loginResult = await api.post("/login", { token: googleData.tokenId });
    console.log(loginResult.data);
    if (!loginResult.data) {
      alert("Não Foi possível obter os dados do usuário");
      return;
    }
    const { email, imageUrl, name } = googleData.profileObj;
    setSideBarInformations({
      UserName: name,
      email: email,
      userProfileImage: imageUrl,
      open: false,
    });

    history.push('/')
  };

  return (
    <LoginCardContainer>
      <div id="login-card-header">Login</div>

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || ""}
        buttonText="Login com o Google"
        onSuccess={handleGoogleLogin as any}
        onFailure={handleGoogleLogin}
        cookiePolicy={"single_host_origin"}
      />
      {/* <LoginForm /> */}

      <div id="google-login-description">
        Caso não possua uma conta, seu perfil será registrado assim que fazer
        login com o Google
      </div>
    </LoginCardContainer>
  );
};

export default LoginCard;
