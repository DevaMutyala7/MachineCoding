import { useCheckBoxProvider } from "./Context/CheckBoxContext";
import "./styles.css";

export default function Check({ id }: { id: string }) {
  const { checkBoxes, handleChecked } = useCheckBoxProvider();
  const item = checkBoxes[id];

  return (
    <>
      <div>
        <input
          type="checkbox"
          id={item.category}
          checked={item.isChecked}
          className="checkbox"
          onChange={() => handleChecked(item.id)}
        />
        <label htmlFor={item.category}>{item.category}</label>
      </div>
      <div className="nested-box">
        {item?.children?.map((check) => {
          return <Check key={check} id={check} />;
        })}
      </div>
    </>
  );
}
