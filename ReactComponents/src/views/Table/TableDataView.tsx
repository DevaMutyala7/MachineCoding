import { useContext } from "react";
import { TableContext } from "./contexts/TableContext";

export default function TableDataView() {
  const { tableData, columnConfig } = useContext(TableContext);
  return (
    <>
      {tableData &&
        tableData.map((item: any) => {
          return (
            <tr key={item.id}>
              {columnConfig.map((column) => {
                return <td key={column.key}>{item[column.dataIndex]}</td>;
              })}
            </tr>
          );
        })}
    </>
  );
}
