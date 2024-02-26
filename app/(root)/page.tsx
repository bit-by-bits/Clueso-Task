import PinkGradient from "@/components/common/PinkGradient";
import PinkButton from "@/components/common/PinkButton";
import GridBox from "@/components/common/GridBox";

export default function Home() {
  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkGradient text="Clueso Task" />
        <span className="w-1/2 text-center text-xl mb-4">
          Here is the task for the frontend position at Clueso. Please log in to
          view the task.
        </span>
        <PinkButton text="Continue →" href={process.env.NEXT_PUBLIC_TASK_URL} />
      </div>
    </GridBox>
  );
}
