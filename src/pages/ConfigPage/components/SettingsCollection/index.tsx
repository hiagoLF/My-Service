import React from "react";
import styled from "styled-components";
import AvaliableServices from "./AvaliableServices";

import ColorPaletteSetting from "./ColorPaletteSetting/";
import ServiceImage from "./ServiceImage";
import ServiceSharingCode from "./ServiceSharingCode";

const SettingsCollection: React.FC = () => {
   return (
      <SettingsCollectionContainer>
         <ColorPaletteSetting />
         <ServiceSharingCode />
         <ServiceImage />
         <AvaliableServices />
      </SettingsCollectionContainer>
   );
};

const SettingsCollectionContainer = styled.div`
   display: flex;

   padding: 10px 0 20px;

   flex-direction: column;
   align-items: center;

   width: 100%;
   overflow-y: scroll;
`;

export default SettingsCollection;
