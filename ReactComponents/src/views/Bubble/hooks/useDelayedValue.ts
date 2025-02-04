import { useState, useEffect } from "react";
import { Position } from "../types";

export default function useDelayedValue(position: Position, delay: number) {
  const [delayedValue, setDelayedValue] = useState(position);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(position);
    }, delay);
  }, [delay, position]);

  return delayedValue;
}
