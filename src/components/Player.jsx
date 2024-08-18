import { React, useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleSaveClick(e) {
    setPlayerName(e.target.value);
  }

  let displayName = <span className='player-name'>{playerName}</span>;
  let input = (
    <input type='text' required value={playerName} onChange={handleSaveClick} />
  );

  return (
    <li>
      <span className='player'>
        {!isEditing ? displayName : input}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={handleEditClick}>
          {!isEditing ? "Edit" : "Save"}
        </button>
        ;
      </span>
    </li>
  );
}

//O
//
//
