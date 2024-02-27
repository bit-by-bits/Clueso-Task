"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import PinkButton from "./common/PinkButton";
import { FaGithub } from "react-icons/fa";
import ManRope from "./text/ManRope";

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-white px-3 shadow-md z-50 h-18">
      <div className="flex items-center justify-between py-5">
        <Link href={process.env.NEXT_PUBLIC_HOME_URL || "/"}>
          <Image src="/logo.svg" alt="Clueso" width={105} height={35} />
        </Link>
        <div className="hidden lg:flex items-center justify-center gap-4">
          <Link href={process.env.NEXT_PUBLIC_HOME_URL || "/"}>
            <ManRope text="Home Page" />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_TASK_URL || "/"}>
            <ManRope text="Task Page" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <PinkButton
            text={
              <div className="flex items-center gap-2">
                <FaGithub />
                <span>Developer</span>
              </div>
            }
            href="https://github.com/bit-by-bits"
          />
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
