import { Wrapper } from "styles/Wrapper";
import { Box } from "./Box";
import GameControls from "./GameControls";
import { useEffect, useState } from "react";

export default function TicTacToe() {
  const [layout, setLayout] = useState<string[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  let [userMove, setUserMove] = useState<any>();
  let [currentMove, setCurrentMove] = useState<any>();
  let aiMove = userMove ? (userMove === "X" ? "O" : "X") : "";

  useEffect(() => {
    if (currentMove && currentMove !== userMove) {
      makeAIMove();
    }
  }, [layout]);

  const handleSelectedTurn = (val: string) => {
    setUserMove(val);
  };

  const handleLayout = (index: number) => {
    if (userMove) {
      setCurrentMove(userMove);
      setLayout((prev) => {
        let arr = [...prev];
        arr[index] = [userMove];
        return arr;
      });
      setCurrentMove(aiMove);
    }
  };

  const checkWinner = (board: string[][]) => {
    // Helper function to get the value from the board

    function getValue(index: number) {
      return board[index].length > 0 ? board[index][0] : "";
    }

    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        getValue(i) === getValue(i + 1) &&
        getValue(i + 1) === getValue(i + 2) &&
        getValue(i) !== ""
      ) {
        return getValue(i);
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        getValue(i) === getValue(i + 3) &&
        getValue(i + 3) === getValue(i + 6) &&
        getValue(i) !== ""
      ) {
        return getValue(i);
      }
    }

    // Check diagonals
    if (
      getValue(0) === getValue(4) &&
      getValue(4) === getValue(8) &&
      getValue(0) !== ""
    ) {
      return getValue(0);
    }
    if (
      getValue(2) === getValue(4) &&
      getValue(4) === getValue(6) &&
      getValue(2) !== ""
    ) {
      return getValue(2);
    }

    let isDraw = true;
    for (let i = 0; i < 9; i++) {
      if (getValue(i) === "") {
        isDraw = false;
        break;
      }
    }

    if (isDraw) {
      return "Tie";
    }

    return null;
  };

  const miniMax = (board: string[][], isMaximizing: boolean): number => {
    let result = checkWinner(board);

    if (result) {
      if (result === "Tie") return 0;

      if (result === userMove) return -1;

      return 1;
    }

    if (isMaximizing) {
      //AI playing
      setCurrentMove(aiMove);
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i].length) {
          board[i] = [aiMove];

          let score = miniMax(board, false);

          board[i] = [];

          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      // user playing
      setCurrentMove(userMove);
      let bestScore = +Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i].length) {
          board[i] = [userMove || ""];

          let score = miniMax(board, true);

          board[i] = [];

          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const makeAIMove = () => {
    const board = [...layout];
    let finalIndex = 0;
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (!board[i].length) {
        board[i] = [aiMove];
        let score = miniMax(board, false);
        board[i] = [];
        if (score > bestScore) {
          bestScore = score;
          finalIndex = i;
        }
      }
    }

    setLayout((prev) => {
      let arr = [...prev];
      arr[finalIndex] = [aiMove];
      return arr;
    });
    setCurrentMove(userMove);
  };

  return (
    <div>
      <h2>Tic-Tac-Toe</h2>
      <GameControls
        handleSelectedTurn={handleSelectedTurn}
        selectedTurn={userMove}
      />
      <Wrapper width={150} display="flex" flexflow="wrap">
        {layout.map((item, index) => {
          return (
            <Box
              key={index}
              onClick={() => handleLayout(index)}
              pointerEvents={item.length ? "none" : ""}
            >
              {layout[index]}
            </Box>
          );
        })}
      </Wrapper>
    </div>
  );
}
