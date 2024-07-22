import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { columnConfig, SortOrder } from "./types";
import { Wrapper } from "components/Wrapper";
import { useEffect, useState } from "react";

function TableHeader<T>({
  column,
  handleSorting,
  loading,
}: {
  column: columnConfig<T>;
  handleSorting: (column: string, sortOrder?: SortOrder) => void;
  loading?: boolean;
}) {
  // console.log("default", column.dataIndex + "---" + column.defaultSortOrder);
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(
    column.defaultSortOrder
  );

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
    <th onClick={handleClick}>
      <Wrapper display="flex" gap="10px" width={`${column.width}px`}>
        <div>{column.title}</div>
        <div>
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
                  color: sortOrder === SortOrder.ascending ? "blue" : "inherit",
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
      </Wrapper>
    </th>
  );
}

export default function TableMetaData<T>({
  columnConfig,
  handleSorting,
  loading,
}: {
  columnConfig: columnConfig<T>[];
  handleSorting: (column: string, sortOrder?: SortOrder) => void;
  loading?: boolean;
}) {
  return (
    <tr>
      {columnConfig.map((column) => {
        return (
          <TableHeader
            key={column.key}
            column={column}
            handleSorting={handleSorting}
            loading={loading}
          />
        );
      })}
    </tr>
  );
}
