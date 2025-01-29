import { cloneElement, useState } from "react";
import { Steps } from "./types";
import "./stepper.css";

function Stepper({ steps }: { steps: Steps[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextItem = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const progressLineWidth = (100 / (steps.length - 1)) * currentIndex;

  console.log("width", progressLineWidth);

  return (
    <div className="stepper-wrapper">
      <ul className="steps">
        {steps.map((step, index) => {
          return (
            <li className={`step ${index < currentIndex && "completed"}`}>
              {index + 1}
            </li>
          );
        })}
        <div
          className="progress-line"
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </ul>
      <div>
        {cloneElement(steps[currentIndex].component, { prevItem, nextItem })}
      </div>
    </div>
  );
}

export default Stepper;
