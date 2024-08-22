import { Draw, Moves, Result } from "../types/moves";

export const checkWinner = (board: string[][]): Result | null => {
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
      return getValue(i) as Moves;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      getValue(i) === getValue(i + 3) &&
      getValue(i + 3) === getValue(i + 6) &&
      getValue(i) !== ""
    ) {
      return getValue(i) as Moves;
    }
  }

  // Check diagonals
  if (
    getValue(0) === getValue(4) &&
    getValue(4) === getValue(8) &&
    getValue(0) !== ""
  ) {
    return getValue(0) as Moves;
  }
  if (
    getValue(2) === getValue(4) &&
    getValue(4) === getValue(6) &&
    getValue(2) !== ""
  ) {
    return getValue(2) as Moves;
  }

  let isDraw = true;
  for (let i = 0; i < 9; i++) {
    if (getValue(i) === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    return Draw.D;
  }

  return null;
};
