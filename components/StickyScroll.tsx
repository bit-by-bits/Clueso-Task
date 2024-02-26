"use client";

import { FC, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Builder from "./Builder";

interface ContentItem {
  title: string;
  description: string;
  children?: ContentItem[];
}

interface StickyScrollProps {
  content: ContentItem[];
  setData: (data: any) => void;
}

const StickyScroll: FC<StickyScrollProps> = ({ content, setData }) => {
  const { div: Mdiv, h2: Mh2, p: Mp } = motion;

  const ref = useRef<HTMLDivElement>(null);
  const [curr, setCurr] = useState(0);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, i) => i / content.length);

    cardsBreakpoints.forEach((breakpoint, i) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) setCurr(i);
    });
  });

  const colors = ["pink-100", "white", "neutral-100"].map(
    (color) => `var(--${color})`
  );

  const renderContent = (items: ContentItem[]) => {
    return items.map((item, index) => (
      <div key={index} className="my-20">
        <Mh2
          initial={{ opacity: 0 }}
          animate={{ opacity: curr === index ? 1 : 0.3 }}
          className="text-2xl font-bold"
        >
          {item.title}
        </Mh2>
        <Mp
          initial={{ opacity: 0 }}
          animate={{ opacity: curr === index ? 1 : 0.3 }}
          className="text-kg max-w-sm mt-10"
        >
          {item.description}
        </Mp>
        {item.children && renderContent(item.children)}
      </div>
    ));
  };

  return (
    <Mdiv
      ref={ref}
      animate={{ backgroundColor: colors[curr % colors.length] }}
      className="h-[calc(100vh-6rem)] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-dot-pink-600"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">{renderContent(content)}</div>
      </div>
      <Mdiv className="hidden lg:block h-max w-max rounded-md bg-white sticky top-10 overflow-hidden">
        <Builder setData={setData} />
      </Mdiv>
    </Mdiv>
  );
};

export default StickyScroll;
