import styled from "styled-components";

export const SideBarContainer = styled.div`
   overflow: hidden;

   display: flex;
   align-items: center;
   flex-direction: column;
`;

export const UserProfileContainer = styled.div`
   margin-top: 40px;
   margin-bottom: 40px;
   display: flex;
   align-items: center;
   flex-direction: column;

   img {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 50px;
   }

   h2 {
      font-size: 16px;
      margin: 0;
      margin-top: 10px;
   }

   h3 {
      font-size: 12px;
      margin: 0;
      margin-top: 10px;
      opacity: 0.6;
   }
`;

export const NavigatorsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 90%;

   button {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 10px;
      background-color: rgba(0, 0, 0, 0);
      border: none;

      img {
         height: 24px;
         margin-right: 10px;
      }

      span {
         font-size: 14px;
         font-weight: 600;
      }
   }
`;
