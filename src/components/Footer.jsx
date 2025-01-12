"use client";
import Image from "next/image";
import Link from "next/link";
import footerLinks from "@/data/footerLinks";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#253e72] via-[#4DA1A9] to-[#1c91b3] p-5 flex flex-col text-black-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/boylogo.jpg"
            alt="logo"
            width={50}
            height={18}
            className="object-contain rounded-full"
          />
          <p className="text-base text-gray-700">
            Bao Huy Portfolio 2025
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-20">
          {footerLinks.map((link) => {
            return (
              <div key={link.title} className="flex flex-col gap-5">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@Bao Huy Portfolio. All Rights Reserved </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
