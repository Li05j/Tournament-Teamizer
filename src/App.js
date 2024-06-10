import React, { useState } from 'react';
import TeamPanel from './component/TeamPanel';
import ListPanel from './component/ListPanel';
import RandomizerPanel from './component/RandomizerPanel';

const App = () => {
  const createPlayer = (id, name, tier) => ({ id, name, tier });

  const [teams, setTeams] = useState([...Array(8)].map((_, i) => ({ id: i + 1, players: [] })));

  // Mock Data
  const [pairs, setPairs] = useState([
    { id: 1, players: [createPlayer('p1', 'Player 1', 1), createPlayer('p2', 'Player 2', 2)] },
    { id: 2, players: [createPlayer('p3', 'Player 3', 3), createPlayer('p4', 'Player 4', 1)] }
  ]);

  const [freeAgents, setFreeAgents] = useState([
    createPlayer('p5', 'Player 5', 2),
    createPlayer('p6', 'Player 6', 3),
  ]);

  // const [current, setCurrent] = useState(null);
  const [current, setCurrent] = useState([]);
  const [isCurrentPair, setIsCurrentPair] = useState(false);

  const randomizeTeam = () => {
    // Logic to randomize current pair/player into a team
  };

  return (
    <div className="app">
      <div className="teams">
        {teams.map(team => (
          <TeamPanel key={team.id} team={team} />
        ))}
      </div>
      <div className="players-container">
        <RandomizerPanel current={current} onRandomize={randomizeTeam} />
        <div className="lists">
          <ListPanel title="Pairs" items={pairs} isPair={true} />
          <ListPanel title="Free Agents" items={freeAgents} />
        </div>
      </div>
    </div>
  );
};

export default App;
