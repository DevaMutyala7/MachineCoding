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
    let obj: Record<string, NestedCheckTree> = {};

    function getChildrenRecursively(id: string) {
      obj[id] = { ...checkBoxes[id], isChecked };
      obj[id].children?.forEach((id) => {
        getChildrenRecursively(id);
      });
    }

    getChildrenRecursively(id);

    return obj;
  };

  function updateParent(tree: NestedCheck, id: string | null): any {
    if (!id) return {};

    if (!tree[id].parentId) return {};

    const parentId = tree[id].parentId;

    if (!parentId) return {};

    const parent = tree[parentId];

    const allChecked = parent.children?.every(
      (childId) => tree[childId].isChecked
    );

    return {
      [parentId]: {
        ...parent,
        isChecked: allChecked,
      },
      ...updateParent(tree, parent.parentId),
    };
  }

  function handleChecked(id: string) {
    const isChecked = !checkBoxes[id].isChecked;
    const updatedChildren = updateChildren(id, isChecked);

    const updatedState = { ...checkBoxes, ...updatedChildren };

    const updatedParent = updateParent(updatedState, id);

    setCheckBoxes((prev) => ({
      ...prev,
      ...updatedChildren,
      ...updatedParent,
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
