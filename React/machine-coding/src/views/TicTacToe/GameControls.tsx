import RadioButton from "components/RadioButton";
import { USER_MOVE } from "./types";

const options = [
  {
    label: "X",
    value: "X",
  },
  {
    label: "O",
    value: "O",
  },
];

export default function GameControls({
  handleSelectedTurn,
  selectedTurn,
}: {
  handleSelectedTurn: (val: string) => void;
  selectedTurn?: string;
}) {
  const handler = (val: string) => {
    handleSelectedTurn(val);
  };
  return (
    <div style={{ padding: "5px" }}>
      <RadioButton
        options={options}
        selected={selectedTurn}
        handler={handler}
      />
    </div>
  );
}
