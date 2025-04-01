import React, { createContext, useContext, useState } from "react";
import { NestedCheck, NestedCheckTree } from "../types.js";
import { data } from "../data.js";

interface CheckBoxContextType {
  checkBoxes: NestedCheck;
  handleChecked: (id: string) => void;
}

const defaultValue: CheckBoxContextType = {
  checkBoxes: {
    "0": {
      id: "0",
      category: "",
      parentId: null,
      isChecked: false,
      children: [],
    },
  },
  handleChecked: (id: string) => "",
};

export const CheckBoxContext = createContext(defaultValue);

export default function CheckBoxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checkBoxes, setCheckBoxes] = useState<NestedCheck>(data);

  const updateChildren = (id: string, isChecked: boolean) => {
    let obj = checkBoxes[id];

    function getChildrenRecursively(children?: string[]): any {
      children?.forEach((id) => {
        updateChildren(id, isChecked);
      });
    }

    getChildrenRecursively(obj.children);

    return {
      [id]: {
        ...obj,
        isChecked,
      },
    };
  };

  function handleChecked(id: string) {
    const isChecked = !checkBoxes[id].isChecked;
    const updatedChildren = updateChildren(id, isChecked);
    console.log("updated", updatedChildren);
    // const updatedState = { ...checkBoxes, ...updatedChildren };

    // const updatedParents = updateParent(checkBoxes[id].parentId, updatedState);

    setCheckBoxes((prev) => ({
      ...prev,
      ...updatedChildren,
    }));
  }

  const value = { checkBoxes, handleChecked };

  return (
    <CheckBoxContext.Provider value={value}>
      {children}
    </CheckBoxContext.Provider>
  );
}

function useCheckBoxProvider() {
  const context = useContext(CheckBoxContext);

  if (!context) {
    throw new Error("Provider should be used within boundaries");
  }

  return context;
}

export { useCheckBoxProvider };
