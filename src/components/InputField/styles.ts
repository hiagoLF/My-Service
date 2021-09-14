import styled from "styled-components";

export const InputFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  margin: 20px 0;

  label {
    font-size: 20px;
    font-weight: bold;
    opacity: 0.8;
    margin-bottom: 2px;
  }

  #input-field {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    img {
      opacity: 0.5;
    }

    input {
      flex: 1;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      outline: none;
      font-size: 16px;
      font-weight: bold;
      color: #000;

      ::placeholder {
        color: rgba(0,0,0,0.5);
      }
    }
  }
`;
