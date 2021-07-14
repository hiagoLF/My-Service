import styled from "styled-components";

export const ServiceCheckItemContainer = styled.div`
   width: 100%;
   margin-bottom: 5px;
   border: 1px solid rgba(0, 0, 0, 0.5);
   padding: 5px 0;
   border-radius: 5px;

   background-color: #fff;

   #check-container {
      margin: 0 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
         opacity: 0.7;
         font-weight: 600;
         margin-left: 5px;
      }
      img {
         height: 20px;
      }
   }
`;
