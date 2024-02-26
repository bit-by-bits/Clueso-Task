"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import StickyScroll from "@/components/StickyScroll";
import { useState } from "react";

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

  const [tree, setTree] = useState<any>([
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders.",
      children: [
        {
          title: "Real time changes",
          description:
            "See changes as they happen. With our platform, you can track every modification in real time.",
          children: [],
        },
        {
          title: "Version control",
          description:
            "Experience real-time updates and never stress about version control again.",
          children: [],
        },
      ],
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again.",
      children: [],
    },
  ]);

  return <StickyScroll content={tree} setData={setTree} />;
}
