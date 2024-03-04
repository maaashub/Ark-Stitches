"use client";
import Image from "next/image";
import logo from "@/public/asset/ArkTrans.png";
import { Button } from "../Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrool, setScrool] = useState(0);
  const [menu, setMenu] = useState(false);

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
      className={`flex xl:px-36 md:px-20 fixed top-0 w-full z-30 justify-between font-light text-[#a5a4a4] items-center max-w-full ${
        scrool >= 300 ? "bg-gray-200/40 backdrop-blur-md" : "bg-white"
      } dark:bg-black/25 md:py-4 py-2 px-4`}
    >
      <section className="lg:w-4/12">
        <Image
          src={logo}
          alt="logo"
          className="object-cover md:w-[50px]  w-[40px] rounded-full"
        />
      </section>

      {/* mobile */}
      <section className="lg:hidden">
        <div
          className="flex cursor-pointer flex-col items-end gap-1"
          onClick={() => setMenu(!menu)}
        >
          <div
            className={`w-8 h-1 bg-black transition-all delay-150 ${
              menu ? "rotate-45 -translate-x-1.5" : "rotate-0"
            }`}
          />
          <div
            className={` bg-black ${
              menu
                ? "-rotate-45 w-8 h-1 -translate-x-1.5 -translate-y-1.5"
                : "rotate-0 w-5 h-[2px]"
            }`}
          />
        </div>
      </section>

      {menu && (
        <section className={`absolute lg:hidden top-14  ${menu? 'right-0' : 'right-[100%]'}`}>
          <div
            className={`${
              scrool >= 300 ? "transition-all delay-200 rounded-bl-xl bg-gray-200/40 backdrop-blur-md" : "bg-white"
            } backdrop-blur-md w-[200px] h-[300px]`}
          >
            <ul
          className={`flex justify-center items-center flex-col gap-1 py-1 ${
            scrool >= 300 ? "text-gray-700" : ""
          }`}
        >
          {["Home", "About Us", "Contact Us"].map((item) => {
            return (
              <li
                key={item}
                className="cursor-pointer p-2 hover:bg-pink-200 hover:text-white w-full text-center rounded-lg transition-colors"
              >
                <Link href={`#${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
          </div>
        </section>
      )}

      <section className="w-4/12 hidden md:inline">
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
      <section className="w-4/12 justify-end hidden md:flex">
        <Link href={`#Contact Us`} prefetch={false}>
          <Button>Contact Us</Button>
        </Link>
      </section>
    </nav>
  );
};
