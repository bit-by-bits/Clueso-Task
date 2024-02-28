import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
      <SignUp />
    </div>
  );
}
