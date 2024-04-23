"use client";

import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Cart, X, Plus, Minus } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectItems,
  selectTotalPrice,
} from "@/redux/features/cart/cart-slice";

export default function ShoppingCart() {
  const [showCart, setShowCart] = useState(false);

  const cartItems = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const dispatch = useDispatch();

  const handleIncrement = (itemId: number) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId: number) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleRemoveAllItems = () => {
    dispatch(clearCart());
    toast.success("All items removed from cart");
  };

  return (
    <>
      <button
        type="button"
        className="flex gap-1"
        onClick={() => setShowCart(true)}
      >
        <div className="relative">
          <span className="absolute top-[-15px] inset-x-3 text-yellow-500">
            {totalQuantity}
          </span>
          <Cart />
        </div>
        <span className="font-light">Cart</span>
      </button>

      <Sheet open={showCart} onOpenChange={setShowCart}>
        <SheetContent className="w-full lg:min-w-[500px] flex flex-col justify-between">
          <div className="">
            <SheetHeader>
              <SheetTitle className="text-2xl">Cart</SheetTitle>
            </SheetHeader>

            {totalQuantity > 0 ? (
              <ScrollArea className="h-[73dvh] lg:h-[80vh]">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 py-3 lg:py-5 border-b last:border-b-0"
                  >
                    <div className="relative w-[80px] h-[50px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-md border"
                      />
                    </div>
                    <div className="flex-1 mr-3">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="text-sm lg:text-base line-clamp-3">
                            {item.title}
                          </p>
                          <p className="text-xs lg:text-sm text-gray-600 capitalize">
                            Category: {item.category}
                          </p>
                        </div>

                        <Button
                          size="icon"
                          type="button"
                          className="size-6 bg-transparent hover:bg-gray-200 text-black border"
                          onClick={() => handleRemove(item.id)}
                        >
                          <X className="size-4" />
                        </Button>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            type="button"
                            className="size-6 bg-transparent hover:bg-gray-200 border text-black font-bold disabled:pointer-events-none"
                            onClick={() => handleDecrement(item.id)}
                            disabled={item.quantity < 2}
                          >
                            <Minus className="size-4" />
                          </Button>
                          <span className="">{item.quantity}</span>
                          <Button
                            size="icon"
                            type="button"
                            className="size-6 bg-transparent hover:bg-gray-200 border text-black font-bold  disabled:pointer-events-none"
                            onClick={() => handleIncrement(item.id)}
                          >
                            <Plus className="size-4" />
                          </Button>
                        </div>

                        <span className=" text-gray-600">
                          RS {item.itemPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            ) : (
              <div className="h-[60vh] flex justify-center items-center">
                <p className="text-lg">No items added</p>
              </div>
            )}
          </div>

          {totalQuantity > 0 && (
            <div className="border-t border-gray-400">
              <div className="mt-2 flex justify-end">
                <p className="text-lg">Total: RS {totalPrice}</p>
              </div>
              <div className="mt-5 w-full flex gap-10 items-center">
                <Button
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-600/90"
                  onClick={handleRemoveAllItems}
                >
                  Clear all items
                </Button>
                <Button type="button" className="w-full">
                  Go to checkout
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
