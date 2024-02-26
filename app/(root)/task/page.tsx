"use client";

import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  const { userId } = useAuth();

  if (!userId) {
    router.push(process.env.NEXT_PUBLIC_HOME_URL || "/");

    toast({
      title: "Unauthorized Access",
      description: "You need to be logged in to access this page",
    });
  }

  return <div>Hey {userId}</div>;
}
