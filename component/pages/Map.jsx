import React from "react";

export const Map = () => {
  return (
    <section className="lg:px-36 bg-gray-200/75 min-h-max py-12 mt-12 flex flex-col items-center dark:bg-black">
      <div className="rounded-xl w-11/12 h-[500px] overflow-hidden border-[6px] border-gray-50/25">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.348913302131!2d7.480237274393908!3d9.031901188944815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d7e303a7fcd%3A0x7f55a79858534070!2sArk%20Stitches!5e0!3m2!1sen!2sng!4v1709484756994!5m2!1sen!2sng"
          allowfullscreen={true}
          className="w-full h-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-balance text-center mt-5 dark:text-gray-50/90">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur dicta distinctio corrupti neque nobis blanditiis ipsam eligendi sit sequi pariatur sunt, magnam eaque labore cupiditate eum ullam dolorem. Repellendus.
      </p>
    </section>
  );
};
