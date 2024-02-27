import GridBox from "@/components/common/GridBox";
import PinkButton from "@/components/common/PinkButton";
import PinkGradient from "@/components/text/PinkGradient";

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
