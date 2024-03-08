import Image from "next/image";
import Arrow from "@/public/asset/arro.svg";

export const DesignCard = ({ title, desc, img }) => {
  return (
    <section className="flex flex-col">
      <div className="relative aspect-square">
        <Image src={img} fill alt="Designs" className="object-cover" />
      </div>

      <div className="mt-4">
        <Image src={Arrow} alt="arrow" className="md-w-16 w-10" />
        <h3 className="my-1 font-semibold lg:text-lg text-base text-black/80">
          {title}
        </h3>
        <p className="lg:text-base font-light text-balance text-sm">{desc}</p>
      </div>
    </section>
  );
};
