import { Wrapper } from "styles/Wrapper";
import { Box } from "./Box";
import GameControls from "./GameControls";
import useGameState from "./useGameState";
import GameResults from "./GameResults";

export default function TicTacToe() {
  const { userMove, handleSelectedTurn, layout, handleLayout, winner } =
    useGameState();

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
              pointerEvents={item.length ? "none" : winner ? "none" : ""}
            >
              {layout[index]}
            </Box>
          );
        })}
      </Wrapper>
      <GameResults winner={winner} />
    </div>
  );
}
