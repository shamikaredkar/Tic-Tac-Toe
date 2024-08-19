import { React, useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleSaveClick(e) {
    setPlayerName(e.target.value);
  }

  let displayName = <span className='player-name'>{playerName}</span>;
  let input = (
    <input type='text' required value={playerName} onChange={handleSaveClick} />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
      <span className='player'>
        {!isEditing ? displayName : input} :
        <span className='player-symbol'>{symbol}</span>
      </span>
    </li>
  );
}

//O
//
//
