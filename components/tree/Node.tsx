import { FC } from "react";
import { motion } from "framer-motion";
import { useTreeStore, TreeItem } from "@/lib/store";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Tree from "./Tree";
import { AiOutlineDelete } from "react-icons/ai";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

interface NodeProps {
  item: TreeItem;
  level: number;
}

const Node: FC<NodeProps> = ({ item, level }) => {
  const { div: Mdiv, h2: Mh2, p: Mp } = motion;
  const { id, title, description, children, isOpen } = item;

  const { selected, current, setSelected, setCurrent, toggleNode, deleteNode } =
    useTreeStore();

  const ID = parseInt(id.split(".")[0]);
  const isActive = selected?.id === id;
  const isInView = ID === current;

  const handleSelect = () => {
    setSelected(isActive ? null : item);
    setCurrent(ID);
  };

  const handleDelete = () => {
    deleteNode(id);
  };

  const handleToggle = () => {
    toggleNode(id);
    setCurrent(ID);
  };

  return (
    <div className="my-4">
      <div className="flex items-center gap-4">
        <Mh2
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0.3,
            color: isActive ? "deeppink" : "black",
          }}
          className="text-2xl font-bold min-w-max cursor-pointer"
          onClick={handleSelect}
        >
          {title}
        </Mh2>

        <Mdiv
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0.3 }}
          className="cursor-pointer hover:text-red-500"
          onClick={handleDelete}
        >
          <AiOutlineDelete />
        </Mdiv>
      </div>
      {children && children.length ? (
        <Collapsible open={isOpen} onOpenChange={handleToggle}>
          <CollapsibleTrigger>
            <Mdiv
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0.3 }}
              className="ml-4 scale-75 transform origin-left font-semibold cursor-pointer hover:text-pink-600 flex items-center gap-2"
            >
              <span>{isOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}</span>
              <span>{isOpen ? "Collapse" : "Expand"}</span>
            </Mdiv>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div
              className="ml-4 mt-2 w-full border-l-2 border-pink-200 pl-2"
              style={{ marginLeft: "1rem" }}
            >
              <Tree items={children} level={level + 1} />
            </div>
          </CollapsibleContent>
        </Collapsible>
      ) : null}
      <Mp initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0.3 }}>
        {description}
      </Mp>
    </div>
  );
};

export default Node;
