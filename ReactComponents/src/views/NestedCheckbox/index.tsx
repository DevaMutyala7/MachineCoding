import { NestedCheck } from "./types";
import Check from "./CheckBox";
import { useCheckBoxProvider } from "./Context/CheckBoxContext";

export default function NestedCheckBox({ data }: { data: NestedCheck }) {
  const { checkBoxes } = useCheckBoxProvider();

  const root = checkBoxes[0];

  return (
    <div className="wrapper">
      {root.children?.map((id) => {
        return <Check key={id} id={id} />;
      })}
    </div>
  );
}
