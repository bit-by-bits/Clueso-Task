import { Manrope } from "next/font/google";
import { FC } from "react";

const manrope = Manrope({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface ManRopeProps {
  text: string;
  color?: string;
}

const ManRope: FC<ManRopeProps> = ({ text }) => {
  return (
    <div
      className={`${manrope.className} text-black text-center hover:text-pink-600`}
    >
      {text}
    </div>
  );
};

export default ManRope;
