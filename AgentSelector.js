import React from 'react';

const AgentSelector = ({ players, onSelection }) => {
  return (
    <div className="agent-selector">
      {players.map((player, index) => (
        <img
          key={index}
          src={player.src}
          alt={player.name}
          onClick={() => onSelection(player)}
          className="agent-image"
        />
      ))}
    </div>
  );
};

export default AgentSelector;
