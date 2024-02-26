import React from "react";
import GridBox from "@/components/GridBox";
import PinkGradient from "@/components/PinkGradient";
import PinkButton from "@/components/PinkButton";

export default function Home() {
  return (
    <main className="wrapper h-screen w-screen bg-white">
      <GridBox>
        <div className="flex flex-col items-center justify-center">
          <PinkGradient text="Clueso Task" />
          <PinkButton
            text="Continue →"
            href={process.env.NEXT_PUBLIC_TASK_URL}
          />
        </div>
      </GridBox>
    </main>
  );
}
