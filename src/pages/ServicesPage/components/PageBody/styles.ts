import styled from "styled-components";

export const PageBodyContainer = styled.div`
   display: flex;

   flex-direction: column;
   align-items: center;

   flex: 1;
   width: 100%;

   background-color: #fff0f0;

   overflow-y: auto;
`;

export const AddServiceButton = styled.button`
   display: flex;

   flex-direction: column;
   justify-content: center;
   align-items: center;

   width: 45px;

   background-color: #ffb6b9;

   border-radius: 5px;

   border: 1px solid #cfc5c5;
   outline: none;

   margin-top: 10px;
   margin-bottom: 10px;

   img {
      height: 24px;
      margin: 5px 0 5px;
   }
`;

export const ServiceCard = styled.div`
   width: 85%;

   margin-bottom: 10px;

   img {
      width: 100%;
      border-radius: 5px;
   }
`;
