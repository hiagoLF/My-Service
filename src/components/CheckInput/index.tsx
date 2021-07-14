import React from "react";

import { CheckInputContainer } from "./styles";

import checkedIcon from "../../assets/icons/checked.svg";
import unCheckedIcon from "../../assets/icons/unchecked.svg";

type CheckInputType = {
   checked: boolean;
   onClick?: (checkValue: boolean) => void;
};

const CheckInput: React.FC<CheckInputType> = ({
   checked,
   children,
   onClick,
}) => {
   return (
      <CheckInputContainer onClick={() => onClick && onClick(!checked)}>
         <img src={checked ? checkedIcon : unCheckedIcon} alt="check-box" />
         {children}
      </CheckInputContainer>
   );
};

export default CheckInput;
