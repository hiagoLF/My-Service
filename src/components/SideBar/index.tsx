import React, { useEffect } from "react";

import {
   SideBarContainer,
   UserProfileContainer,
   NavigatorsContainer,
} from "./styles";

import pointIcon from "../../assets/icons/point.svg";
import adminIcon from "../../assets/icons/admin.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import { useSideBar } from "../../contexts/SideBarContext";
import { useHistory } from "react-router-dom";

const SideBar: React.FC = () => {
   const history = useHistory();
   const { sideBarInformations, setSideBarInformations } = useSideBar();

   // Temporária > Apenas para definir algumas informações do usuário
   useEffect(() => {
      setSideBarInformations({
         ...sideBarInformations,
         userProfileImage:
            "https://i.pinimg.com/originals/eb/94/5b/eb945ba0c7bf9030343ddd22e564f3ca.jpg",
         UserName: "Fernanda Gomes",
         email: "fenandi-89@gmail.com",
      });
   }, []);

   const handleSideBarLinkButtonClick = (navigateTo: string) => {
      setSideBarInformations({ ...sideBarInformations, open: false });
      setTimeout(() => {
         history.push(navigateTo);
      }, 300);
   };

   return (
      <SideBarContainer>
         <UserProfileContainer>
            <img src={sideBarInformations.userProfileImage} alt="Fernanda" />
            <h2>{sideBarInformations.UserName}</h2>
            <h3>{sideBarInformations.email}</h3>
         </UserProfileContainer>
         <NavigatorsContainer>
            <button onClick={() => handleSideBarLinkButtonClick("/")}>
               <img src={pointIcon} alt="Serviços" />
               <span>Serviços</span>
            </button>

            <button
               onClick={() =>
                  handleSideBarLinkButtonClick("/235164634345/admin")
               }
            >
               <img src={adminIcon} alt="Administração" />
               <span>Administração</span>
            </button>

            <button
               onClick={() =>
                  handleSideBarLinkButtonClick("/235164634345/config")
               }
            >
               <img src={settingsIcon} alt="Configurações" />
               <span>Configurações</span>
            </button>

            <button>
               <img src={logoutIcon} alt="Serviços" />
               <span>Sair</span>
            </button>
         </NavigatorsContainer>
      </SideBarContainer>
   );
};

export default SideBar;
