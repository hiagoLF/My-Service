import styled from "styled-components";

export const PersonCardContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 5px;

   #card {
      width: 93%;
      background-color: #cee1dd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      border-radius: 5px;

      #profile-image {
         width: 50px;
         height: 50px;
         border-radius: 25px;
         object-fit: cover;
         margin-left: 7px;
      }

      #informations-container {
         display: flex;
         flex: 1;
      }

      #buttons-container {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: row;

         margin-right: 7px;

         img {
            height: 25px;
            width: 25px;
            margin-left: 5px;
         }
      }
   }
`;
