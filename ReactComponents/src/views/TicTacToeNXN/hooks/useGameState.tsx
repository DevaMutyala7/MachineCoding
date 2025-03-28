import { useState } from "react";

type InnerBoard = string[];

type Board = InnerBoard[];

interface State {
  board: Board;
  makeMove: (row: number, col: number) => void;
  gameStatus: () => string;
  checkWinner: () => boolean;
  restartGame: () => void;
  boardSize: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useGameState(size: number): State {
  const [boardSize, setBoardSize] = useState<number>(size);
  const [board, setBoard] = useState<Board>(
    Array(size).fill(Array(size).fill(""))
  );
  const [currentUser, setCurrentUser] = useState("X");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value);
    if (!isNaN(newValue) && newValue !== boardSize) {
      setBoardSize(newValue);
      setBoard(Array(newValue).fill(Array(newValue).fill("")));
    }
  };

  function makeMove(row: number, col: number) {
    if (board[row][col]) return;

    const newBoard = board.map((row) => row.slice());
    newBoard[row][col] = currentUser;
    setBoard(newBoard);
    setCurrentUser((prev) => (prev === "X" ? "O" : "X"));
  }

  function isDraw() {
    return board.every((row) => row.every((col) => col !== "") === true);
  }

  function checkRows() {
    for (let row = 0; row < boardSize; row++) {
      let prev = null;
      for (let col = 0; col < boardSize; col++) {
        if (board[row][col]) {
          if (prev && prev !== board[row][col]) {
            return false;
          }
          prev = board[row][col];
          if (col === boardSize - 1) {
            return true;
          }
        } else {
          break;
        }
      }
    }
    return false;
  }

  function checkCols() {
    for (let col = 0; col < boardSize; col++) {
      let prev = null;
      for (let row = 0; row < boardSize; row++) {
        if (board[row][col]) {
          if (prev && prev !== board[row][col]) {
            return false;
          }
          prev = board[row][col];
          if (row === boardSize - 1) {
            return true;
          }
        } else {
          break;
        }
      }
    }
    return false;
  }

  function checkLeftDiagonal() {
    let row = 0,
      col = 0;
    let prev = null;
    while (row < boardSize && col < boardSize) {
      if (board[row][col]) {
        if (prev && prev !== board[row][col]) {
          return false;
        }
        prev = board[row][col];
      } else {
        return false;
      }
      row++;
      col++;
    }
    return true;
  }

  function checkRightDiagonal() {
    let row = 0,
      col = boardSize - 1;
    let prev = null;
    while (row < boardSize && col < boardSize) {
      if (board[row][col]) {
        if (prev && prev !== board[row][col]) {
          return false;
        }
        prev = board[row][col];
      } else {
        return false;
      }
      row++;
      col--;
    }
    return true;
  }

  function checkWinner() {
    //check for rows
    let rowCheck = checkRows();

    //check columns
    let colCheck = checkCols();

    //check left diagonal
    let diagonal1Check = checkLeftDiagonal();

    //check right diagonal
    let diagonal2Check = checkRightDiagonal();

    return rowCheck || colCheck || diagonal1Check || diagonal2Check;
  }

  function gameStatus() {
    if (checkWinner()) {
      return `${currentUser === "X" ? "O" : "X"} is winner`;
    }
    if (isDraw()) {
      return "Game is Drawn";
    } else {
      return `${currentUser}'s turn`;
    }
  }

  function restartGame() {
    setBoard(Array(boardSize).fill(Array(boardSize).fill("")));
    setCurrentUser("X");
  }

  return {
    board,
    makeMove,
    gameStatus,
    checkWinner,
    restartGame,
    boardSize,
    handleChange,
  };
}
