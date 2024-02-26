import GridBox from "@/components/GridBox";
import PinkButton from "@/components/PinkButton";
import PinkGradient from "@/components/PinkGradient";

export default function NotFound() {
  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkGradient text=":/ Not Found!" />
        <PinkButton
          text="Return Home"
          href={process.env.NEXT_PUBLIC_HOME_URL}
        />
      </div>
    </GridBox>
  );
}
