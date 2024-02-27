import { Architects_Daughter } from "next/font/google";
import { FC } from "react";

const architectsDaughter = Architects_Daughter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface ArchitectsDaughterProps {
  text: string;
  color?: string;
}

const ArchitectsDaughter: FC<ArchitectsDaughterProps> = ({ text }) => {
  return (
    <div
      className={`${architectsDaughter.className} text-[#d43f8c] text-2xl sm:text-3xl text-center w-full`}
    >
      {text}
    </div>
  );
};

export default ArchitectsDaughter;
