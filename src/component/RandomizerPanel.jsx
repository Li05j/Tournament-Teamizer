import React from 'react';

const RandomizerPanel = ({ current, onRandomize, isPair }) => (
    <div className="randomizer-panel">
        {current ? (
            <>
                <h3>Current:</h3>
                {isPair ? (
                    <>
                        <div>{current[0].name} (Tier {current[0].tier})</div>
                        <div>{current[1].name} (Tier {current[1].tier})</div>
                    </>
                ) : (
                    <div>{current.name} (Tier {current.tier})</div>
                )}
                <button onClick={onRandomize}>Randomize Team!</button>
            </>
        ) : (
            <h3>No players left.</h3>
        )}
    </div>
);

export default RandomizerPanel;
