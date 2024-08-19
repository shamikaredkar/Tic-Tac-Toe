import { React } from "react";
import Player from "./Player";

export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   /*
  //    2. rowIndex represents the index of the row in which the cell was clicked
  //    4. colIndex represents the index of the column in which the cell was clicked
  //    5. Enter array one, iterate through all columns of row 1 then row 2 then row 3
  //    */

  //   function handleSelectButton(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }

  //gameBoard is a computed value derived from a state

  /*  
   1. row represents the current row in iteration eg.(row, row, row)
   2. rowIndex represents the index of the current row eg. 0,1,2
   3. playerSymbol represents the value in current cell eg. null, X, O
   4. colIndex represents the index of the current column 0, 1, 2
   5. Enter array one, iterate through all columns of row 1 then row 2 then row 3 
   */

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
