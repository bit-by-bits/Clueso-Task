import Image from "next/image";
import { motion } from "framer-motion";
import { FC, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTreeStore } from "@/lib/store";
import ArchitectsDaughter from "./text/ArchitectsDaughter";
import Builder from "./Builder";
import Tree from "./tree/Tree";

const colors = ["white", "pink-100", "white", "neutral-100"].map(
  (color) => `var(--${color})`
);

const Task: FC = () => {
  const { div: Mdiv } = motion;
  const { tree } = useTreeStore();

  const ref = useRef<HTMLDivElement>(null);
  const [curr, setCurr] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (tree && tree.length)
      tree
        .map((_, i) => i / tree?.length)
        .forEach((breakpoint, i) => {
          if (latest > breakpoint - 0.2 && latest <= breakpoint)
            setCurr(() => i);
        });
  });

  return (
    <Mdiv
      ref={ref}
      animate={{ backgroundColor: colors[curr % colors.length] }}
      className="h-[calc(100vh-6rem)] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-dot-pink-600"
    >
      <div className="relative flex flex-col items-start px-4 w-1/2">
        {tree && tree.length ? (
          <Tree items={tree} level={0} curr={curr} />
        ) : (
          <>
            <ArchitectsDaughter text="No tasks found." />
            <ArchitectsDaughter text="Add more from here" />
            <div className="transform rotate-90 cursor-pointer -scale-y-100 flex items-center justify-center w-full">
              <Image src="/arrow.svg" alt="→" width={30} height={30} />
            </div>
          </>
        )}
      </div>
      <Mdiv className="hidden lg:block h-max w-max rounded-md bg-white sticky top-10 overflow-hidden">
        <Builder />
      </Mdiv>
    </Mdiv>
  );
};

export default Task;
