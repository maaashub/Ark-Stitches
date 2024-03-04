"use client";
import Image from "next/image";
import logo from "@/public/asset/ArkTrans.png";
import { Button } from "../Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrool, setScrool] = useState(0);

  useEffect(() => {
    const onScroll = async () => {
      const height = window.scrollY;
      setScrool(height);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`flex xl:px-[144px] md:px-[80px] fixed top-0 w-full z-30 justify-between font-light text-[#a5a4a4] items-center max-w-full ${
        scrool >= 300 ? "bg-gray-200/40 backdrop-blur-md" : "bg-white"
      } dark:bg-black/25 px-8 py-4`}
    >
      <section className="w-4/12">
        <Image src={logo} alt="logo" className="object-cover w-[50px] rounded-full" />
      </section>

      <section className="w-4/12">
        <ul
          className={`flex justify-between ${
            scrool >= 300 ? "text-gray-700" : ""
          }`}
        >
          {["Home", "Shop", "About Us"].map((item) => {
            return (
              <li
                key={item}
                className="cursor-pointer hover:text-gray-500 transition-colors"
              >
                <Link href={`#${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="w-4/12 flex justify-end">
        <Link href={`#Contact Us`} prefetch={false}>
          <Button>Contact Us</Button>
        </Link>
      </section>
    </nav>
  );
};
