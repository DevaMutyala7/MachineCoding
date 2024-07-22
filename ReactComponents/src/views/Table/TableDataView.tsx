import { columnConfig } from "./types";

export default function TableDataView<T>({
  tableData,
  columnConfig,
}: {
  tableData?: T[];
  columnConfig: columnConfig<T>[];
}) {
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
