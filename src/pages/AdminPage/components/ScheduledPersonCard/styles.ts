import styled from "styled-components";

export const PersonCardContent = styled.div`
   padding: 0 4px;
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   font-size: 13px;

   h3,
   span {
      margin: 0;
      padding: 0;
      line-height: 1;
      font-weight: 600;
   }

   span {
      opacity: 0.6;
      margin-top: 4px;
   }
`;
