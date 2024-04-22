import Link from "next/link";
import { Hamburger } from "@/components/icons";
import { headerLinks } from "./header-links";
import SocialLinks from "../social-links";

export default function HeaderBottom() {
  return (
    <div className="bg-custom-gray2 text-white">
      <div className="container py-[14px] flex justify-between items-center">
        <div className="flex items-center">
          <button type="button" className="flex items-center gap-3">
            <Hamburger />
            <span className="text-[17px] font-light">Browse By Category</span>
          </button>

          <div className="ml-5 space-x-9 text-[13px] font-light">
            {headerLinks.map((headerLink) => (
              <Link key={headerLink.name} href={headerLink.link}>
                {headerLink.name}
              </Link>
            ))}
          </div>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
}
