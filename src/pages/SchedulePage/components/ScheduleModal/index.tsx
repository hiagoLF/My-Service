import React from "react";
import Modal from "../../../../components/Modal";

import { ScheduleModalContainer, ScheduleModalCard } from "./styles";

type ScheduleModalType = {
   modalOpen: boolean;
   onModalRequestClose: () => void;
   scheduleModalInformations: {
      day: string;
      date: string;
      status: string;
      time: string;
   };
};

const ScheduleModal: React.FC<ScheduleModalType> = ({
   modalOpen,
   onModalRequestClose,
   scheduleModalInformations,
}) => {
   return (
      <ScheduleModalContainer>
         <Modal open={modalOpen} onModalRequestClose={onModalRequestClose}>
            <ScheduleModalCard timeStatus={scheduleModalInformations.status}>
               <h3>Horário</h3>
               <p>
                  <b>{scheduleModalInformations.date}</b>
                  <b>
                     {scheduleModalInformations.day} -{" "}
                     {scheduleModalInformations.time}
                  </b>
               </p>
               <span>
                  {scheduleModalInformations.status === "mine" && "Confirmado"}
                  {scheduleModalInformations.status === "waiting" &&
                     "Aguardando Aprovação"}
                  {scheduleModalInformations.status === "free" && "Não Marcado"}
               </span>
               <button>
                  {scheduleModalInformations.status === "free"
                     ? "Marcar"
                     : "Cancelar"}
               </button>
            </ScheduleModalCard>
         </Modal>
      </ScheduleModalContainer>
   );
};

export default ScheduleModal;
