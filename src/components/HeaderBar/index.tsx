import React from "react";

import { HeaderBarContainer } from "./styles";

import menuIcon from "../../assets/icons/menu.svg";
import { useSideBar } from "../../contexts/SideBarContext";

const HeaderBar: React.FC = ({ children }) => {
   const { sideBarInformations, setSideBarInformations } = useSideBar();

   return (
      <HeaderBarContainer>
         <button
            onClick={() =>
               setSideBarInformations({ ...sideBarInformations, open: true })
            }
         >
            <img src={menuIcon} alt="SideBar" />
         </button>
         {children}
      </HeaderBarContainer>
   );
};

export default HeaderBar;
