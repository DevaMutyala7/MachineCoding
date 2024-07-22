import "./table.css";
import { SortOrder, TableProps } from "./types";
import TableMetaData from "./TableMetaData";
import { useLayoutEffect, useState } from "react";
import TableDataView from "./TableDataView";

export default function Table<T extends Record<string, any>>({
  columnConfig,
  data,
  loading,
}: TableProps<T>) {
  const [tableData, setTableData] = useState<T[]>();

  useLayoutEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const handleSorting = (column: string, sortOrder?: SortOrder) => {
    if (sortOrder === SortOrder.ascending) {
      setTableData((prev) =>
        prev
          ? [
              ...prev.sort((a, b) =>
                typeof a[column] === "string"
                  ? a[column].localeCompare(b[column])
                  : a[column] - b[column]
              ),
            ]
          : undefined
      );
    } else if (sortOrder === SortOrder.descending) {
      setTableData((prev) => {
        return prev
          ? [
              ...prev.sort((a, b) =>
                typeof a[column] === "string"
                  ? b[column].localeCompare(a[column])
                  : b[column] - a[column]
              ),
            ]
          : undefined;
      });
    } else {
      setTableData(data);
    }
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }

  return (
    <table>
      <thead>
        <TableMetaData<T>
          columnConfig={columnConfig}
          handleSorting={handleSorting}
        />
      </thead>

      <tbody>
        <TableDataView<T> columnConfig={columnConfig} tableData={tableData} />
      </tbody>
    </table>
  );
}
