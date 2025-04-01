export interface NestedCheckTree {
  id: string;
  category: string;
  isChecked: boolean;
  parentId: string | null;
  children?: string[];
  childCheckedCount?: number;
}

export type NestedCheck = Record<string, NestedCheckTree>;
