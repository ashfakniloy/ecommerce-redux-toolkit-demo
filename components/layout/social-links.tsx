import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "@/components/icons";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/winstore",
    icon: Facebook,
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/winstore",
    icon: Twitter,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/winstore",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/winstore",
    icon: Instagram,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((socialLink) => (
        <Link
          key={socialLink.link}
          href={socialLink.link}
          title={socialLink.name}
          target="_blank"
        >
          <socialLink.icon />
        </Link>
      ))}
    </div>
  );
}
