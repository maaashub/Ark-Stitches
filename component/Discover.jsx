import { WhatsAppForm } from "./WhatsAppForm";
import Under from "@/public/asset/disU.svg";
import Under2 from "@/public/asset/disS.svg";
import Image from "next/image";
export const Discover = () => {
  return (
    <header
      className="flex w-full flex-col justify-center text-center my-12 mt-24"
      id="Home"
    >
      <h1 className="text-4xl text-center leading-snug font-semibold lg:font-bold text-black/80 dark:text-gray-200">
        <span className="relative ">
          Discover
          <Image
            src={Under}
            alt="under"
            className="absolute top-11 left-0 w-[9.2rem] h-max"
          />
          {"  "}
          <span>Your Signature</span>
        </span>
        <br />
        <span className="text-green-500/40">
          <span className="relative">
            S
            <Image
            src={Under2}
            alt="under"
            className="absolute top-11 left-0 w-max h-max"
          />
          </span>
          tyle
        </span>{" "}
        & <span className="text-pink-400/40">Elevate</span> Your
        <br />
        Wardrobe
      </h1>

      <p className="text-balance xl:w-6/12 md:w-10/12 w-11/12 self-center mt-4">
        ArkStitches and Fashion Academy based in Abuja, F.C.T, Nigeria. At
        ArkStitches, we understand the significance of events and as such have
        been able to establish as a premier destination for individuals seeking
        elegant and stylish dresses We are dedicated to providing an exceptional
        customer experience.
      </p>
      <WhatsAppForm />
    </header>
  );
};
