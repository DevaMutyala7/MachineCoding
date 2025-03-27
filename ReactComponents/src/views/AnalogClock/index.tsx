import { useEffect, useReducer } from "react";
import "./styles.css";
import { ActionType, clockReducer } from "./utils";

export default function AnalogClock() {
  const [clock, dispatchClock] = useReducer(clockReducer, {
    hours: 0,
    minutes: 0,
    seconds: 0,
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
      <div className="hands">
        <p className="hours"></p>
        <p className="minutes"></p>
        <p className="seconds"></p>
      </div>
    </div>
  );
}
