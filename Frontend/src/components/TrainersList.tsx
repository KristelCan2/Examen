// src/components/TrainersList.tsx
import React, { useEffect, useState } from 'react';

interface Trainer {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  residence: string;
  photoUrl: string;
}

const TrainersList: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trainers');
        const data = await response.json();
        setTrainers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trainers</h1>
      <ul>
        {trainers.map(trainer => (
          <li key={trainer._id}>
            <h2>{trainer.firstName} {trainer.lastName}</h2>
            <p>Gender: {trainer.gender}</p>
            <p>Residence: {trainer.residence}</p>
            <img src={trainer.photoUrl} alt={trainer.firstName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
