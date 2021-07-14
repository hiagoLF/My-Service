import React from "react";

import { AdminHeaderBarContainer } from "./styles";

import HeaderBar from "../../../../components/HeaderBar/";

const AdminHeaderBar: React.FC = () => {
   return (
      <HeaderBar>
         <AdminHeaderBarContainer>
            <h3>Administração</h3>
            <h4>Salão Bela Hair</h4>
         </AdminHeaderBarContainer>
      </HeaderBar>
   );
};

export default AdminHeaderBar;
