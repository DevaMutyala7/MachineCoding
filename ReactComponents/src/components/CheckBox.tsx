import { StyledPara } from "styles/Styledpara";
import { Wrapper } from "./Wrapper";
import React, { useEffect, useState } from "react";

function CheckBox({
  onChange,
  children,
  isChecked,
  label,
  ...rest
}: {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  isChecked?: boolean;
  label?: string;
}) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e);
  };

  return (
    <Wrapper display="flex" alignitems="center">
      <input
        type="checkbox"
        checked={isChecked || checked}
        onChange={(e) => handleChange(e)}
        id={label}
        style={{ cursor: "pointer" }}
        {...rest}
      />
      <label htmlFor={label}>
        <StyledPara fontSize="0.9rem">{children}</StyledPara>
      </label>
    </Wrapper>
  );
}

function CheckBoxGroup({
  options,
  onChange,
  checkedVals,
  defaultValue,
}: {
  options: { label: string; value: string }[];
  onChange: (values: string[]) => void;
  defaultValue?: string[];
  checkedVals?: string[];
}) {
  const [values, setValues] = useState<string[]>([
    ...(checkedVals || ""),
    ...(defaultValue || ""),
  ]);

  useEffect(() => {
    onChange(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { checked } = e.target;

    if (checked) {
      setValues([...values, value]);
    } else {
      setValues((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        margin: "0px",
      }}
    >
      {options &&
        options.map(({ label, value }) => {
          return (
            <li key={label} style={{ listStyle: "none" }}>
              <CheckBox
                label={label}
                onChange={(e) => handleChange(e, value)}
                key={label}
                isChecked={values?.includes(value)}
              >
                {label}
              </CheckBox>
            </li>
          );
        })}
    </ul>
  );
}

export default React.memo(CheckBoxGroup);
