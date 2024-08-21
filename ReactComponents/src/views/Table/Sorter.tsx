import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesome } from "components/StyledFontAwesome";
import { columnConfig, SortOrder } from "./types";
import { useContext, useEffect, useState } from "react";
import { TableContext } from "views/Table/contexts/TableContext";

export default function Sorter<T>({ column }: { column: columnConfig<T> }) {
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(
    column.defaultSortOrder
  );
  const { handleSorting, loading } = useContext(TableContext);

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
  return (
    <div style={{ display: "flex", gap: "10px" }} onClick={handleClick}>
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
            color: sortOrder === SortOrder.ascending ? "blue" : "inherit",
          }}
        >
          <StyledFontAwesome icon={faCaretUp} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: "1px",
            color: sortOrder === SortOrder.descending ? "blue" : "inherit",
          }}
        >
          <StyledFontAwesome icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
}
