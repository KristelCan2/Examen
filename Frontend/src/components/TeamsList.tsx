// src/components/TeamsList.tsx
import React, { useEffect, useState } from 'react';

interface Team {
  _id: string;
  name: string;
  imageUrl: string;
  trainer: {
    firstName: string;
    lastName: string;
  };
  pokemons: string[];
}

const TeamsList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/teams');
        const data = await response.json();
        setTeams(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team._id}>
            <h2>{team.name}</h2>
            <p>Trainer: {team.trainer.firstName} {team.trainer.lastName}</p>
            <img src={team.imageUrl} alt={team.name} />
            <ul>
              {team.pokemons.map((pokemon, index) => (
                <li key={index}>{pokemon}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsList;
