"use client";

import PinkButton from "@/components/common/PinkButton";
import GridBox from "@/components/common/GridBox";
import PinkGradient from "@/components/text/PinkGradient";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { useToast } from "@/components/ui/toast/use-toast";
import { FaAngleRight } from "react-icons/fa";
import ArchitectsDaughter from "@/components/text/ArchitectsDaughter";

export default function Home() {
  const router = useRouter();
  const { userId } = useAuth();
  const { toast } = useToast();

  const handleContinue = () => {
    if (!userId) {
      router.push(process.env.NEXT_PUBLIC_HOME_URL || "/");

      toast({
        title: "Unauthorized Access",
        description: "You need to be logged in to access this page",
      });
    }

    router.push("/task");
  };

  return (
    <GridBox>
      <div className="flex flex-col items-center justify-center">
        <PinkGradient text="Clueso Task" />
        <div className="flex flex-col items-center gap-0 sm:gap-2 mb-4">
          <ArchitectsDaughter text="Here is the task for the frontend position at Clueso." />
          <ArchitectsDaughter text="Please log in to view the task." />
        </div>
        <PinkButton
          text={
            <div className="flex items-center gap-2">
              <span>Continue</span>
              <FaAngleRight />
            </div>
          }
          onClick={handleContinue}
        />
      </div>
    </GridBox>
  );
}
