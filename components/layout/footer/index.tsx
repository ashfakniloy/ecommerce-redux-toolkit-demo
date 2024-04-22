import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "./footer-links";
import SocialLinks from "../social-links";
import PaymentMethods from "./payment-methods";
import Copyright from "./copyright";
import WinstoreLogo from "@/public/logo.svg";

export default function Footer() {
  return (
    <div className="bg-custom-gray3 text-white">
      <div className="container py-[56px]">
        <div className="flex justify-between font-light">
          <div className="space-y-[14px]">
            <Image src={WinstoreLogo} alt="winstore logo" />
            <div className="space-y-[14px] leading-[17px]">
              <p className="text-lg text-custom-cyan">
                Got questions? Call us 24/7!
              </p>
              <div className="text-[13px]">
                <p>03 111 666 144</p>
                <p>0317 1777015</p>
              </div>
            </div>
            <div className="leading-[17px]">
              <p className="text-lg text-custom-cyan">Contact info</p>
              <p className="text-[13px]">info@winstore.pk</p>
            </div>
            <SocialLinks />
          </div>

          <div className="flex gap-[160px]">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.section}>
                <p className="text-[20px] text-custom-cyan">
                  {footerLink.section}
                </p>
                <div className="mt-[21px] text-[13px] space-y-3">
                  {footerLink.links.map((item) => (
                    <p key={item.name} className="">
                      <Link href={item.link}>{item.name}</Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <PaymentMethods />
        </div>
      </div>

      <Copyright />
    </div>
  );
}
