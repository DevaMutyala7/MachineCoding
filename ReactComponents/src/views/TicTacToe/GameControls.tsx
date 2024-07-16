import RadioButton from "components/RadioButton";

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
    <div style={{ padding: "5px", textAlign: "center" }}>
      <RadioButton
        options={options}
        selected={selectedTurn}
        handler={handler}
      />
    </div>
  );
}
