import useDebounce from "hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";

interface Props<T> {
  promise: (query: string) => any;
  debounceTime: number;
  query: string;
  dataTransformer: (data: T[]) => T[];
}

function useFetch<T>({
  promise,
  debounceTime,
  query,
  dataTransformer,
}: Props<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async function fetchData() {
      setLoading(true);
      try {
        promise(query)
          .then((res: any) => {
            return res.json();
          })
          .then((val: any) => {
            const data: T[] = dataTransformer(val);
            setData(data);
            setLoading(false);
          });
      } catch (e: any) {
        const err = new Error(e);
        setError(err);
        setLoading(false);
      }
    },
    [dataTransformer, promise, query]
  );

  //   const debouncedFetch = useDebounce(fetchData, debounceTime);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetch;
