"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface PinkButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

const PinkButton: FC<PinkButtonProps> = ({ text, href, onClick }) => {
  const router = useRouter();

  return (
    <button
      className="px-4 py-2 backdrop-blur-sm text-white border-0 rounded-md hover:shadow-[0px_3px_9px_3px_rgba(0,0,0,0.2)] bg-pink-600 transition duration-300 text-sm"
      onClick={() => {
        if (onClick) {
          onClick();
          return;
        }

        if (href) {
          router.push(href);
        }
      }}
    >
      {text}
    </button>
  );
};

export default PinkButton;
