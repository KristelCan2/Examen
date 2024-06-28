// src/components/TeamForm.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Trainer {
  _id: string;
  firstName: string;
  lastName: string;
}

const TeamForm: React.FC = () => {
  const [team, setTeam] = useState({
    name: '',
    imageUrl: '',
    trainer: '',
    pokemons: ['']
  });
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handlePokemonsChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newPokemons = [...team.pokemons];
    newPokemons[index] = e.target.value;
    setTeam({ ...team, pokemons: newPokemons });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/teams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(team)
      });
      if (response.ok) {
        // Do something after successful creation, like redirecting or showing a message
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={team.name} onChange={handleChange} placeholder="Team Name" />
      <input name="imageUrl" value={team.imageUrl} onChange={handleChange} placeholder="Image URL" />
      <select name="trainer" value={team.trainer} onChange={handleChange}>
        <option value="">Select Trainer</option>
        {trainers.map(trainer => (
          <option key={trainer._id} value={trainer._id}>{trainer.firstName} {trainer.lastName}</option>
        ))}
      </select>
      {team.pokemons.map((pokemon, index) => (
        <input
          key={index}
          value={pokemon}
          onChange={(e) => handlePokemonsChange(e, index)}
          placeholder={`Pokemon ${index + 1}`}
        />
      ))}
      <button type="button" onClick={() => setTeam({ ...team, pokemons: [...team.pokemons, ''] })}>
        Add Pokemon
      </button>
      <button type="submit">Create Team</button>
    </form>
  );
};

export default TeamForm;
