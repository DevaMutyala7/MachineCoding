import { theme } from "styles/globalStyles";
import { useCallback, useContext, useState } from "react";
import { TableContext } from "views/Table/contexts/TableContext";
import { StyledPara } from "styles/Styledpara";
import useLocalStorage from "hooks/useLocalstorage";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "components/Button";
import CheckBox from "components/CheckBox";
import { StyledFontAwesome } from "components/StyledFontAwesome";
import { Wrapper } from "components/Wrapper";

function FilterBox({ column }: { column: string }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const { originalData, resetSearch, handleFiltering } =
    useContext(TableContext);
  const [checkBoxVal, setCheckBoxVal] = useLocalStorage("checked");

  const handleCheckBoxChange = useCallback((values: string[]) => {
    setCheckBoxVal(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFiltersOpen = useCallback(() => {
    setIsOptionsOpen((prev) => !prev);
  }, []);

  const options = originalData
    ?.reduce((acc, curr) => {
      if (!acc.includes(curr[column])) {
        acc.push(curr[column]);
      }
      return acc;
    }, [])
    .map((item: any) => ({ label: item, value: item }));

  const handleFilterReset = () => {
    setCheckBoxVal([]);
    resetSearch();
    setIsOptionsOpen(false);
  };

  return (
    <>
      <StyledFontAwesome icon={faFilter} onClick={handleFiltersOpen} />
      {isOptionsOpen && (
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
            <StyledPara
              fontSize="0.9rem"
              onClick={handleFilterReset}
              style={{ cursor: "pointer" }}
            >
              Reset
            </StyledPara>
            <PrimaryButton
              style={{ padding: "5px" }}
              onClick={() => {
                if (checkBoxVal.length) {
                  handleFiltering(column, checkBoxVal);
                } else {
                  resetSearch();
                }
                handleFiltersOpen();
              }}
            >
              Ok
            </PrimaryButton>
          </Wrapper>
        </Wrapper>
      )}
    </>
  );
}

export default FilterBox;
