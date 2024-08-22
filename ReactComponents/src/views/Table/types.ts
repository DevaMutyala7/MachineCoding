export enum Size {
  small = "30px",
  medium = "45px",
  large = "60px",
}

export enum SortOrder {
  ascending = "ascending",
  descending = "descending",
}

export interface columnConfig<T> {
  title: string;
  dataIndex: string;
  key?: string | number;
  defaultSortOrder?: SortOrder;
  sorter?: (a: T, b: T) => void;
  width?: number;
  searchInColumn?: boolean;
  dynamicFilters?: boolean;
}

export interface TableProps<T> {
  columnConfig: columnConfig<T>[];
  loading?: boolean;
  data?: T[];
  size?: Size;
}

export type Products = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
};
