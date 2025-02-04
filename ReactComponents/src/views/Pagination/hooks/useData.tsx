import { useEffect, useState } from "react";
import { Product } from "../types";

type Data = {
  products: Product[];
  total: number;
};

function useData(pageNumber?: number) {
  const [data, setData] = useState<Data>({ products: [], total: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setLoading(true);
    }
    fetch(
      `https://dummyjson.com/products?limit=10&skip=${10 * (pageNumber || 1)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setData({ products: data.products, total: data.total });
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(new Error(err));
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [pageNumber]);

  return { data, loading, error };
}

export default useData;
