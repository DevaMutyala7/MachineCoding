import { theme } from "styles/globalStyles";

import { useContext, useState } from "react";
import { TableContext } from "views/Table/contexts/TableContext";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, Button } from "components/Button";
import Input from "components/Input";
import { StyledFontAwesome } from "components/StyledFontAwesome";
import { Wrapper } from "components/Wrapper";

type Props = {
  column: string;
};

export default function SearchInBox({ column }: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const { handleSearch, resetSearch } = useContext(TableContext);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSearch(column, searchValue);
      handleSearchOpen();
    }
  };

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <>
      <StyledFontAwesome icon={faSearch} onClick={handleSearchOpen} />
      {isSearchOpen && (
        <Wrapper
          display="flex"
          flexDirection="column"
          gap="10px"
          position="absolute"
          width="300px"
          top="15px"
          left="0px"
          background={theme.colors.background}
          padding="10px"
          borderRadius="3px"
        >
          <Input
            placeholder={`Enter ${column}`}
            value={searchValue}
            onChange={handleSearchChange}
            autoFocus
            onKeyUp={(e) => handleEnter(e)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <PrimaryButton
              onClick={() => {
                handleSearch(column, searchValue);
                handleSearchOpen();
              }}
            >
              Search
            </PrimaryButton>
            <Button
              onClick={() => {
                resetSearch();
                handleSearchOpen();
              }}
            >
              Reset
            </Button>
            <Button onClick={handleSearchOpen} padding="4px 2px !important">
              Close
            </Button>
          </div>
        </Wrapper>
      )}
    </>
  );
}
