import Image from "next/image";
import { Headphone, User, Heart, Cart } from "@/components/icons";
import WinstoreLogo from "@/public/logo.svg";
import Link from "next/link";
import Search from "./search";
import ShoppingCart from "./shopping-cart";

export default function HeaderTop() {
  return (
    <div className="bg-custom-gray text-white">
      <div className="container py-[10px] flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src={WinstoreLogo} alt="winstore logo" />
          </Link>
          <Search />
        </div>

        <div className="flex items-center gap-7">
          <div className="font-light">
            <p className="text-[9px]">Call Us Now</p>
            <div className="mt-px flex items-center gap-1 text-[13px]">
              <Headphone />
              <p className="">+011 5827918</p>
            </div>
            <p className="mt-1 text-[13px]">Sign In</p>
          </div>

          <Link href="">
            <User />
          </Link>
          <Link href="">
            <Heart />
          </Link>

          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
