import { FC, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTreeStore } from "@/lib/store";
import Builder from "./Builder";
import Tree from "./tree/Tree";
import Empty from "./tree/Empty";
import Buttons from "./tree/Buttons";

const Task: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { tree, setCurrent } = useTreeStore();

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (tree && tree.length) {
      tree
        .map((_, i) => i / tree?.length)
        .forEach((breakpoint, i) => {
          if (latest > breakpoint - 0.2 && latest <= breakpoint)
            setCurrent(i + 1);
        });
    }
  });

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-4rem)] w-full overflow-y-auto flex justify-evenly relative space-x-10 rounded-md p-10 bg-dot-pink-200"
    >
      <div className="relative flex flex-col items-start px-4 gap-4 w-full md:w-2/3">
        {tree && tree.length ? (
          <>
            <Buttons />
            <Tree items={tree} level={0} />
          </>
        ) : (
          <Empty />
        )}
      </div>
      <div className="hidden md:block h-max w-1/3 rounded-md bg-white sticky top-10 overflow-hidden">
        <Builder />
      </div>
    </div>
  );
};

export default Task;
