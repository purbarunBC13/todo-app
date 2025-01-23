import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/router";
import { PenIcon, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
}
const items: Item[] = [
  {
    id: "1",
    name: "Item 1",
    category: "Category 1",
    description: "Description 1",
  },
  {
    id: "2",
    name: "Item 2",
    category: "Category 2",
    description: "Description 2",
  },
  {
    id: "3",
    name: "Item 3",
    category: "Category 3",
    description: "Description 3",
  },
];

const IndexPage = () => {
  const router = useRouter();

  const { id, highlight } = router.query;

  //   console.log("id", id);
  //   console.log("highlight", highlight);

  const handleClick = (itemId: string) => {
    router.push(`home/?id=${itemId}&highlight=true`, undefined, {
      shallow: true,
    });
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      router.push("/home/", undefined, { shallow: true });
    }
  };

  return (
    <div>
      <main className="container mx-auto p-4">
        <div className="flex flex-col items-center gap-4 pt-20">
          <h1>Add Your Tasks</h1>
          <div className="grid grid-cols-1 gap-4 place-items-center w-full ">
            {items.map((item) => (
              <Card
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="flex justify-around items-center gap-10 w-[70%] p-5"
              >
                <CardHeader className="p-0">
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p>{item.description}</p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button size={"icon"} variant={"ghost"}>
                    <Trash className="size-6" />
                  </Button>
                  <Button size={"icon"} variant={"ghost"}>
                    <PenIcon className="size-6" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={highlight === "true"} onOpenChange={handleOpenChange}>
          <DialogTrigger className="hidden" />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{id}</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default IndexPage;
