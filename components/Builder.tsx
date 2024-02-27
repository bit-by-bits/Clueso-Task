import { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTreeStore, TreeItem } from "@/lib/store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import PinkButton from "./common/PinkButton";
import { useToast } from "./ui/toast/use-toast";
import { Switch } from "./ui/switch";

const Schema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters." })
    .max(50, { message: "Title must not be longer than 50 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(160, {
      message: "Description must not be longer than 160 characters.",
    }),
  position: z.enum(["Start", "End"]),
});

const Builder: FC = () => {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: { position: "Start" },
  });

  const { control, handleSubmit } = form;
  const { toast } = useToast();
  const { selected, insertNode } = useTreeStore();

  function onSubmit(data: z.infer<typeof Schema>) {
    const { title, description, position } = data;

    const newNode: TreeItem = {
      id: selected
        ? `${selected.id}.${Math.random().toString().slice(2)}`
        : "1",
      title,
      description,
      children: [],
    };

    if (insertNode(newNode, position))
      toast({ title: "Success", description: "New node added successfully." });
    else toast({ title: "Error", description: "Failed to add new node." });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white space-y-6 p-4 rounded"
      >
        <FormField
          control={control}
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
          control={control}
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
        <FormField
          control={control}
          name="position"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl>
                <Switch
                  checked={field.value === "End"}
                  onCheckedChange={(isChecked) =>
                    field.onChange(isChecked ? "End" : "Start")
                  }
                />
              </FormControl>
              <FormLabel>{`Add @${field.value}`}</FormLabel>
            </FormItem>
          )}
        />
        <PinkButton text={`Add To ${selected?.title || "parent"}`} />
      </form>
    </Form>
  );
};

export default Builder;
