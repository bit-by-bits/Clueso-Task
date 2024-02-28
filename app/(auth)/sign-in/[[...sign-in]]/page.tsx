import { SignIn } from "@clerk/nextjs";

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
      <SignIn />
    </div>
  );
}
