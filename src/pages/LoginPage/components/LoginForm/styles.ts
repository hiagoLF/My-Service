import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #credentials {
    width: 90%;
  }

  #submit-field {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    #login{
      background-color: #6D78EE;
      width: 147px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      color: #FFF;
      border: none;
      outline: none;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 10px;
    }

    span {
      font-size: 12px;
      opacity: 0.5;
    }

    #register{
      background-color: rgba(0,0,0,0);
      border: none;
      outline: none;
      font-size: 13px;
      font-weight: bold;
    }

  }
`;
