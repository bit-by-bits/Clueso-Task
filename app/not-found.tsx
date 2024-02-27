import GridBox from "@/components/common/GridBox";
import PinkButton from "@/components/common/PinkButton";
import ArchitectsDaughter from "@/components/text/ArchitectsDaughter";
import PinkGradient from "@/components/text/PinkGradient";
import { FaAngleRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkGradient text=":/ Not Found!" />
        <div className="flex flex-col items-center gap-2 mb-4">
          <ArchitectsDaughter text="The page you are looking for does not exist." />
          <ArchitectsDaughter text="Please return home." />
        </div>
        <PinkButton
          text={
            <div className="flex items-center gap-2">
              <span>Return Home</span>
              <FaAngleRight />
            </div>
          }
          href={process.env.NEXT_PUBLIC_HOME_URL}
        />
      </div>
    </GridBox>
  );
}
