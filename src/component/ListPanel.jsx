// ListPanel.jsx
import React from 'react';

const ListPanel = ({ title, items, isPair }) => (
    <div className="list-panel">
        <div className="panel-title">{title}</div>
        {items.map(item => (
            <div key={item.id}>
                {isPair ? (
                    <>
                        <div>{item.players[0].name} (Tier {item.players[0].tier})</div>
                        <div>{item.players[1].name} (Tier {item.players[1].tier})</div>
                    </>
                ) : (
                    <div>{item.name} (Tier {item.tier})</div>
                )}
            </div>
        ))}
    </div>
);

export default ListPanel;
