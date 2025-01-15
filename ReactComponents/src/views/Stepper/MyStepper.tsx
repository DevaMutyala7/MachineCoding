import { MouseEventHandler } from "react";
import Stepper from ".";

function MyDetails({
  nextItem,
}: {
  nextItem?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <h2>These are Details page</h2>
      {nextItem && <button onClick={nextItem}>Next</button>}
    </>
  );
}

function Address({
  nextItem,
  prevItem,
}: {
  nextItem?: MouseEventHandler<HTMLButtonElement>;
  prevItem?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <h2>This is Address page</h2>
      {prevItem && <button onClick={prevItem}>Prev</button>}
      {nextItem && <button onClick={nextItem}>Next</button>}
    </>
  );
}

function Submit({
  prevItem,
}: {
  prevItem?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <h2>This is Address page</h2>
      {prevItem && <button onClick={prevItem}>Prev</button>}
    </>
  );
}

function MyStepper() {
  const steps = [
    {
      label: "Details",
      component: <MyDetails />,
    },
    {
      label: "Address",
      component: <Address />,
    },
    {
      label: "Submit",
      component: <Submit />,
    },
  ];
  return <Stepper steps={steps} />;
}

export default MyStepper;
