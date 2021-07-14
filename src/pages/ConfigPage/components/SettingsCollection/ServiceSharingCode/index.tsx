import React from "react";
import ParticularSetting from "../../../../../components/ParticularSetting";
import copy from "copy-to-clipboard";

import { ServiceSharingCodeContainer } from "./styles";

import keyIcon from "../../../../../assets/icons/key.svg";
import copyIcon from "../../../../../assets/icons/copy.svg";

const ServiceSharingCode: React.FC = () => {
   return (
      <ParticularSetting
         title="Código para compartilhamento"
         settingIcon={keyIcon}
      >
         <ServiceSharingCodeContainer>
            <div id="sharing-square" onClick={() => copy("s8lcsfa")}>
               <span>s8lcsfa</span>
               <img src={copyIcon} alt="Copy" />
            </div>
         </ServiceSharingCodeContainer>
      </ParticularSetting>
   );
};

export default ServiceSharingCode;
