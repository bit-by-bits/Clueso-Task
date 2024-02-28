import React from "react";
import PinkButton from "../common/PinkButton";
import { useTreeStore } from "@/lib/store";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "../ui/drawer";
import Builder from "../Builder";

const Buttons = () => {
  const { selected, openAll, closeAll, deleteAll } = useTreeStore();

  return (
    <div className="flex justify-center md:justify-start gap-4 w-full">
      <PinkButton text="Delete All" onClick={() => deleteAll()} />
      <div className="hidden xxxs:flex gap-4">
        <PinkButton text="Open All" onClick={() => openAll()} />
        <PinkButton text="Close All" onClick={() => closeAll()} />
      </div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <PinkButton text="Add Node" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                {`Add Node${selected ? `to ${selected.title}` : ""}`}
              </DrawerTitle>
              <DrawerDescription>
                Fill in the details to add a new node
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Builder />
              <DrawerClose>
                <PinkButton text="Cancel" />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Buttons;
