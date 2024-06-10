import React from 'react';

const TeamPanel = ({ team }) => (
    <div className="team-panel">
        <h2>Team {team.id}</h2>
        {team.players.map(player => (
            <div key={player.id}>{player.name} (Tier {player.tier})</div>
        ))}
    </div>
);

export default TeamPanel