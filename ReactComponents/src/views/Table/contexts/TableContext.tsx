import {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { columnConfig, SortOrder } from "../types";

interface Props<T> {
  children: React.ReactNode;
  data?: T[];
  columnConfig: columnConfig<T>[];
  loading?: boolean;
}

type ContextType = {
  tableData?: any[];
  columnConfig: any[];
  handleSorting: (column: string, sortOrder?: SortOrder) => void;
  loading?: boolean;
  handleSearch: (column: string, val?: string) => void;
  resetSearch: () => void;
  handleFiltering: (column: string, values: string[]) => void;
  originalData?: any[];
};

const defaultValue = {
  data: [],
  columnConfig: [],
  loading: false,
  handleSorting: (column: string, sortOrder?: SortOrder) => {},
  handleSearch: (column: string, val?: string) => undefined,
  handleFiltering: (column: string, values: string[]) => undefined,
  resetSearch: () => undefined,
  originalData: [],
};

export const TableContext = createContext<ContextType>(defaultValue);

export default function TableContextProvider<T>({
  children,
  data,
  columnConfig,
  loading,
}: Props<T>) {
  const [tableData, setTableData] = useState<T[]>();
  const [checkBoxVal, setCheckBoxVal] = useState(() => {
    const storedValue = localStorage.getItem("checked");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const originalData = useRef<T[]>();

  useEffect(() => {
    originalData.current = data;
  }, [data]);

  useLayoutEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const handleCheckBoxChange = useCallback((values: string[]) => {
    setCheckBoxVal(values);
  }, []);

  const handleSorting = useCallback(
    (column: string, sortOrder?: SortOrder) => {
      if (sortOrder === SortOrder.ascending) {
        setTableData((prev) =>
          prev
            ? [
                ...prev.sort((a, b) => {
                  const aColumn = a as { [key: string]: any };
                  const bColumn = b as { [key: string]: any };
                  return typeof aColumn[column] === "string"
                    ? aColumn[column].localeCompare(bColumn[column])
                    : aColumn[column] - bColumn[column];
                }),
              ]
            : undefined
        );
      } else if (sortOrder === SortOrder.descending) {
        setTableData((prev) => {
          return prev
            ? [
                ...prev.sort((a, b) => {
                  const aColumn = a as { [key: string]: any };
                  const bColumn = b as { [key: string]: any };
                  return typeof aColumn[column] === "string"
                    ? bColumn[column].localeCompare(aColumn[column])
                    : bColumn[column] - aColumn[column];
                }),
              ]
            : undefined;
        });
      } else {
        setTableData(data);
      }
    },
    [data]
  );

  const handleSearch = (column: string, value?: string) => {
    if (value) {
      let searchedTableData = originalData.current?.filter((item) => {
        const itemColumn = item as { [key: string]: any };
        return itemColumn[column]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setTableData(searchedTableData);
    }
  };

  const handleFiltering = (column: string, values: string[]) => {
    localStorage.setItem("checked", JSON.stringify(values));
    if (values.length) {
      let filteredData = originalData.current?.filter((item) => {
        const itemColumn = item as { [key: string]: any };
        return values.includes(itemColumn[column]);
      });
      setTableData(filteredData);
    }
  };

  const resetSearch = () => {
    setTableData(originalData.current);
  };

  const value = {
    tableData,
    columnConfig,
    handleSorting,
    loading,
    handleSearch,
    resetSearch,
    handleFiltering,
    originalData: originalData.current,
    handleCheckBoxChange,
    checkBoxVal,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}