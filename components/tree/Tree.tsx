import { FC } from "react";
import Node from "./Node";
import { TreeItem } from "@/lib/store";

interface TreeProps {
  items: TreeItem[];
  level: number;
  curr: number;
}

const Tree: FC<TreeProps> = ({ items, level, curr }) => {
  return items?.map((e, i) => (
    <Node key={i} item={e} level={level} curr={curr} />
  ));
};

export default Tree;
