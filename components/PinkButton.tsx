"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PinkButtonProps {
  text: string;
  href?: string;
}

const PinkButton = ({ text, href }: PinkButtonProps) => {
  const router = useRouter();

  return (
    <button
      className="px-4 py-2 backdrop-blur-sm text-white border-0 rounded-md hover:shadow-[0px_3px_9px_3px_rgba(0,0,0,0.2)] bg-pink-600 transition duration-300 text-sm"
      onClick={() => (href ? router.push(href) : null)}
    >
      {text}
    </button>
  );
};

export default PinkButton;
