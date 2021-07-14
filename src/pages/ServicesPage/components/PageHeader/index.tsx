import React from "react";

// import { Container } from './styles';

import SearchBox from "../../../../components/SearchBox";

import HeaderBar from "../../../../components/HeaderBar/";

const PageHeader: React.FC = () => {
   return (
      <HeaderBar>
         <SearchBox />
      </HeaderBar>
   );
};

export default PageHeader;
