import styled from "styled-components";

export const ScheduleCarouselContainer = styled.div``;

export const SlideContainer = styled.div`
   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const SlideCard = styled.div`
   width: 90%;
   background-color: #cee1dd;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   margin: 10px 0;
   padding: 10px 0;

   border-radius: 5px;

   border-bottom-color: #000;
   border-bottom-width: 1px;
   border-bottom-style: solid;

   #schedule-header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      line-height: 1;
      margin-bottom: 15px;

      h1 {
         margin: 0;
         margin-bottom: 5px;
      }
      h2 {
         font-weight: 300;
         margin: 0;
         margin-bottom: 5px;
      }
      h3 {
         font-weight: 300;
         margin: 0;
         opacity: 0.7;
      }
   }

   #time-schedule-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
   }
`;

type ScheduleTimeType = {
   scheduleStatus: string;
};

export const ScheduleTime = styled.span<ScheduleTimeType>`
   background-color: ${({ scheduleStatus }) => {
      if (scheduleStatus === "mine") return "#7AC061";
      if (scheduleStatus === "waiting") return "#D33737";
      return "#E5E5E5";
   }};

   color: ${({ scheduleStatus }) => {
      if (scheduleStatus === "waiting") return "#FFF";
      return "#000";
   }};

   opacity: ${({ scheduleStatus }) => scheduleStatus === "occupied" && 0.3};

   width: 100px;
   margin: 5px;

   padding: 2px;

   border-radius: 2px;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;
`;
