"use client";

import { useState } from "react";
import { MagnifyingGlass } from "@/components/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategoriesQuery } from "@/redux/api/products-api";

export default function Search() {
  const { data, isLoading, isError, isSuccess } = useGetCategoriesQuery();

  const categories = ["All Categories", ...(data ?? [])];

  const [value, setValue] = useState(categories?.[0]);

  return (
    <div className="flex">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[155px] rounded-r-none outline-none bg-white text-gray-500 capitalize">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Something went wrong</p>}
          {isSuccess && <SelectValue placeholder={value} />}
        </SelectTrigger>

        {isSuccess && (
          <SelectContent className="w-[200px] bg-white">
            {categories.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="px-8 capitalize"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        )}
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
