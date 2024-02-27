import { create } from "zustand";

export interface TreeItem {
  id: string;
  title: string;
  description: string;
  children: TreeItem[];
}

interface TreeState {
  tree: TreeItem[];
  selected: TreeItem | null;
  setTree: (tree: TreeItem[]) => void;
  setSelected: (node: TreeItem | null) => void;
  insertNode: (newNode: TreeItem, position: "Start" | "End") => boolean;
}

const findParentNode = (node: TreeItem, targetId: string): TreeItem | null => {
  if (node.id === targetId) return node;

  if (node.children)
    for (const child of node.children) {
      const found = findParentNode(child, targetId);
      if (found) return found;
    }

  return null;
};

export const useTreeStore = create<TreeState>((set) => ({
  tree: [
    {
      id: "1",
      title: "Root",
      description: "This is the root node",
      children: [
        {
          id: "1.1",
          title: "Child 1",
          description: "This is the first child node",
          children: [],
        },
        {
          id: "1.2",
          title: "Child 2",
          description: "This is the second child node",
          children: [
            {
              id: "1.2.1",
              title: "Child 2.1",
              description: "This is the first child of the second child",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Root 2",
      description: "This is the second root node",
      children: [],
    },
    {
      id: "3",
      title: "Root 3",
      description: "This is the third root node",
      children: [
        {
          id: "3.1",
          title: "Child 3.1",
          description: "This is the first child of the third root",
          children: [
            {
              id: "3.1.1",
              title: "Child 3.1.1",
              description: "This is the first child of the first child",
              children: [],
            },
          ],
        },
        {
          id: "3.2",
          title: "Child 3.2",
          description: "This is the second child of the third root",
          children: [],
        },
      ],
    },
  ],
  selected: null,
  setTree: (tree) => set({ tree }),
  setSelected: (node) => set({ selected: node }),
  insertNode: (newNode, position) => {
    const updatedTree = [...useTreeStore.getState().tree];
    const selectedParent = useTreeStore.getState().selected;

    if (updatedTree.length === 0) {
      updatedTree.push({ ...newNode, children: [] });
      set({ tree: updatedTree });
      return true;
    }

    if (!selectedParent) {
      console.error("Selected parent not found.");
      return false;
    }

    const parentNode = findParentNode(updatedTree[0], selectedParent.id);

    if (!parentNode) {
      console.error("Parent node not found.");
      return false;
    }

    if (!parentNode.children) {
      parentNode.children = [];
    }

    if (position === "Start") {
      parentNode.children.unshift(newNode);
    } else if (position === "End") {
      parentNode.children.push(newNode);
    }

    set({ tree: updatedTree });
    return true;
  },
}));
