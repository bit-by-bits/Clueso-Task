"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import PinkButton from "./common/PinkButton";

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-white px-3 shadow-md z-50 h-18">
      <div className="wrapper flex items-center justify-between">
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
    </div>
  );
};

export default Navbar;
