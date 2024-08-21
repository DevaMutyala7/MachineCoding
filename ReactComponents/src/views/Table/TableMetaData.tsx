import { columnConfig } from "./types";
import { Wrapper } from "components/Wrapper";
import { useContext } from "react";
import { TableContext } from "./contexts/TableContext";
import FilterBox from "./FilterBox";
import SearchInBox from "./SearchInBox";
import Sorter from "./Sorter";

function TableHeader<T>({ column }: { column: columnConfig<T> }) {
  return (
    <th>
      <Wrapper
        display="flex"
        gap="10px"
        width={`${column.width}px`}
        position="relative"
      >
        <div>{column.title}</div>
        <div>
          {column.sorter && <Sorter<T> column={column} />}
          <div>
            {column.searchInColumn && <SearchInBox column={column.dataIndex} />}
          </div>
          <div>
            {column.dynamicFilters && <FilterBox column={column.dataIndex} />}
          </div>
        </div>
      </Wrapper>
    </th>
  );
}

export default function TableMetaData() {
  const { columnConfig } = useContext(TableContext);

  return (
    <tr>
      {columnConfig.map((column) => {
        return <TableHeader key={column.key} column={column} />;
      })}
    </tr>
  );
}
