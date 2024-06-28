import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import TrainerForm from './components/TrainerForm';
import TrainersList from './components/TrainersList';
import TeamForm from './components/TeamForm';
import TeamsList from './components/TeamsList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/trainers/new" element={<TrainerForm />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/teams/new" element={<TeamForm />} />
          <Route path="/teams" element={<TeamsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
