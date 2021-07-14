import React, { ReactNode, useState } from "react";

import { NewServiceModalContainer, ModalBackground } from "./styles";

type ModalProps = {
   children?: ReactNode;
   open?: boolean;
   onModalRequestClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({
   children,
   open,
   onModalRequestClose,
}) => {
   const [closingModal, setClosingModal] = useState<boolean>(false);
   const animationTimeInSeconds = 0.3;

   const handleModalCloseRequest = () => {
      setClosingModal(true);
      setTimeout(() => {
         setClosingModal(false);
         onModalRequestClose && onModalRequestClose();
      }, animationTimeInSeconds * 1000);
   };

   if (open) {
      return (
         <NewServiceModalContainer
            animationTimeInSeconds={animationTimeInSeconds}
            isModalClosing={closingModal}
         >
            <ModalBackground onClick={handleModalCloseRequest} />

            {children}
         </NewServiceModalContainer>
      );
   }

   return null;
};

export default Modal;
