import styled from "styled-components";

export const ScheduleModalContainer = styled.div`
   width: 100%;
   position: relative;
   z-index: 5;
`;

type ScheduleModalCardProps = {
   timeStatus: string;
};

export const ScheduleModalCard = styled.div<ScheduleModalCardProps>`
   background-color: #fff;
   position: absolute;

   bottom: 0;

   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   padding: 25px 0;

   h3 {
      font-size: 20px;
      margin: 0;
      margin-bottom: 10px;
   }

   p {
      font-size: 15px;
      margin: 0;
      opacity: 0.5;

      display: flex;
      flex-direction: column;
      text-align: center;

      margin-bottom: 10px;
   }

   span {
      background-color: ${({ timeStatus }) => {
         if (timeStatus === "mine") return "#7AC061";
         if (timeStatus === "waiting") return "#D33737";
         return "#FFF";
      }};

      color: ${({ timeStatus }) => {
         if (timeStatus === "waiting") return "#FFF";
         if (timeStatus === "free") return "rgba(0,0,0,0.3)";
         return "#000";
      }};

      border-color: ${({ timeStatus }) => {
         if (timeStatus === "waiting") return "#FFF";
         return "#000";
      }};

      font-size: ${({ timeStatus }) => {
         if (timeStatus === "waiting") return "13px";
         return "16px";
      }};

      border: 1px dotted;
      border-style: dashed;
      border-radius: 3px;
      font-weight: 500;

      padding: 5px 10px;

      margin-bottom: 10px;
   }

   button {
      border: none;

      background-color: ${({ timeStatus }) => {
         if (timeStatus === "free") return "#6d78ee";
         return "rgba(211, 55, 55, 0.7)";
      }};
      border-radius: 5px;
      padding: 5px 20px;

      color: ${({ timeStatus }) => {
         if (timeStatus === "free") return "#FFF";
         return "rgba(0,0,0,0.8)";
      }};
      font-weight: 600;

      margin-bottom: 10px;
   }
`;
