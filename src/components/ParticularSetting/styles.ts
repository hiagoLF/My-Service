import styled from "styled-components";

export const ParticularSettingContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   margin-bottom: 20px;
`;

export const SettingHeader = styled.div`
   width: 90%;
   display: flex;
   justify-content: left;
   align-items: center;
   flex-direction: row;

   img {
      height: 24px;
   }

   span {
      font-size: 15px;
      font-weight: 600;
      opacity: 0.7;
      margin-left: 8px;
   }
`;
