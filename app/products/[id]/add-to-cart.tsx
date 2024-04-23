"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Minus, Plus } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { addToCart, toggleCart } from "@/redux/features/cart/cart-slice";

export default function AddToCart({ product }: { product: ProductProps }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: count }));
    toast.success(`${count} items added to the cart`);
    setCount(1);
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ product, quantity: count }));
    dispatch(toggleCart());
    setCount(1);
  };

  return (
    <div>
      <div className="flex items-center gap-5">
        <span>Quantity</span>
        <div className="flex items-center gap-4">
          <Button
            size="icon"
            type="button"
            className="size-7 bg-transparent hover:bg-gray-200 border text-black"
            onClick={() => setCount(count - 1)}
            disabled={count < 2}
          >
            <Minus className="size-5" />
          </Button>
          <span className="text-lg">{count}</span>
          <Button
            size="icon"
            type="button"
            className="size-7 bg-transparent hover:bg-gray-200 border text-black"
            onClick={() => setCount(count + 1)}
          >
            <Plus className="size-5" />
          </Button>
        </div>
      </div>

      <div className="mt-4 flex gap-5">
        <Button
          type="button"
          className=" bg-lime-600 hover:bg-lime-600/90"
          onClick={handleBuyNow}
        >
          Buy now
        </Button>
        <Button
          type="button"
          className="bg-custom-cyan2 hover:bg-custom-cyan2/90"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
