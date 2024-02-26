import { ReactNode } from "react";

const GridBox = ({ children }: Readonly<{ children?: ReactNode }>) => {
  return (
    <div className="h-full w-full bg-grid-pink-200 relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  );
};

export default GridBox;
