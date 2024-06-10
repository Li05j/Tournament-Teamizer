import React from 'react';

const RandomizerPanel = ({ current, onRandomize, isPair }) => (
    <div className="randomizer-panel">
        {current ? (
            <>
                <h3>Current:</h3>
                {isPair ? (
                    <>
                        <div>{current.players[0].name} (Tier {current.players[0].tier}), {current.players[1].name} (T{current.players[1].tier})</div>
                    </>
                ) : (
                    <div>{current.name} (T{current.tier})</div>
                )}
                <button onClick={onRandomize} style={{ fontSize: '20px', marginTop: '20px' }}>Randomize Team!</button>
            </>
        ) : (
            <h3>No players left.</h3>
        )}
    </div >
);

export default RandomizerPanel;
