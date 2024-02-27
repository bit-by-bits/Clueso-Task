import { FC } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { motion } from "framer-motion";
import Tree from "./Tree";
import { TreeItem } from "@/lib/store";

interface NodeProps {
  item: TreeItem;
  level: number;
  curr: number;
}

const Node: FC<NodeProps> = ({ item, level, curr }) => {
  const { h2: Mh2, p: Mp } = motion;
  const { id, title, description, children } = item;

  const isInView = parseInt(id.split(".")[0]) - 1 === curr;

  return (
    <div className="my-4">
      <div className="flex">
        <Mh2
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0.3 }}
          className="text-2xl font-bold"
        >
          {title}
        </Mh2>
        {children && children.length ? (
          <Collapsible>
            <CollapsibleTrigger>Toggle</CollapsibleTrigger>
            <CollapsibleContent>
              <Tree items={children} level={level + 1} curr={curr} />
            </CollapsibleContent>
          </Collapsible>
        ) : null}
      </div>
      <Mp initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0.3 }}>
        {description}
      </Mp>
    </div>
  );
};

export default Node;
