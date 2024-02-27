import Image from "next/image";
import { FC, ReactNode } from "react";

interface GridBoxProps {
  children: ReactNode;
}

const GridBox: FC<GridBoxProps> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full bg-grid-pink-100 relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Image src="/back.svg" alt="grid" layout="fill" objectFit="cover" className="opacity-50" />
      {children}
    </div>
  );
};

export default GridBox;
