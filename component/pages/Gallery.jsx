import Image from "next/image";
import pic from "@/public/asset/1.jpg";
import pic1 from "@/public/asset/2.png";
import pic2 from "@/public/asset/3.jpg";
import pic3 from "@/public/asset/4.png";
import pic4 from "@/public/asset/5.jpg";

const Gallery = () => {
  return (
    <section className="mt-12 grid grid-cols-5 auto-rows-[300px] gap-3 px-36" id="Shop">
      <div className="relative row-span-2 rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all"/>
        <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic1} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all" />
        <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
      <div className="relative row-span-2 rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic2} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all"/>
                <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic3} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all"/>
                <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
      <div className="relative row-span-2 rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic4} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all"/>
                <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all"/>
                <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden cursor-pointer">
        <Image src={pic3} alt="ads" fill className="object-cover hover:scale-[1.2] transition-all"/>
                <div className="flex w-full h-full items-center justify-center">
          <button className="absolute text-white">play</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
