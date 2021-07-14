import React from "react";
import styled from "styled-components";
import AvaliableServices from "./AvaliableServices";

import ColorPaletteSetting from "./ColorPaletteSetting/";
import RegisteredCustomers from "./RegisteredCustomers";
import ServiceImage from "./ServiceImage";
import ServiceSharingCode from "./ServiceSharingCode";

const SettingsCollection: React.FC = () => {
   return (
      <SettingsCollectionContainer>
         <ColorPaletteSetting />
         <ServiceSharingCode />
         <ServiceImage />
         <AvaliableServices />
         <RegisteredCustomers />
      </SettingsCollectionContainer>
   );
};

const SettingsCollectionContainer = styled.div`
   padding: 20px 0 50px 0;

   display: flex;

   flex-direction: column;
   align-items: center;

   height: 93%;
   width: 100%;

   overflow-y: scroll;
`;

export default SettingsCollection;
