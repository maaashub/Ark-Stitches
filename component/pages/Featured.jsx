import React from "react";
import pic1 from "@/public/asset/3.jpg";
import pic2 from "@/public/asset/9.jpg";
import pic3 from "@/public/asset/5.jpg";
import pic4 from "@/public/asset/2.jpg";
import pic5 from "@/public/asset/4.jpg";
import { DesignCard } from "../DesignCard";

const Featured = () => {
  return (
    <section className="mt-12 w-full md:px-8 xl:px-36 px-4">
      <div className="flex flex-col items-center w-full">
        <div className="w-9/12 text-center">
          <h2 className=" font-semibold text-2xl my-4 uppercase text-black/80">
            Designs
          </h2>
          <p className="">
            Our knowledgeable and friendly staff are ready to assist you in
            finding the outfit that suits your style and body type. With out
            expertise and attention to detail, we ensure that every customer
            feels comfortable and confident in their selection. ArkStitches also
            offers customization options to make your dress truly unique and
            tailored to your preferences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:gap-20 gap-5 mt-12">
        <DesignCard
          title="Bridal Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic1}
        />
        <DesignCard
          title="Ankara wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic2}
        />
        <DesignCard
          title="Native Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic3}
        />
        <DesignCard
          title="Ready-to-Wear"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            reprehenderit saepe adipisci vitae qui porro ratione sunt doloribus
            eos? Harum excepturi facilis veniam error sunt."
          img={pic4}
        />
      </div>
    </section>
  );
};

export default Featured;
