import React from "react";
import HeaderBar from "../../../../components/HeaderBar";

import { HeaderPageContent } from "./styles";

const HeaderPage: React.FC = () => {
   return (
      <HeaderBar>
         <HeaderPageContent>
            <span>Configurações</span>
         </HeaderPageContent>
      </HeaderBar>
   );
};

export default HeaderPage;
