import React from "react";

import { AvaliableServicesContainer } from "./styles";

import ParticularSetting from "../../../../../components/ParticularSetting";
import ServiceCheckItem from "./ServiceCheckItem/";
import suitcaseIcon from "../../../../../assets/icons/suitcase.svg";

import AddNewService from "./AddNewService/";

const services = [
   {
      name: "Progressiva",
      schedules: 2,
      available: true,
   },
   {
      name: "Corte Feminino",
      schedules: 1,
      available: false,
   },
   {
      name: "Corte Masculino",
      schedules: 1,
      available: false,
   },
];

const AvaliableServices: React.FC = () => {
   return (
      <ParticularSetting title="Serviços" settingIcon={suitcaseIcon}>
         <AvaliableServicesContainer>
            <div id="services-checklist">
               {services.map((service, index) => (
                  <ServiceCheckItem service={service} key={index} />
               ))}
            </div>

            <AddNewService />
         </AvaliableServicesContainer>
      </ParticularSetting>
   );
};

export default AvaliableServices;
