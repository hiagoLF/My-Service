import React from "react";

import Slider from "infinite-react-carousel";

import {
   ScheduleCarouselContainer,
   SlideContainer,
   SlideCard,
   ScheduleTime,
} from "./styles";

import { days } from "./schedule.json";

type ScheduleCarouselType = {
   handleScheduleButtonClick: (
      day: string,
      date: string,
      status: string,
      time: string
   ) => void;
};

const ScheduleCarousel: React.FC<ScheduleCarouselType> = ({
   handleScheduleButtonClick,
}) => {
   const beforeHandleScheduleButtonClick = (
      day: string,
      date: string,
      status: string,
      time: string
   ) => {
      if (status === "occupied") {
         alert("Horário Já ocupado");
         return;
      }

      handleScheduleButtonClick(day, date, status, time);
   };

   return (
      <ScheduleCarouselContainer>
         <Slider>
            {days.map((day, dayIndex) => (
               <div key={dayIndex}>
                  <SlideContainer>
                     <SlideCard>
                        <div id="schedule-header">
                           <h1>{day.dayName}</h1>
                           <h2>Hoje</h2>
                           <h3>{day.dayDate}</h3>
                        </div>

                        <div id="time-schedule-container">
                           {day.vacancies.map((vacancie, vancancyIndex) => (
                              <ScheduleTime
                                 key={vancancyIndex}
                                 scheduleStatus={vacancie.status}
                                 onClick={() =>
                                    beforeHandleScheduleButtonClick(
                                       day.dayName,
                                       day.dayDate,
                                       vacancie.status,
                                       vacancie.time
                                    )
                                 }
                              >
                                 {vacancie.time}
                              </ScheduleTime>
                           ))}
                        </div>
                     </SlideCard>
                  </SlideContainer>
               </div>
            ))}
         </Slider>
      </ScheduleCarouselContainer>
   );
};

export default ScheduleCarousel;
