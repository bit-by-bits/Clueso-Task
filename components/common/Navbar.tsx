import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-white flex items-center justify-between px-8 py-4 shadow-md z-50">
      <Image src="/logo.svg" alt="Clueso" width={105} height={35} />
    </div>
  );
};

export default Navbar;
