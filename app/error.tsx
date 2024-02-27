"use client";

import { useEffect } from "react";
import PinkButton from "@/components/common/PinkButton";
import PinkGradient from "@/components/text/PinkGradient";
import GridBox from "@/components/common/GridBox";

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
        <PinkGradient text=":/ Oops!" />
        <div className="flex items-center justify-center gap-4">
          <PinkButton text="Reset" onClick={reset} />
          <PinkButton
            text="Return Home"
            href={process.env.NEXT_PUBLIC_HOME_URL}
          />
        </div>
      </div>
    </GridBox>
  );
}
