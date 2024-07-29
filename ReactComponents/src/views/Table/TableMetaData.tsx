import {
  faCaretUp,
  faCaretDown,
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { columnConfig, SortOrder } from "./types";
import { Wrapper } from "components/Wrapper";
import { useCallback, useContext, useEffect, useState } from "react";
import SearchInBox from "components/SearchInBox";
import { TableContext } from "./contexts/TableContext";
import FilterBox from "components/FilterBox";

function TableHeader<T>({ column }: { column: columnConfig<T> }) {
  const { handleSorting, loading } = useContext(TableContext);
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(
    column.defaultSortOrder
  );
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  useEffect(() => {
    if ((column.defaultSortOrder || sortOrder) && !loading) {
      handleSorting(column.dataIndex, sortOrder);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder, loading]);

  const handleClick = () => {
    if (column.sorter) {
      setSortOrder((prev) => {
        if (prev === SortOrder.ascending) {
          return SortOrder.descending;
        }
        if (prev === SortOrder.descending) {
          return undefined;
        }

        return SortOrder.ascending;
      });
    }
  };

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleFiltersOpen = useCallback(() => {
    setIsOptionsOpen((prev) => !prev);
  }, []);

  return (
    <th onClick={handleClick}>
      <Wrapper
        display="flex"
        gap="10px"
        width={`${column.width}px`}
        position="relative"
      >
        <div>{column.title}</div>
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            {column.sorter && (
              <div
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-11px",
                    left: "1px",
                    color:
                      sortOrder === SortOrder.ascending ? "blue" : "inherit",
                  }}
                >
                  <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "1px",
                    color:
                      sortOrder === SortOrder.descending ? "blue" : "inherit",
                  }}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            )}
          </div>
          <div>
            {column.searcInColumn && (
              <div>
                <FontAwesomeIcon icon={faSearch} onClick={handleSearchOpen} />
              </div>
            )}
          </div>
          <div>
            {column.dynamicFilters && (
              <div>
                <FontAwesomeIcon icon={faFilter} onClick={handleFiltersOpen} />
              </div>
            )}
          </div>
        </div>
        {column.searcInColumn && isSearchOpen && (
          <SearchInBox
            handleSearchOpen={handleSearchOpen}
            column={column.dataIndex}
          />
        )}
        {column.dynamicFilters && isOptionsOpen && (
          <FilterBox
            column={column.dataIndex}
            handleFiltersOpen={handleFiltersOpen}
          />
        )}
      </Wrapper>
    </th>
  );
}

export default function TableMetaData() {
  const { columnConfig } = useContext(TableContext);

  useEffect(() => {
    return () => {
      localStorage.setItem("checked", "");
    };
  }, []);

  return (
    <tr>
      {columnConfig.map((column) => {
        return <TableHeader key={column.key} column={column} />;
      })}
    </tr>
  );
}
