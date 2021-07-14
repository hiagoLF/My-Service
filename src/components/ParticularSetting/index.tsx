import React from "react";

import { ParticularSettingContainer, SettingHeader } from "./styles";

type ParticularSettingType = {
   title: string;
   settingIcon: string;
};

const ParticularSetting: React.FC<ParticularSettingType> = ({
   title,
   settingIcon,
   children,
}) => {
   return (
      <ParticularSettingContainer>
         <SettingHeader>
            <img src={settingIcon} alt="Configuração" />
            <span>{title}</span>
         </SettingHeader>
         {children}
      </ParticularSettingContainer>
   );
};

export default ParticularSetting;
