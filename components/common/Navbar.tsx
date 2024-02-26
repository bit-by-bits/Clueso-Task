"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import PinkButton from "../PinkButton";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-white flex items-center justify-between px-8 py-4 shadow-md z-50">
      <Link href={process.env.NEXT_PUBLIC_HOME_URL || "/"}>
        <Image src="/logo.svg" alt="Clueso" width={105} height={35} />
      </Link>
      <div className="flex w-32 justify-end gap-3">
        <SignedIn>
          <UserButton
            afterSignOutUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}
          />
        </SignedIn>
        <SignedOut>
          <PinkButton
            text="Login"
            href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
          />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
