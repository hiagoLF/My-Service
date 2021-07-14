import React from "react";

import { PersonCardContainer } from "./styles";

import deleteRedIcon from "../../assets/icons/delete-red.svg";
import acceptGreenIcon from "../../assets/icons/check-green.svg";

type PersonCardType = {
   personImageUrl?: string;
   personStatus?: string;
};

const PersonCard: React.FC<PersonCardType> = ({
   children,
   personImageUrl,
   personStatus,
}) => {
   return (
      <PersonCardContainer>
         <div id="card">
            <img id="profile-image" src={personImageUrl} alt="Person Profile" />
            <div id="informations-container">{children}</div>
            <div id="buttons-container">
               {personStatus === "confirmed" ? (
                  <img
                     src={deleteRedIcon}
                     alt="delete"
                     onClick={() => alert("Clicou pra excluir quem já estava aceito")}
                  />
               ) : (
                  <>
                     <img
                        src={deleteRedIcon}
                        alt="delete"
                        onClick={() => alert("Clicou pra excluir")}
                     />
                     <img
                        src={acceptGreenIcon}
                        alt="accept"
                        onClick={() => alert("Clicou pra Aceitar")}
                     />
                  </>
               )}
            </div>
         </div>
      </PersonCardContainer>
   );
};

export default PersonCard;
