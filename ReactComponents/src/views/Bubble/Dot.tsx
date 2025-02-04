import { Position } from "./types";

export default function Dot({
  position,
  opacity,
}: {
  position: Position;
  opacity: number;
}) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        background: "white",
        position: "absolute",
        top: -10,
        left: -10,
        borderRadius: "50%",
        cursor: "pointer",
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity,
      }}
    ></div>
  );
}
