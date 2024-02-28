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
      className={`${architectsDaughter.className} text-pink-600 text-xl sm:text-3xl text-center w-4/5`}
    >
      {text}
    </div>
  );
};

export default ArchitectsDaughter;
