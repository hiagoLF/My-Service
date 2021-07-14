import React from "react";

import { SearchBoxContainer } from "./styles";

import searchIcon from "../../assets/icons/search.svg";

const SearchBox: React.FC = () => {
   return (
      <SearchBoxContainer
         style={{
            width: "200px",
            marginRight: "15px",
         }}
      >
         <img src={searchIcon} alt="Search" />
         <input type="text" placeholder="Buscar" />
      </SearchBoxContainer>
   );
};

export default SearchBox;
