import React, { ChangeEventHandler, useState } from "react";

import { AddNewServiceContainer } from "./styles";

import addIcon from "../../../../../../assets/icons/add.svg";

const AddNewService: React.FC = () => {
   const [scheduleNumber, setScheduleNumber] = useState<number>();

   const handleScheduleNumberInputChange: ChangeEventHandler<HTMLInputElement> =
      (event) => {
         const number = parseInt(event.target.value);
         if (isNaN(number)) {
            setScheduleNumber(0);
            return;
         }
         setScheduleNumber(number);
      };

   return (
      <AddNewServiceContainer>
         <input type="text" id="service-name" placeholder="Nome" />

         <input
            type="text"
            id="schedule-number-input"
            placeholder="Horas"
            onChange={handleScheduleNumberInputChange}
            value={scheduleNumber}
         />

         <button id="submit-new-service">
            <img src={addIcon} alt="Add service" />
         </button>
      </AddNewServiceContainer>
   );
};

export default AddNewService;
