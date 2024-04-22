"use client";

import { MagnifyingGlass } from "@/components/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const categories = ["All Categories", "category1", "category2", "category3"];

export default function Search() {
  const [value, setValue] = useState(categories[0]);

  return (
    <div className="flex">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[155px] rounded-r-none outline-none bg-white text-gray-500">
          <SelectValue placeholder={value} />

          {/* {value ? (
                <SelectValue placeholder={value} />
              ) : (
                <p className="text-muted-foreground">{placeholder}</p>
              )} */}
        </SelectTrigger>

        <SelectContent className="w-[200px] bg-white">
          {categories.map((option) => (
            <SelectItem key={option} value={option} className="px-8">
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input
        type="text"
        placeholder="Search for products"
        className="w-[333px] px-4 text-sm border-l border-gray-400 outline-none bg-white text-gray-500"
      />
      <button
        type="button"
        className="w-[43px] rounded-r flex justify-center items-center bg-custom-gray4"
      >
        <MagnifyingGlass />
      </button>
    </div>
  );
}
