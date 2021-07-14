import styled from "styled-components";

export const ServiceSharingCodeContainer = styled.div`
   width: 70%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin-top: 5px;

   #sharing-square {
      background-color: #fff;
      border: 1px dashed #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 3px 10px;
      border-radius: 5px;

      span {
         font-size: 14px;
         font-weight: 600;
         margin-right: 8px;
      }

      img {
         height: 24px;
      }
   }
`;
