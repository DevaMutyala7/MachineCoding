import { theme } from "styles/globalStyles";
import { Wrapper } from "./Wrapper";
import { useCallback, useContext, useState } from "react";
import { TableContext } from "views/Table/contexts/TableContext";
import { PrimaryButton } from "./Button";
import { StyledPara } from "styles/Styledpara";
import CheckBox from "./CheckBox";

function FilterBox({
  column,
  handleFiltersOpen,
}: {
  column: string;
  handleFiltersOpen: () => void;
}) {
  const { originalData, resetSearch, handleFiltering } =
    useContext(TableContext);
  const [checkBoxVal, setCheckBoxVal] = useState(() => {
    const storedValue = localStorage.getItem("checked");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const options = originalData
    ?.reduce((acc, curr) => {
      if (!acc.includes(curr[column])) {
        acc.push(curr[column]);
      }
      return acc;
    }, [])
    .map((item: any) => ({ label: item, value: item }));

  const handleCheckBoxChange = useCallback((values: string[]) => {
    setCheckBoxVal(values);
  }, []);

  const handleFilterReset = () => {
    resetSearch();
    handleFiltersOpen();
    localStorage.setItem("checked", JSON.stringify([]));
  };

  return (
    <Wrapper
      background="#FFFFFF"
      position="absolute"
      top="20px"
      style={{ boxShadow: "-1px 1px 5px 1px rgba(0,0,0,0.75)" }}
      borderRadius="3px"
    >
      <Wrapper
        padding="10px"
        style={{ borderBottom: `2px solid ${theme.colors.background}` }}
      >
        <CheckBox
          options={options}
          onChange={handleCheckBoxChange}
          checkedVals={checkBoxVal}
        />
      </Wrapper>
      <Wrapper
        margin="5px 0px 0px 0px"
        display="flex"
        justifycontent="space-between"
        alignitems="center"
        padding="5px"
      >
        <StyledPara fontSize="0.9rem" onClick={handleFilterReset}>
          Reset
        </StyledPara>
        <PrimaryButton
          style={{ padding: "5px" }}
          onClick={() => {
            if (checkBoxVal.length) {
              handleFiltering(column, checkBoxVal);
            }
            handleFiltersOpen();
          }}
        >
          Ok
        </PrimaryButton>
      </Wrapper>
    </Wrapper>
  );
}

export default FilterBox;
