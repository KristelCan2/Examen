// src/components/TrainerForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

const TrainerForm: React.FC = () => {
  const [trainer, setTrainer] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    residence: '',
    photoUrl: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTrainer({ ...trainer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/trainers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trainer)
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
      <input name="firstName" value={trainer.firstName} onChange={handleChange} placeholder="First Name" />
      <input name="lastName" value={trainer.lastName} onChange={handleChange} placeholder="Last Name" />
      <input name="gender" value={trainer.gender} onChange={handleChange} placeholder="Gender" />
      <input name="residence" value={trainer.residence} onChange={handleChange} placeholder="Residence" />
      <input name="photoUrl" value={trainer.photoUrl} onChange={handleChange} placeholder="Photo URL" />
      <button type="submit">Create Trainer</button>
    </form>
  );
};

export default TrainerForm;
