// ListPanel.jsx
import React from 'react';

const ListPanel = ({ title, items, isPair }) => (
    <div className="list-panel">
        <div className="panel-title">{title}</div>
        {items.map(item => (
            <div key={item.id}>
                {isPair ? (
                    <>
                        <div>{item.players[0].name} (T{item.players[0].tier}), {item.players[1].name} (T{item.players[1].tier})</div>
                    </>
                ) : (
                    <div>{item.name} (T{item.tier})</div>
                )}
            </div>
        ))}
    </div>
);

export default ListPanel;
