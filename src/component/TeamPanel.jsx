import React from 'react';

const TeamPanel = ({ team }) => (
    <div className="team-panel">
        <div className="team-name">Team {team.id}</div>
        {team.players.map(player => (
            <div key={player.id}>{player.name} (Tier {player.tier})</div>
        ))}
    </div>
);


export default TeamPanel