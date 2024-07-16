import { Moves, Result } from "./types/moves";

export default function GameResults({ winner }: { winner: Result | null }) {
  return (
    <div style={{ margin: "10px" }}>
      <h5>
        {winner
          ? winner === Moves.X
            ? "X is the winner"
            : winner === Moves.O
            ? "O is the winner"
            : "Game is Drawn"
          : ""}
      </h5>
    </div>
  );
}
