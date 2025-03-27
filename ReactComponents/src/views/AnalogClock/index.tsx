import { useEffect, useReducer } from "react";
import "./styles.css";
import { ActionType, clockReducer } from "./utils";

export default function AnalogClock({ date }: { date: Date }) {
  const [clock, dispatchClock] = useReducer(clockReducer, {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    const inervalId = setInterval(() => {
      dispatchClock({ type: ActionType.UPDATE_CLOCK });
    }, 1000);

    return () => {
      clearInterval(inervalId);
    };
  }, []);

  return (
    <div className="clock">
      <p
        className="hours"
        style={{
          transform: `translateX(-50%) rotateZ(${clock.hours * 30}deg)`,
        }}
      ></p>
      <p
        className="minutes"
        style={{
          transform: `rotateZ(${clock.minutes * 6}deg)`,
        }}
      ></p>
      <p
        className="seconds"
        style={{
          transform: `translateX(-50%) rotateZ(${clock.seconds * 6}deg)`,
        }}
      ></p>
    </div>
  );
}
