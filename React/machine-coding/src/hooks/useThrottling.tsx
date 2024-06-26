import { useCallback, useRef } from "react";

export default function useThrottle(handler, delay, immediate = false) {
  const timer = useRef<any>();

  return useCallback(
    function (...args) {
      let callNow = immediate && !timer.current;

      if (callNow) {
        handler.apply(this, [...args]);
      }

      if (!timer.current) {
        timer.current = setTimeout(() => {
          if (!callNow) {
            handler.apply(this, [...args]);
          }
          clearTimeout(timer.current);
          timer.current = null;
        }, delay);
      }
    },
    [delay, handler, immediate]
  );
}
