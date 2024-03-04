import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/asset/ArkTrans.png";
import Link from "next/link";

const Social = () => {
  return (
    <section className="md:px-20 xl:px-36 my-12 flex justify-between w-full">
      <div className="flex flex-col gap-3 items-start">
        <h4 className="font-light text-lg">Social Media</h4>

        <div className="flex gap-3 items-center">
          <Link href="https://api.whatsapp.com/send?phone=2349160002302&text=Hello%2C%20I%E2%80%99ll%20love%20to%20make%20an%20enquiry" target="blank" className="">
            <button className="rounded-full h-10 w-10 p-2.5 flex justify-center items-center bg-black">
              <IoLogoWhatsapp size={28} color="white" />
            </button>
          </Link>

          <Link href="https://www.instagram.com/arkstitchesabuja?igsh=dDV6anJiOWs1NWVn" target="blank" className="">
            <button className="rounded-full h-10 w-10 p-2.5 flex justify-center items-center bg-black">
              <AiFillInstagram size={28} color="white" />
            </button>
          </Link>

          <Link href="https://web.facebook.com/arkstitches?mibextid=ZbWKwL&_rdc=1&_rdr" target="blank" className="">
            <button className="rounded-full h-10 w-10 p-2.5 flex justify-center items-center bg-black">
              <FaFacebookSquare size={28} color="white" />
            </button>
          </Link>
        </div>
      </div>

      <Image src={logo} alt="logo" className=" w-[80px]" />
    </section>
  );
};

export default Social;
