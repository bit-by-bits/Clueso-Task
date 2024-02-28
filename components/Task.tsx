import Image from "next/image";
import { motion } from "framer-motion";
import { FC, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTreeStore } from "@/lib/store";
import Builder from "./Builder";
import Tree from "./tree/Tree";
import Empty from "./tree/Empty";
import Buttons from "./tree/Buttons";

const Task: FC = () => {
  const { div: Mdiv } = motion;
  const { tree, setCurrent } = useTreeStore();

  const ref = useRef<HTMLDivElement>(null);

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
    <Mdiv
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
      <Mdiv className="hidden md:block h-max w-1/3 rounded-md bg-white sticky top-10 overflow-hidden">
        <Builder />
      </Mdiv>
    </Mdiv>
  );
};

export default Task;
