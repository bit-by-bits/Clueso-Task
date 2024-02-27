"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface PinkButtonProps {
  text: string | ReactNode;
  href?: string;
  onClick?: () => void;
}

const PinkButton: FC<PinkButtonProps> = ({ text, href, onClick }) => {
  const router = useRouter();

  return (
    <button
      className="px-3 py-2 backdrop-blur-sm text-white border-0 rounded-lg hover:shadow-lg bg-pink-600 transition duration-300 text-sm hover:bg-pink-700"
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
