import React from "react";

import { ColorPaletteSettingContainer, ColorContent } from "./styles";
import ParticularSetting from "../../../../../components/ParticularSetting";

import colorIcon from "../../../../../assets/icons/color-palette.svg";

const colors = [
   {
      name: "Fundo",
      hexColor: "#FFF0F0",
   },
   {
      name: "Cabeçalho",
      hexColor: "#FFB6B9",
   },
   {
      name: "Cards",
      hexColor: "#CEE1DD",
   },
   {
      name: "Fontes",
      hexColor: "#000000",
   },
];

const ColorPaletteSetting: React.FC = () => {
   return (
      <ParticularSetting title="Paleta de cores" settingIcon={colorIcon}>
         <ColorPaletteSettingContainer>
            {colors.map((color, index) => (
               <ColorContent
                  color={color.hexColor}
                  key={index}
                  onClick={() => alert("Clicou na cor de " + color.name)}
               >
                  <span>{color.name}</span>
                  <div id="color-square"></div>
               </ColorContent>
            ))}
         </ColorPaletteSettingContainer>
      </ParticularSetting>
   );
};

export default ColorPaletteSetting;
