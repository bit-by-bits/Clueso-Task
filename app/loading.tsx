import GridBox from "@/components/common/GridBox";
import PinkLoader from "@/components/loader/PinkLoader";

export default function Loader() {
  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkLoader />
      </div>
    </GridBox>
  );
}
