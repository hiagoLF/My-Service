import React, { useState } from "react";

import { ServicesPageContainer } from "./styles";

import PageHeader from "./components/PageHeader/";
import PageBody from "./components/PageBody/";
import NewServiceModal from "./components/NewServiceModal/";

const ServicesPage: React.FC = () => {
   const [newServiceModalOpen, setNewServicemodalOpen] =
      useState<boolean>(false);

   return (
      <ServicesPageContainer>
         <PageHeader />
         <PageBody
            onAddServiceButtonClick={() => setNewServicemodalOpen(true)}
         />
         <NewServiceModal
            onModalRequestClose={() => setNewServicemodalOpen(false)}
            open={newServiceModalOpen}
         />
      </ServicesPageContainer>
   );
};

export default ServicesPage;
