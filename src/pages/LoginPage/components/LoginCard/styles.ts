import styled from "styled-components";

export const LoginCardContainer = styled.div`

  width: 90%;
  height: 340px;
  border-radius: 5px;
  background-color: #FFB6B6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  #login-card-header {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
  }

  #google-login-description {
    font-size: 15px;
    text-align: center;
    opacity: 0.5;
    margin: 0 10px 20px 10px;
  }
`;
