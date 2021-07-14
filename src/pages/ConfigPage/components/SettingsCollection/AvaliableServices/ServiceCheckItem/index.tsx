import React from "react";
import CheckInput from "../../../../../../components/CheckInput";

import { ServiceCheckItemContainer } from "./styles";

import deleteIcon from "../../../../../../assets/icons/delete-black.svg";

type ServiceCheckItemProps = {
   service: {
      name: string;
      schedules: number;
      available: boolean;
   };
};

const ServiceCheckItem: React.FC<ServiceCheckItemProps> = ({ service }) => {
   return (
      <ServiceCheckItemContainer>
         <div id="check-container">
            <CheckInput checked={service.available}>
               <span>
                  {service.name} - {service.schedules} Horário
                  {service.schedules > 1 && "s"}
               </span>
            </CheckInput>
            <img src={deleteIcon} alt="" id="delete-icon" />
         </div>
      </ServiceCheckItemContainer>
   );
};

export default ServiceCheckItem;
