import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    const items = localStorage.getItem(key);
    return items;
  });

  useEffect(() => {
    setValue(localStorage.getItem(key));
  }, [key]);

  const setStorage = (value: any) => {
    localStorage.setItem(key, value);
  };

  return { value, setStorage };
}
