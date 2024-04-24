import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "./footer-links";
import SocialLinks from "../social-links";
import PaymentMethods from "./payment-methods";
import Copyright from "./copyright";
import WinstoreLogo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-custom-gray3 text-white">
      <div className="container py-10 lg:py-[56px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 font-light">
          <div className="space-y-[14px]">
            <Image
              src={WinstoreLogo}
              alt="winstore logo"
              className="mx-auto lg:mx-0"
            />
            <div className="flex flex-col items-center lg:items-start space-y-[14px]">
              <p className="text-lg text-custom-cyan">
                Got questions? Call us 24/7!
              </p>
              <div className="text-[13px]">
                <p>03 111 666 144</p>
                <p>0317 1777015</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-lg text-custom-cyan">Contact info</p>
              <p className="text-[13px]">info@winstore.pk</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <SocialLinks />
            </div>
          </div>

          <nav className="flex flex-col lg:flex-row text-center lg:text-start gap-10 lg:gap-[160px]">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.section}>
                <p className="text-[20px] text-custom-cyan">
                  {footerLink.section}
                </p>
                <ul className="mt-3 lg:mt-[21px] text-[13px] space-y-3">
                  {footerLink.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        className="hover:text-custom-cyan transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-6">
          <PaymentMethods />
        </div>
      </div>

      <Copyright />
    </footer>
  );
}
