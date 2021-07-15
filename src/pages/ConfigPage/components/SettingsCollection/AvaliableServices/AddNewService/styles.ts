import styled from "styled-components";

export const AddNewServiceContainer = styled.div`
   width: 95%;

   justify-content: space-between;
   align-items: center;

   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;

   input {
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.4);
      outline: none;
      font-size: 18px;
      padding: 6px;
      border-radius: 5px;
      font-weight: 600;
      margin-right: 4px;
   }

   #service-name {
      width: 60%;
   }

   #schedule-number-input {
      width: 20%;
   }

   button {
      border: 1px solid #000;
      background-color: #f2f2f2;
      outline: none;
      border-radius: 5px;
   }
`;
