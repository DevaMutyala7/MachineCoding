import Dot from "./Dot";
import useDelayedValue from "./hooks/useDelayedValue";
import usePointerPosition from "./hooks/usePosition";

export default function Bubble() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 90);
  const pos4 = useDelayedValue(pos2, 80);
  const pos5 = useDelayedValue(pos4, 70);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "pink",
        margin: "auto",
        position: "relative",
      }}
    >
      <Dot position={pos1} opacity={2.5} />
      <Dot position={pos2} opacity={2.5} />
      <Dot position={pos3} opacity={2.5} />
      <Dot position={pos4} opacity={2.5} />
      <Dot position={pos5} opacity={2.5} />
    </div>
  );
}
