import styled from "styled-components";

export const ColorPaletteSettingContainer = styled.div`
   width: 70%;
`;

type ColorContentType = {
   color: string;
};

export const ColorContent = styled.div<ColorContentType>`
   display: flex;
   flex-direction: row;
   margin-top: 5px;

   span {
      font-size: 15px;
      font-weight: 600;
      opacity: 0.9;
      width: 85px;
   }

   #color-square {
      height: 15px;
      width: 100px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: ${({ color }) => color};
   }
`;
