import { FC } from "react";

interface PinkGradientProps {
  text: string;
}

const PinkGradient: FC<PinkGradientProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center text-center">
      {text?.split(" ").map((word, i) => (
        <p
          key={i}
          className={`text-5xl sm:text-7xl font-semibold relative z-20 py-4 sm:py-8 bg-clip-text text-transparent bg-gradient-to-b ${i % 2 ? "from-[#ff008c] via-[#ff008c] to-[#4f46e5]" : "from-transparent via-black to-black"}`}
        >
          {word}&nbsp;
        </p>
      ))}
    </div>
  );
};

export default PinkGradient;
