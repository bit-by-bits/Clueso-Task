"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import PinkButton from "./PinkButton";
import { FC } from "react";

interface BuilderProps {
  setData: (data: any) => void;
}

const Schema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(50, {
      message: "Title must not be longer than 50 characters.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(160, {
      message: "Description must not be longer than 160 characters.",
    }),
});

const Builder: FC<BuilderProps> = ({ setData }) => {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  });

  function onSubmit(data: z.infer<typeof Schema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    const newNode = {
      title: data.title,
      description: data.description,
      children: [],
    };

    setData((prev: any) => {
      return {
        ...prev,
        children: [...prev.children, newNode],
      };
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white space-y-6 p-4 rounded"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter description"
                  className="resize-none border border-gray-300 rounded px-3 py-2 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PinkButton text="Submit" onClick={form.handleSubmit(onSubmit)} />
      </form>
    </Form>
  );
};

export default Builder;
