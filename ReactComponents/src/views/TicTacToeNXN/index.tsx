import useGameState from "./hooks/useGameState";
import "./styles.css";

export default function TicTacToeNXN({
  defaultSize = 3,
}: {
  defaultSize?: number;
}) {
  const {
    board,
    makeMove,
    gameStatus,
    checkWinner,
    restartGame,
    boardSize,
    handleChange,
  } = useGameState(defaultSize);

  return (
    <div className="wrapper">
      <div>
        Set Board Size:
        <input
          type="number"
          value={boardSize}
          onChange={handleChange}
          min={3}
          max={10}
        />
      </div>
      <div>Game Status: {gameStatus()}</div>
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
      >
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <button
              className="cell"
              key={rowIndex + " " + colIndex}
              disabled={board[rowIndex][colIndex] !== "" || checkWinner()}
              onClick={() => makeMove(rowIndex, colIndex)}
            >
              {board[rowIndex][colIndex]}
            </button>
          ))
        )}
      </div>
      <div>
        <button className="restart" onClick={restartGame}>
          Restart Game
        </button>
      </div>
    </div>
  );
}

//component will take prop of n size
//state is nxn matrix, current move
//check game status on every move
// if row, column, diagonal indeces have same values he is winner
//disable the board once game is completed
//button to restart

//all state managing logic will be in custom hook
