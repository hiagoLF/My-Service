import React from "react";

import { LoginFormContainer } from "./styles";
import emailIcon from "../../../../assets/icons/email.svg";
import passwordIcon from "../../../../assets/icons/lock.svg";
import InputField from "../../../../components/InputField";

const LoginForm: React.FC = () => {
  return (
    <LoginFormContainer>
      <form action="">
        <div id="credentials">
          <InputField
            title="Email"
            placeholder="Digite o seu email"
            icon={emailIcon}
            inputType='email'
          />
          <InputField
            title="Senha"
            placeholder="Digite a sua senha"
            icon={passwordIcon}
            inputType='password'
          />
        </div>

        <div id="submit-field">
          <button id='login'>Entrar</button>
          <span>ou</span>
          <button id='register'>Registrar</button>
        </div>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
