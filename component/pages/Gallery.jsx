import Image from "next/image";
import pic from "@/public/asset/1.jpg";
import pic1 from "@/public/asset/2.jpg";
import pic2 from "@/public/asset/3.jpg";
import pic3 from "@/public/asset/4.jpg";
import pic4 from "@/public/asset/5.jpg";
import pic5 from "@/public/asset/6.jpg";
import pic6 from "@/public/asset/7.jpg";
import Link from "next/link"
import { useModal } from "@/hook/context";
import { Button } from "../Button";

const Gallery = () => {
  // const { modal } = useModal();
  // console.log(modal);
  return (
    <section className="mt-12 flex flex-col gap-5 justify-center" id="Shop">
      <div className="lg:grid grid-cols-5 auto-rows-[300px] gap-3 md:px-20 xl:px-36">
        <div className="relative row-span-2 rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
        <div className="relative rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic1}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
        <div className="relative row-span-2 rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic2}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
        <div className="relative rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic3}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
        <div className="relative row-span-2 rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic4}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
        <div className="relative rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic5}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
        <div className="relative rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={pic6}
            alt="ads"
            fill
            className="object-cover hover:scale-[1.2] transition-all"
          />
          {/* <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div> */}
        </div>
      </div>

      <Link href="https://www.instagram.com/arkstitchesabuja?igsh=dDV6anJiOWs1NWVn" target="blank" className="self-center"> 
        <Button> View More</Button>
      </Link>
    </section>
  );
};

export default Gallery;
