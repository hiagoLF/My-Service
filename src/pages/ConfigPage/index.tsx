import React from "react";

import HeaderPage from "./components/HeaderPage";
import SettingsCollection from "./components/SettingsCollection";

import { ConfigPageContainer } from "./styles";

const ConfigPage: React.FC = () => {
   return (
      <ConfigPageContainer>
         <HeaderPage />
         <SettingsCollection />
      </ConfigPageContainer>
   );
};

export default ConfigPage;
