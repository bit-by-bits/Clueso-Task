"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import StickyScroll from "@/components/tree/StickyScroll";
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
      title: "Folder 1",
      description: "This is the first folder",
      children: [
        {
          title: "File 1",
          description: "This is a file in Folder 1",
          children: [],
        },
        {
          title: "Folder 1.1",
          description: "This is a subfolder in Folder 1",
          children: [
            {
              title: "File 2",
              description: "This is a file in Folder 1.1",
              children: [],
            },
          ],
        },
      ],
    },
    {
      title: "Folder 2",
      description: "This is the second folder",
      children: [
        {
          title: "File 3",
          description: "This is a file in Folder 2",
          children: [],
        },
        {
          title: "Folder 2.1",
          description: "This is a subfolder in Folder 2",
          children: [
            {
              title: "File 4",
              description: "This is a file in Folder 2.1",
              children: [],
            },
            {
              title: "Folder 2.1.1",
              description: "This is a subfolder in Folder 2.1",
              children: [
                {
                  title: "File 5",
                  description: "This is a file in Folder 2.1.1",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <StickyScroll content={tree} setData={setTree} />;
}
