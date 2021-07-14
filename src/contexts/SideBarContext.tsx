import { createContext, useContext, useState } from "react";
import Sidebar from "react-sidebar";
import SideBarContents from "../components/SideBar";

type SideBarInformationsType = {
   open: boolean;
   userProfileImage: string;
   UserName: string;
   email: string;
};

type SideBarContextPropsType = {
   sideBarInformations: SideBarInformationsType;
   setSideBarInformations: (informations: SideBarInformationsType) => void;
};

const SideBarContext = createContext<SideBarContextPropsType>({
   sideBarInformations: {
      open: false,
      userProfileImage: "",
      UserName: "",
      email: "",
   },
   setSideBarInformations: (informations) =>
      console.warn("no informations provided"),
});

export const SideBarProvider: React.FC = ({ children }) => {
   const [sideBarInformations, setSideBarInformations] =
      useState<SideBarInformationsType>({
         open: false,
         userProfileImage: "",
         UserName: "",
         email: "",
      });

   return (
      <SideBarContext.Provider
         value={{ sideBarInformations, setSideBarInformations }}
      >
         <Sidebar
            sidebar={<SideBarContents />}
            open={sideBarInformations?.open}
            onSetOpen={(open) =>
               setSideBarInformations({ ...sideBarInformations, open })
            }
            styles={{
               sidebar: { background: "#FFF0F0", width: "80%", zIndex: "11" },
               overlay: {
                  zIndex: "10",
               },
            }}
         >
            {children}
         </Sidebar>
      </SideBarContext.Provider>
   );
};

export const useSideBar = () => useContext(SideBarContext);
