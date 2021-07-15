import React from "react";
import HeaderBar from "../../components/HeaderBar";
import ClientsScroll from "./components/ClientsScroll";

import { CustomersPageContainer } from "./styles";

const CustomersPage: React.FC = () => {
   return (
      <CustomersPageContainer>
         <HeaderBar>
            <h3 style={{ marginRight: "10px" }}>Clientes</h3>
         </HeaderBar>

         <ClientsScroll />
      </CustomersPageContainer>
   );
};

export default CustomersPage;
