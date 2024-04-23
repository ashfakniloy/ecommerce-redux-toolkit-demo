"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { addToCart } from "@/redux/features/cart/cart-slice";

export default function ProductCard({ product }: { product: ProductProps }) {
  const { title, image, price } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("1 item added to the cart");
  };

  return (
    <div className="w-[186px] p-2 lg:p-[14px] border group hover:shadow-md transition-shadow duration-200">
      <Link href={`/products/${product.id}`}>
        <p className="text-xs">Bin Bakar Electronics</p>
        <p className="mt-[11px] text-[15px] truncate text-custom-teal">
          {title}
        </p>

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
      </Link>
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
