import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  });

  useEffect(() => {
    console.log("hook val", key);
    if (key) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
