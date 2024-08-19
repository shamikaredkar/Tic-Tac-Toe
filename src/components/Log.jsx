import React from "react";

export default function Log({ turns, players }) {
  return (
    <ol id='log'>
      <b>Game Logs</b>
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          <b>{players[turn.player]}</b> selected {turn.square.row},
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
