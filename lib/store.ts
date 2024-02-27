import { create } from "zustand";

export interface TreeItem {
  id: string;
  title: string;
  description: string;
  children?: TreeItem[];
}

interface TreeState {
  tree: TreeItem[];
  setTree: (tree: TreeItem[]) => void;
}

export const useTreeStore = create<TreeState>((set) => ({
  tree: [
    {
      id: "1",
      title: "Folder 1",
      description: "This is the first folder",
      children: [
        {
          id: "1.1",
          title: "File 1",
          description: "This is a file in Folder 1",
          children: [],
        },
        {
          id: "1.2",
          title: "Folder 1.1",
          description: "This is a subfolder in Folder 1",
          children: [
            {
              id: "1.2.1",
              title: "File 2",
              description: "This is a file in Folder 1.1",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Folder 2",
      description: "This is the second folder",
      children: [
        {
          id: "2.1",
          title: "File 3",
          description: "This is a file in Folder 2",
          children: [],
        },
        {
          id: "2.2",
          title: "Folder 2.1",
          description: "This is a subfolder in Folder 2",
          children: [
            {
              id: "2.2.1",
              title: "File 4",
              description: "This is a file in Folder 2.1",
              children: [],
            },
            {
              id: "2.2.2",
              title: "Folder 2.1.1",
              description: "This is a subfolder in Folder 2.1",
              children: [
                {
                  id: "2.2.2.1",
                  title: "File 5",
                  description: "This is a file in Folder 2.1.1",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  setTree: (tree) => set({ tree }),
}));
