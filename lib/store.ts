import { create } from "zustand";

export interface TreeItem {
  id: string;
  title: string;
  description: string;
  children: TreeItem[];
  isOpen: boolean;
}

interface TreeState {
  tree: TreeItem[];
  selected: TreeItem | null;
  setTree: (tree: TreeItem[]) => void;
  setSelected: (node: TreeItem | null) => void;
  insertNode: (newNode: TreeItem, position: "Start" | "End") => boolean;
  toggleNode: (id: string) => void;
  deleteNode: (id: string) => void;
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

const toggleNodeRecursive = (tree: TreeItem[], id: string): TreeItem[] => {
  return tree.map((node) => {
    if (node.id === id) {
      return { ...node, isOpen: !node.isOpen };
    } else if (node.children && node.children.length > 0) {
      return { ...node, children: toggleNodeRecursive(node.children, id) };
    }

    return node;
  });
};

const deleteNodeRecursive = (tree: TreeItem[], id: string): TreeItem[] => {
  return tree.reduce((acc, node) => {
    if (node.id === id) {
      return acc;
    } else if (node.children && node.children.length > 0) {
      return [
        ...acc,
        { ...node, children: deleteNodeRecursive(node.children, id) },
      ];
    } else {
      return [...acc, node];
    }
  }, [] as TreeItem[]);
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
          isOpen: false,
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
              isOpen: false,
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: "2",
      title: "Root 2",
      description: "This is the second root node",
      children: [],
      isOpen: false,
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
              isOpen: false,
            },
          ],
          isOpen: false,
        },
        {
          id: "3.2",
          title: "Child 3.2",
          description: "This is the second child of the third root",
          children: [],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: "4",
      title: "Root 4",
      description: "This is the fourth root node",
      children: [
        {
          id: "4.1",
          title: "Child 4.1",
          description: "This is the first child of the fourth root",
          children: [],
          isOpen: false,
        },
        {
          id: "4.2",
          title: "Child 4.2",
          description: "This is the second child of the fourth root",
          children: [],
          isOpen: false,
        },
        {
          id: "4.3",
          title: "Child 4.3",
          description: "This is the third child of the fourth root",
          children: [],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: "5",
      title: "Root 5",
      description: "This is the fifth root node",
      children: [
        {
          id: "5.1",
          title: "Child 5.1",
          description: "This is the first child of the fifth root",
          children: [],
          isOpen: false,
        },
        {
          id: "5.2",
          title: "Child 5.2",
          description: "This is the second child of the fifth root",
          children: [],
          isOpen: false,
        },
        {
          id: "5.3",
          title: "Child 5.3",
          description: "This is the third child of the fifth root",
          children: [],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: "6",
      title: "Root 6",
      description: "This is the sixth root node",
      children: [
        {
          id: "6.1",
          title: "Child 6.1",
          description: "This is the first child of the sixth root",
          children: [],
          isOpen: false,
        },
        {
          id: "6.2",
          title: "Child 6.2",
          description: "This is the second child of the sixth root",
          children: [],
          isOpen: false,
        },
        {
          id: "6.3",
          title: "Child 6.3",
          description: "This is the third child of the sixth root",
          children: [
            {
              id: "6.3.1",
              title: "Child 6.3.1",
              description: "This is the first child of the third child",
              children: [],
              isOpen: false,
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
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
  toggleNode: (id: string) => {
    const tree = useTreeStore.getState().tree;
    const updatedTree = toggleNodeRecursive(tree, id);
    set({ tree: updatedTree });
  },
  deleteNode: (id: string) => {
    const { tree, selected } = useTreeStore.getState();
    const updatedTree = deleteNodeRecursive(tree, id);

    if (selected && selected.id === id) set({ selected: null });
    set({ tree: updatedTree });
  },
}));
