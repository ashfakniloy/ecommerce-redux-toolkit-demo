import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "./header-links";
import { cn } from "@/lib/utils";

export default function NavDrawer() {
  const pathname = usePathname();
  const isActive = (link: string) => pathname === link;

  return (
    <ul className="w-full pt-5 pb-10 px-4 flex flex-col gap-2">
      {headerLinks.map((headerLink) => (
        <li key={headerLink.name}>
          <Link href={headerLink.link}>
            <p
              className={cn(
                "px-10 py-3 rounded-lg font-medium text-white active:bg-white/10",
                isActive(headerLink.link) && "text-black bg-custom-cyan3"
              )}
            >
              {headerLink.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
