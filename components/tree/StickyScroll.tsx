import React, { FC, useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Builder from "./Builder";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
  const [curr, setCurr] = useState<number | null>(0);

  useEffect(() => {
    const firstItem = content[0];
    if (firstItem) {
      const index = content.indexOf(firstItem);
      setCurr(index);
    }
  }, [content]);

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

  const isFolderInView = (index: number): boolean => {
    if (curr === null) return false;
    if (curr === index) return true;
    const folder = content[index];
    if (!folder?.children || folder?.children.length === 0) return false;
    return folder?.children.some((child) =>
      isFolderInView(content.indexOf(child))
    );
  };

  const renderContent = (items: ContentItem[], level: number = 0) => {
    return items.map((e, i) => {
      const isCurrentFolder = isFolderInView(i);
      return (
        <div key={i} className="my-4">
          <div className="flex">
            <Mh2
              initial={{ opacity: 0 }}
              animate={{ opacity: isCurrentFolder ? 1 : 0.3 }}
              className="text-2xl font-bold"
            >
              {e.title}
            </Mh2>
            {e?.children && e?.children.length ? (
              <Collapsible>
                <CollapsibleTrigger>Toggle</CollapsibleTrigger>
                <CollapsibleContent>
                  {renderContent(e?.children, level + 1)}
                </CollapsibleContent>
              </Collapsible>
            ) : null}
          </div>
          <Mp
            initial={{ opacity: 0 }}
            animate={{ opacity: isCurrentFolder ? 1 : 0.3 }}
            className="max-w-sm mt-4"
          >
            {e.description}
          </Mp>
        </div>
      );
    });
  };

  return (
    <Mdiv
      ref={ref}
      animate={{
        backgroundColor: colors[curr !== null ? curr % colors.length : 0],
      }}
      className="h-[calc(100vh-6rem)] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-dot-pink-600"
    >
      <div className="div relative flex items-start px-4 w-1/2">
        <div className="max-w-2xl">{renderContent(content)}</div>
      </div>
      <Mdiv className="hidden lg:block h-max w-max rounded-md bg-white sticky top-10 overflow-hidden">
        <Builder setData={setData} />
      </Mdiv>
    </Mdiv>
  );
};

export default StickyScroll;
