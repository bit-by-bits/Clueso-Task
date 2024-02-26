import PinkGradient from "@/components/PinkGradient";
import PinkButton from "@/components/PinkButton";
import GridBox from "@/components/GridBox";

export default function Home() {
  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkGradient text="Clueso Task" />
        <PinkButton text="Continue →" href={process.env.NEXT_PUBLIC_TASK_URL} />
      </div>
    </GridBox>
  );
}
