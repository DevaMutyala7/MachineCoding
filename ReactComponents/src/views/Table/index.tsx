import "./table.css";
import { TableProps } from "./types";
import TableMetaData from "./TableMetaData";
import TableDataView from "./TableDataView";
import TableContextProvider from "./contexts/TableContext";

export default function Table<T extends Record<string, any>>({
  columnConfig,
  data,
  loading,
}: TableProps<T>) {
  if (loading) {
    return <h5>Loading...</h5>;
  }

  return (
    <TableContextProvider<T>
      data={data}
      columnConfig={columnConfig}
      loading={loading}
    >
      <table>
        <thead>
          <TableMetaData />
        </thead>

        <tbody>
          <TableDataView />
        </tbody>
      </table>
    </TableContextProvider>
  );
}
