import { Children } from "react";

function CustomSwitch({ value, children }: { value: number; children: any }) {
  const matched: React.ReactElement[] = [];
  const defaults: React.ReactElement[] = [];

  Children.forEach(children, (child) => {
    if (child.type.name === "CustomComponent") {
      let childValue = child.props.value;
      if (typeof childValue === "function") {
        if (childValue(value)) {
          matched.push(child);
        }
      } else {
        if (childValue === value) {
          matched.push(child);
        }
      }
    } else if (child.type.name === "DefaultCase") {
      defaults.push(child);
    }
  });

  return <>{matched.length ? matched : defaults}</>;
}

export default CustomSwitch;
