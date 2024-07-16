import { useState } from "react";

type Options = {
  label: string;
  value: any;
};

export default function RadioButton({
  options,
  handler,
  selected,
}: {
  options: Options[];
  handler: (val: string) => void;
  selected?: string;
}) {
  const [optionSelected, setOptionSelected] = useState(false);
  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    handler(e.target.value);
    setOptionSelected(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <h5>Choose your option:</h5>
      {options.map(({ value, label }) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={selected === value}
              onChange={handleSelected}
              disabled={optionSelected}
            />
            {label}
          </label>
        );
      })}
    </div>
  );
}
