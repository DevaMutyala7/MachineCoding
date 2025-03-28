import { useState } from "react";
import useFetch from "./hooks/useFetch";
import ListItem from "./Listitem";
import "../TypeAhead/styles.css";

interface TypeAheadProps<T> {
  staticData?: [];
  promise: (query: string) => any;
  debounceTime: number;
  label: string;
  inputStyles?: React.CSSProperties;
  dataTransformer: (data: T[]) => T[];
  placeholder: string;
}

function TypeAhead<T>({
  staticData,
  promise,
  debounceTime,
  label,
  inputStyles,
  placeholder,
  dataTransformer,
}: TypeAheadProps<T>) {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch<T>({
    promise,
    debounceTime,
    query,
    dataTransformer,
  });
  console.log("load", loading);

  return (
    <div className="wrapper">
      <label htmlFor="input">{label}</label>
      <input
        placeholder={placeholder}
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div className="list-wrapper">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.map((item, index) => {
            return <ListItem key={index} />;
          })
        )}
      </div>
    </div>
  );
}

export default TypeAhead;
