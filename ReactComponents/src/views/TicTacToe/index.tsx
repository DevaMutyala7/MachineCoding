import { Wrapper } from "components/Wrapper";
import { Box } from "./Box";
import GameControls from "./GameControls";
import useGameState from "./useGameState";
import GameResults from "./GameResults";

export default function TicTacToe() {
  const {
    userMove,
    handleSelectedTurn,
    layout,
    handleLayout,
    winner,
    restartGame,
  } = useGameState();

  return (
    <div>
      <GameControls
        handleSelectedTurn={handleSelectedTurn}
        selectedTurn={userMove}
      />
      <Wrapper
        width="150px"
        display="flex"
        flexflow="wrap"
        justifycontent="center"
      >
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
      <GameResults winner={winner} restartGame={restartGame} />
    </div>
  );
}
