import React from "react";
import ParticularSetting from "../../../../../components/ParticularSetting";

import { ServiceImageContainer } from "./styles";
import cameraIcon from "../../../../../assets/icons/camera.svg";

const ServiceImage: React.FC = () => {
   return (
      <ParticularSetting
         title="Imagem de Apresentação"
         settingIcon={cameraIcon}
      >
         <ServiceImageContainer>
            <img
               src="https://img.elo7.com.br/product/zoom/2C660CF/arte-digital-logo-salao-de-beleza-e-estetica-logo-para-doceiras.jpg"
               alt="Imagem do serviço"
            />
         </ServiceImageContainer>
      </ParticularSetting>
   );
};

export default ServiceImage;
