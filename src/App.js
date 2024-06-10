import React, { useState } from 'react';
import TeamPanel from './component/TeamPanel';
import ListPanel from './component/ListPanel';
import RandomizerPanel from './component/RandomizerPanel';

const App = () => {
  const createPlayer = (id, name, tier) => ({ id, name, tier });

  const [teams, setTeams] = useState([...Array(8)].map((_, i) => ({ id: i + 1, players: [] })));

  // Mock Data
  const [pairs, setPairs] = useState([
    { id: 1, players: [createPlayer('1', 'Pain boy', 3), createPlayer('2', 'The Origin', 3)] },
    { id: 2, players: [createPlayer('3', 'Pata-Mon', 3), createPlayer('4', '- Q', 1)] },
    { id: 3, players: [createPlayer('5', 'Snte4es', 2), createPlayer('6', '[Satori]', 3)] },
    { id: 4, players: [createPlayer('7', 'ShandenLunaire', 2), createPlayer('8', 'BurgerKing', 1)] },
    { id: 5, players: [createPlayer('9', 'My Angel Bronya', 3), createPlayer('10', 'suzuka1', 2)] },
    { id: 6, players: [createPlayer('11', 'Sy_Abyss', 2), createPlayer('12', 'LomOmon', 3)] },
    { id: 7, players: [createPlayer('13', 'Dichlorocarbene', 2), createPlayer('14', 'Folinic', 3)] },
    { id: 8, players: [createPlayer('15', 'Tokai-Teio', 2), createPlayer('16', '[-buki-]', 1)] },
    { id: 9, players: [createPlayer('17', 'Antonilization', 3), createPlayer('18', 'chanliuko', 3)] },
    { id: 10, players: [createPlayer('19', 'ElectroTD', 3), createPlayer('20', 'Mars New', 2)] },
    { id: 11, players: [createPlayer('21', 'maduang', 1), createPlayer('22', 'Cake Sauce', 2)] },
    { id: 12, players: [createPlayer('23', 'K45en', 1), createPlayer('24', 'KiraKiraAyu', 1)] },
    { id: 13, players: [createPlayer('25', 'pepmoutain', 2), createPlayer('26', '-Mqre-', 1)] },
    { id: 14, players: [createPlayer('27', 'Hinanawi Momoko', 3), createPlayer('28', 'ZxKirara', 3)] },
  ]);

  const [freeAgents, setFreeAgents] = useState([
    createPlayer('29', 'AstonFrenchWine', 1),
    createPlayer('30', 'miltonfs', 1),
    createPlayer('31', 'Truth you left', 1),
    createPlayer('32', 'TwinIslandMilk', 1),
    createPlayer('33', 'WuYilcft', 1),
    createPlayer('34', 'babyvzzz', 1),
    createPlayer('35', 'BG eggman', 1),
    createPlayer('36', 'QiCaiLieMaxMox', 1),
    createPlayer('37', 'ShandenYamada', 1),
    createPlayer('38', 'JD14121', 2),
    createPlayer('39', 'EveLiya', 2),
    createPlayer('40', 'Trecont', 2),
    createPlayer('41', 'TTTtraitor', 2),
    createPlayer('42', 'ATRI514', 2),
    createPlayer('43', 'NaimuTongzi', 2),
    createPlayer('44', '[SomaRia]', 2),
    createPlayer('45', 'Senbe1', 3),
    createPlayer('46', 'astralrain', 3),
    createPlayer('47', 'Fyu_Neru', 3),
    createPlayer('48', 'Zh_Jk', 3),
  ]);

  // const [current, setCurrent] = useState(null);
  const [current, setCurrent] = useState(createPlayer('p7', 'Player 7', 2));
  const [isCurrentPair, setIsCurrentPair] = useState(false);

  const randomizeTeam = () => {
    if (current) {
      setTeams(prevTeams => {
        const updatedTeams = [...prevTeams];
        updatedTeams[0].players.push(current); // Team 1 is at index 0
        return updatedTeams;
      });

      // Reset current to null or pick the next player
      setCurrent(null);
    }
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
