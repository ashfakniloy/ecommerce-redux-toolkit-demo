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

          <nav>
            <ul className="ml-5 flex items-center gap-9 text-[13px] font-light">
              {headerLinks.map((headerLink) => (
                <li key={headerLink.name}>
                  <Link
                    href={headerLink.link}
                    className="hover:text-custom-cyan transition-colors duration-200"
                  >
                    {headerLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
}
