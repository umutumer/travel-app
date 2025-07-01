import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SearchComp = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden md:flex bg-orange-500 cursor-pointer text-white rounded-full">
          <Search size={16} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex items-center gap-2 m-3 text-white">
            <Input placeholder="Search..." />
            <Button className="duration-300 ease-in-out">
              <Search size={16} />
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default SearchComp;
