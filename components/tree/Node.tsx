import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useTreeStore, TreeItem } from "@/lib/store";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Tree from "./Tree";
import PinkButton from "../common/PinkButton";

interface NodeProps {
  item: TreeItem;
  level: number;
  curr: number;
}

const Node: FC<NodeProps> = ({ item, level, curr }) => {
  const { div: Mdiv, h2: Mh2, p: Mp } = motion;
  const { id, title, description, children } = item;

  const isInView = parseInt(id.split(".")[0]) - 1 === curr;

  const { selected, setSelected } = useTreeStore();
  const handleClick = () => setSelected(item);

  return (
    <div className="my-4">
      <div className="flex">
        <Mh2
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0.3,
            color: selected?.id === id ? "deeppink" : "black",
          }}
          className="text-2xl font-bold min-w-max"
          onClick={handleClick}
        >
          {title}
        </Mh2>
        {children && children.length ? (
          <Collapsible>
            <CollapsibleTrigger>
              <Mdiv
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0.3 }}
                className="ml-4 scale-75 transform origin-left"
              >
                <PinkButton text="Toggle" />
              </Mdiv>
            </CollapsibleTrigger>
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
