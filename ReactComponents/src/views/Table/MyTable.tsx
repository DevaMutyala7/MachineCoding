import useFetch from "hooks/useFetch";
import Table from ".";
import { columnConfig, Products, SortOrder } from "./types";

export default function MyTable() {
  const { data, loading } = useFetch<Products>({
    api: "https://dummyjson.com/products",
    column: "products",
  });

  const columns: columnConfig<Products>[] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: SortOrder.descending,
      sorter: (a, b) => a.id - b.id,
      width: 100,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 60,
      searchInColumn: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      dynamicFilters: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      width: 100,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      sorter: (a, b) => a.rating - b.rating,
      width: 100,
    },
  ];

  return (
    <Table<Products> columnConfig={columns} data={data} loading={loading} />
  );
}
