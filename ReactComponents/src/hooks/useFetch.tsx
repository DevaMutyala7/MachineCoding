import { useCallback, useEffect, useRef, useState } from "react";

export default function useFetch<T>({
  api,
  column,
}: {
  api: string;
  column?: string;
}) {
  const [data, setData] = useState<T[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  const isMounted = useRef<boolean>(true);

  const run = useCallback(async () => {
    try {
      if (isMounted.current) {
        setLoading(true);
      }
      const res = await fetch(api).then((res) => res.json());

      if (isMounted.current) {
        if (column) {
          setData(res[column]);
        } else {
          setData(res);
        }
      }
    } catch (error) {
      if (isMounted.current) {
        setError(error as Error);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, [api, column]);

  useEffect(() => {
    run();
    return () => {
      isMounted.current = false;
    };
  }, [run]);

  return { data, loading, error };
}
