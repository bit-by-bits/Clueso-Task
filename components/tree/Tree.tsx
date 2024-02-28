import { FC } from "react";
import Node from "./Node";
import { TreeItem } from "@/lib/store";

interface TreeProps {
  items: TreeItem[];
  level: number;
}

const Tree: FC<TreeProps> = ({ items, level }) => {
  return items?.map((e, i) => <Node key={i} item={e} level={level} />);
};

export default Tree;
