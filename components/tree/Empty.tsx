import React from "react";
import ArchitectsDaughter from "../text/ArchitectsDaughter";
import Image from "next/image";

const Empty = () => {
  return (
    <>
      <ArchitectsDaughter text="No tasks found." />
      <ArchitectsDaughter text="Add more from here" />
      <div className="transform rotate-90 cursor-pointer -scale-y-100 flex items-center justify-center w-full">
        <Image src="/arrow.svg" alt="→" width={30} height={30} />
      </div>
    </>
  );
};

export default Empty;
