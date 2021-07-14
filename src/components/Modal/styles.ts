import styled from "styled-components";

type NewServiceModalContainerProps = {
   isModalClosing: boolean;
   animationTimeInSeconds: number;
};

export const NewServiceModalContainer = styled.div<NewServiceModalContainerProps>`
   width: 100%;
   height: 100vh;

   position: fixed;

   z-index: 3;

   animation-name: ${(props) =>
      props.isModalClosing ? "disappearByBottom" : "apearByBottom"};
   animation-duration: ${(props) => props.animationTimeInSeconds}s;
   animation-fill-mode: forwards;
`;

export const ModalBackground = styled.div`
   width: 100%;
   height: 100%;

   background-color: rgba(0, 0, 0, 0.7);
`;
