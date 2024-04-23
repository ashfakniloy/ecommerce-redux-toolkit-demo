"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cart-slice";
import { toast } from "sonner";

export default function ProductCard({ product }: { product: ProductProps }) {
  const { title, image, price } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product), 1);
    toast.success("1 item added to the cart");
  };

  return (
    <div className="w-[186px] p-2 lg:p-[14px] border">
      <p className="text-xs">Bin Bakar Electronics</p>
      <p className="mt-[11px] text-[15px] truncate text-custom-teal">{title}</p>

      <div className="mt-[11px] w-full flex justify-center h-[110px]">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-auto"
        />
      </div>
      <p className="mt-[11px] text-[15px] text-custom-cyan3">RS {price}</p>
      <Button
        type="button"
        variant="classic"
        className="mt-[11px] w-full"
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}
