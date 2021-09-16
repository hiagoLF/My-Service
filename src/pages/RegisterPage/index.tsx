import React, { useState } from "react";

import { RegisterPageContainer } from "./styles";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegisterButtonClick = (
  ) => {
    alert(email + password + name)
  };

  return (
    <RegisterPageContainer>
      <h1>Registrar</h1>
      <form action="">
        <div className="input-field">
          <label htmlFor="name">Nome: </label>
          <input
            id="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Senha: </label>
          <input
            id="password"
            type="text"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button onClick={handleRegisterButtonClick}>Registrar</button>
      </form>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
