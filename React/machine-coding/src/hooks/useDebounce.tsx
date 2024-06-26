import { useCallback, useRef } from "react";

export default function useDebounce(
  handler: () => void,
  delay: number,
  immediate: boolean = false
) {
  const timer = useRef<any>();

  return useCallback(
    function (...args) {
      console.log("called");
      let callNow = immediate && !timer.current;

      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (!callNow) {
          handler.call(this, ...args);
        }
      }, delay);

      if (callNow) {
        handler.call(this, ...args);
      }
    },
    [immediate, delay, handler]
  );
}
