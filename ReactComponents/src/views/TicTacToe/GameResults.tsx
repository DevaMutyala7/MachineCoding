import { PrimaryButton } from "components/Button";
import { Moves, Result } from "./types/moves";
import { Wrapper } from "components/Wrapper";

export default function GameResults({
  winner,
  restartGame,
}: {
  winner: Result | null;
  restartGame: () => void;
}) {
  return (
    <Wrapper margin="10px" display="flex" flexflow="column" flexgap="10px">
      <h5>
        {winner
          ? winner === Moves.X
            ? "X is the winner"
            : winner === Moves.O
            ? "O is the winner"
            : "Game is Drawn"
          : ""}
      </h5>
      <PrimaryButton onClick={restartGame}>Restart Game</PrimaryButton>
    </Wrapper>
  );
}
