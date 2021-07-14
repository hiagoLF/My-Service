import React from "react";

import { PageBodyContainer, AddServiceButton, ServiceCard } from "./styles";

import addIcon from "../../../../assets/icons/add.svg";
import { useHistory } from "react-router-dom";

const services = [
   {
      imageUrl:
         "https://img.elo7.com.br/product/zoom/2C660CF/arte-digital-logo-salao-de-beleza-e-estetica-logo-para-doceiras.jpg",
      serviceName: "Salão Bell Shalon",
   },
   {
      imageUrl:
         "https://i.pinimg.com/originals/1e/20/a0/1e20a084f9c6f0095a71e9938ae4fb73.jpg",
      serviceName: "Salão Bell Shalon",
   },
   {
      imageUrl:
         "https://img.elo7.com.br/product/original/3790BCC/logotipo-personalizado-para-espaco-estudio-e-salao-de-beleza-cabeleireiras.jpg",
      serviceName: "Salão Bell Shalon",
   },
   {
      imageUrl:
         "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F09%2F12%2F13%2FWDL-Logo-7045_19156_041214376_1949531640.jpg",
      serviceName: "Salão Bell Shalon",
   },
];

type PageBodyProps = {
   onAddServiceButtonClick: () => void;
};

const PageBody: React.FC<PageBodyProps> = ({ onAddServiceButtonClick }) => {
   const history = useHistory();

   return (
      <PageBodyContainer>
         <AddServiceButton onClick={onAddServiceButtonClick}>
            <img src={addIcon} alt="Add Service" />
         </AddServiceButton>

         {services.map((service, index) => (
            <ServiceCard key={index}>
               <img
                  onClick={() => history.push("/identidade/schedule")}
                  src={service.imageUrl}
                  alt={service.serviceName}
               />
            </ServiceCard>
         ))}
      </PageBodyContainer>
   );
};

export default PageBody;
