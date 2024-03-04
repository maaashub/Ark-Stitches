import Image from "next/image";
import pic2 from "@/public/asset/8.jpg";
import logo from "@/public/asset/Ark.jpg";

const About = () => {
  return (
    <section
      className="bg-gray-200/75 dark:bg-black min-h-max py-12 mt-12"
      id="About Us"
    >
      <div className="px-36 flex justify-between items-center">
        <div className="border-[8px] border-gray-500/25 dark:border-gray-50/25 h-auto mr-12 w-4/12 rounded-md overflow-hidden">
          <Image
            src={pic2}
            alt="ads"
            className="object-cover aspect-[1/2]  hover:scale-125 transistion-all"
          />
        </div>

        <div className="w-full">
          <div className="rounded-full h-12 w-12 overflow-hidden relative">
            <Image src={logo} alt="logo" fill className="object-cover" />
          </div>
          <h3 className="text-2xl text-black/75 font-bold my-4 dark:text-gray-200">
            About Ark Stitches
          </h3>
          <p className="text-balance dark:text-gray-400">
            ArkStitches and Fashion Academy based in Abuja, F.C.T, Nigeria, was
            established in October 2017 with the aim of providing high
            sustainable fashion quality in designing bespoke and ready-to-wear
            women outfits. At ArkStitches, we understand the significance of
            events and as such have been able to establish as a premier
            destination for individuals seeking elegant and stylish dresses We
            are dedicated to providing an exceptional customer experience. Our
            knowledgeable and friendly staff are ready to assist you in finding
            the outfit that suits your style and body type. With out expertise
            and attention to detail, we ensure that every customer feels
            comfortable and confident in their selection. ArkStitches also
            offers customization options to make your dress truly unique and
            tailored to your preferences. In my current role as The Creative
            Director, ArkStitches, My approach to design is rooted in a deep
            understanding of fashion history, combined with a forward-thinking
            vision for the future of the industry. I am particularly adept at
            trend forecasting, and my ability to anticipate and respond to
            shifts in consumer preferences has been a key factor in my success.
            Your dress is as unique as you and ArkStitches wants to tell the
            story behind your dress. I believe that when a woman looks good, she
            feels good and she will do GOOD. I help to bring out the best of the
            woman through the pieces I make. ArkStitches has also been able to
            train students over the years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
