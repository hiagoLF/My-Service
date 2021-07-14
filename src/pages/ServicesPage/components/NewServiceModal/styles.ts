import styled from "styled-components";

export const ModalCard = styled.div`
   width: 100%;
   height: 200px;

   position: absolute;

   background-color: #fff;

   bottom: 0;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   #modal-title {
      font-size: 20px;
      line-height: 1;
      margin: 0 0 20px;
   }

   #search-service-container {
      width: 93%;

      margin-bottom: 20px;

      display: flex;
      justify-content: left;
      flex-direction: column;

      h4 {
         font-size: 14px;
         opacity: 0.5;
         line-height: 1;
         margin: 0 0 5px;
      }

      input {
         padding: 3px 10px;
         border: none;
         outline: none;
         font-size: 14px;
         margin-bottom: 5px;

         font-weight: 600;

         border-bottom-color: #000;
         border-bottom-width: 1px;
         border-bottom-style: solid;

         ::placeholder {
            opacity: 0.5;
         }
      }

      #service-confirmation {
         display: flex;
         align-items: flex-start;
         flex-direction: row;
         align-items: center;

         img {
            height: 24px;
         }

         span {
            font-size: 14px;
            color: #31b51c;
            font-weight: 600;
         }
      }

      #service-recusation {
         display: flex;
         align-items: flex-start;
         flex-direction: row;
         align-items: center;

         img {
            height: 24px;
         }

         span {
            font-size: 14px;
            color: #d33737;
            font-weight: 600;
         }
      }
   }

   button {
      width: 116px;
      height: 32px;

      background-color: #6d78ee;

      border-radius: 5px;
      border: none;

      span {
         font-size: 14px;
         font-weight: 600;
         color: #fff;
      }
   }
`;
