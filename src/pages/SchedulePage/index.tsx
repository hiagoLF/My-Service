import React, { useState } from "react";

import { SchedulePageContainer, HeaderBarText } from "./styles";
import HeaderBar from "../../components/HeaderBar/";
import ScheduleCarousel from "./components/ScheduleCarousel/";

import ScheduleModal from "./components/ScheduleModal/";

const SchedulePage: React.FC = () => {
   const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
   const [scheduleModalInformations, setScheduleModalInformations] = useState({
      day: "",
      date: "",
      status: "",
      time: "",
   });

   const handleScheduleButtonClick = (
      day: string,
      date: string,
      status: string,
      time: string
   ) => {
      setScheduleModalInformations({
         day,
         date,
         status,
         time,
      });
      setScheduleModalOpen(true);
   };

   return (
      <SchedulePageContainer>
         <ScheduleModal
            modalOpen={scheduleModalOpen}
            onModalRequestClose={() => setScheduleModalOpen(false)}
            scheduleModalInformations={scheduleModalInformations}
         />

         <HeaderBar>
            <HeaderBarText>
               <h3>Agenda</h3>
               <h4>Salão Bela Hair</h4>
            </HeaderBarText>
         </HeaderBar>

         <ScheduleCarousel
            handleScheduleButtonClick={handleScheduleButtonClick}
         />
      </SchedulePageContainer>
   );
};

export default SchedulePage;
