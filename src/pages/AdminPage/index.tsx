import React from "react";
import AdminHeaderBar from "./components/AdminPage";

import { AdminPageContainer } from "./styles";

import ScheduledPersonCard from "./components/ScheduledPersonCard";

const scheduledPeople = [
   {
      name: "Amanda Gomes Santos",
      service: "Progressiva",
      date: "10/10/2020",
      time: "11:00",
      status: "waiting",
      profileImage:
         "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg",
   },
   {
      name: "Jussara Timo Santos",
      service: "Pintar o cabelo",
      date: "10/10/2020",
      time: "13:00",
      status: "confirmed",
      profileImage:
         "https://m.extra.globo.com/incoming/24667028-9dc-2dd/w367h550-PROP/ext_priscilla.jpg",
   },
   {
      name: "Rosilda Ferreira Silva",
      service: "Cortar as pontas",
      date: "10/10/2020",
      time: "14:00",
      status: "waiting",
      profileImage:
         "https://opresenterural.com.br/wp-content/uploads/2019/03/Biogenesis-mulher.jpg",
   },
];

const AdminPage: React.FC = () => {
   return (
      <AdminPageContainer>
         <AdminHeaderBar />

         {scheduledPeople.map((person, index) => (
            <ScheduledPersonCard person={person} key={index} />
         ))}
      </AdminPageContainer>
   );
};

export default AdminPage;
