import { useEffect, useState } from "react";
import { checkWinner } from "./helpers/checkWinner";
import { Draw, Moves, Result } from "./types/moves";

export default function useGameState() {
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
  const [userMove, setUserMove] = useState<Moves>();
  const [currentMove, setCurrentMove] = useState<Moves>();
  const [winner, setWinner] = useState<Result | null>(null);
  const aiMove = userMove ? (userMove === "X" ? "O" : "X") : "";

  useEffect(() => {
    let winner = checkWinner(layout);

    if (winner) {
      console.log("winner", winner);
      setWinner(winner);
    }

    if (currentMove && currentMove !== userMove) {
      makeAIMove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout]);

  const handleSelectedTurn = (val: string) => {
    setUserMove(val as Moves);
  };

  const handleLayout = (index: number) => {
    if (userMove) {
      setCurrentMove(userMove);
      setLayout((prev) => {
        let arr = [...prev];
        arr[index] = [userMove];
        return arr;
      });
      setCurrentMove(aiMove as Moves);
    }
  };

  const miniMax = (board: string[][], isMaximizing: boolean): number => {
    let result = checkWinner(board);

    if (result) {
      if (result === Draw.D) return 0;

      if (result === userMove) return -1;

      return 1;
    }

    if (isMaximizing) {
      //AI playing
      setCurrentMove(aiMove as Moves);
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

  return { handleSelectedTurn, layout, userMove, handleLayout, winner };
}
