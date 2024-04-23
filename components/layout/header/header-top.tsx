"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Headphone, User, Heart } from "@/components/icons";
import Search from "./search";
import ShoppingCart from "./shopping-cart";
import HamburgerButton from "./hamburger-button";
import NavDrawer from "./nav-drawer";
import AnimateHeight from "@/components/animate-height";
import WinstoreLogo from "@/public/logo.svg";

export default function HeaderTop() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowNavDrawer(false);
  }, [pathname]);

  return (
    <div className="bg-custom-gray text-white">
      <div className="container py-[10px] flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src={WinstoreLogo} alt="winstore logo" />
          </Link>
          <div className="hidden lg:block">
            <Search />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="hidden lg:block font-light">
            <p className="text-[9px]">Call Us Now</p>
            <div className="mt-px flex items-center gap-1 text-[13px]">
              <Headphone />
              <p>+011 5827918</p>
            </div>
            <p className="mt-1 text-[13px]">Sign In</p>
          </div>

          <div className="hidden lg:flex items-center gap-7">
            <Link href="">
              <User />
            </Link>
            <Link href="">
              <Heart />
            </Link>
          </div>

          <ShoppingCart />

          <span className="lg:hidden">
            <HamburgerButton
              showNavDrawer={showNavDrawer}
              setShowNavDrawer={setShowNavDrawer}
            />
          </span>
        </div>
      </div>

      <nav className="lg:hidden fixed w-full bg-custom-gray2">
        <AnimateHeight open={showNavDrawer}>
          <NavDrawer />
        </AnimateHeight>
      </nav>
    </div>
  );
}
