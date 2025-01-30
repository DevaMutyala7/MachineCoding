import { useState, useEffect } from "react";

export default function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: PointerEvent) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return position;
}
