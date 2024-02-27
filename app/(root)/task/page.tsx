"use client";

import Task from "@/components/Task";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast/use-toast";

export default function Home() {
  const router = useRouter();
  const { userId } = useAuth();
  const { toast } = useToast();

  if (!userId) {
    router.push(process.env.NEXT_PUBLIC_HOME_URL || "/");

    toast({
      title: "Unauthorized Access",
      description: "You need to be logged in to access this page",
    });
  }

  return <Task />;
}
