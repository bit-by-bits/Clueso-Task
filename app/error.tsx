"use client";

import { useEffect } from "react";
import PinkButton from "@/components/common/PinkButton";
import PinkGradient from "@/components/text/PinkGradient";
import GridBox from "@/components/common/GridBox";
import ArchitectsDaughter from "@/components/text/ArchitectsDaughter";
import { FaAngleRight } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkGradient text=":/ Page Crashed!" />
        <div className="flex flex-col items-center gap-0 sm:gap-2 mb-4">
          <ArchitectsDaughter text="Something went wrong. We are working on it." />
          <ArchitectsDaughter text="Please return home." />
        </div>
        <div className="flex items-center justify-center gap-4">
          <PinkButton
            text={
              <div className="flex items-center gap-2">
                <span>Retry</span>
                <TbReload />
              </div>
            }
            onClick={reset}
          />
          <PinkButton
            text={
              <div className="flex items-center gap-2">
                <span>Home</span>
                <FaAngleRight />
              </div>
            }
            href={process.env.NEXT_PUBLIC_HOME_URL}
          />
        </div>
      </div>
    </GridBox>
  );
}
