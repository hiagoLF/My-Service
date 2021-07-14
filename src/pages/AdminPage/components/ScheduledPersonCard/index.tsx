import React from "react";

import { PersonCardContent } from "./styles";

import PersonCard from "../../../../components/PersonCard/";

type ScheduledPersonCardType = {
   person: {
      name: string;
      service: string;
      date: string;
      time: string;
      status: string;
      profileImage: string;
   };
};

const ScheduledPersonCard: React.FC<ScheduledPersonCardType> = ({ person }) => {
   return (
      <PersonCard
         personImageUrl={person.profileImage}
         personStatus={person.status}
      >
         <PersonCardContent>
            <h3>{person.name}</h3>
            <span>{person.service}</span>
            <span>
               {person.date} - {person.time}
            </span>
         </PersonCardContent>
      </PersonCard>
   );
};

export default ScheduledPersonCard;
