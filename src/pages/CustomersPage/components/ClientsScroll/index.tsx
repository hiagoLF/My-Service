import React from "react";

import { RegisteredCustomersContainer } from "./styles";
import PersonCard from "../../../../components/PersonCard";

const customers = [
   {
      name: "Danial Alves",
      status: "waiting",
      image: "https://pbs.twimg.com/profile_images/1085239615689293825/XLmISw5p.jpg",
   },
   {
      name: "Ferando Pexera",
      status: "waiting",
      image: "http://pm1.narvii.com/6527/0994806ce6f00adc3ecf8c4388b9f6ddcebb481a_00.jpg",
   },
   {
      name: "Jovaldonilsinho Santons Gomes",
      status: "waiting",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Amanda Gomes Santos",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1287792076269268994/PEy-De3f.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Juarez Silva Jota",
      status: "confirmed",
      image: "https://pbs.twimg.com/profile_images/1293914394489835521/J086cQFl_400x400.jpg",
   },
   {
      name: "Danial Alves",
      status: "waiting",
      image: "https://pbs.twimg.com/profile_images/1085239615689293825/XLmISw5p.jpg",
   },
   {
      name: "Danial Alves",
      status: "waiting",
      image: "https://pbs.twimg.com/profile_images/1085239615689293825/XLmISw5p.jpg",
   },
];

const ClientsScroll: React.FC = () => {
   return (
      <RegisteredCustomersContainer>
         {customers.map((customer, index) => (
            <PersonCard
               key={index}
               personImageUrl={customer.image}
               personStatus={customer.status}
            >
               <span>{customer.name}</span>
            </PersonCard>
         ))}
      </RegisteredCustomersContainer>
   );
};

export default ClientsScroll;
