import React from "react";
import pic2 from "@/public/asset/3.jpg";
import { DesignCard } from "../DesignCard";

const Featured = () => {
  return (
    <section className="mt-12 w-full px-36">
      <div className="flex flex-col items-center w-full">
        <div className="w-7/12 text-center">
          <h2 className=" font-semibold text-xl my-4 uppercase text-black/80">
            Designs
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 mt-12">
        <DesignCard
          title="Bridal Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic2}
        />
        <DesignCard
          title="Bridal Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic2}
        />
        <DesignCard
          title="Bridal Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic2}
        />
        <DesignCard
          title="Bridal Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic2}
        />
      </div>
    </section>
  );
};

export default Featured;
