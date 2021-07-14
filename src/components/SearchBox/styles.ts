import styled from "styled-components";

export const SearchBoxContainer = styled.div`
   height: 35px;

   display: flex;
   justify-content: flex-start;

   background-color: #fff;

   border-radius: 3px;

   border-bottom-color: #000;
   border-bottom-width: 1px;
   border-bottom-style: solid;

   img {
      height: 24px;
      margin: 0 20px 0 10px;
   }

   input {
      font-size: 19px;

      width: 100%;

      border: none;
      outline: none;

      ::placeholder {
         opacity: 0.4;
         color: #000;
         font-weight: 600;
      }
   }
`;
