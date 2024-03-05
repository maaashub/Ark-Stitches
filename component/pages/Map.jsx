import React from "react";

export const Map = () => {
  return (
    <section className="lg:px-36 bg-gray-200/75 min-h-max py-12 mt-12 flex flex-col items-center dark:bg-black">
      <div className="rounded-xl w-11/12 h-[500px] overflow-hidden border-[6px] border-gray-50/25">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.640631086113!2d7.420705610839837!3d8.987778600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d007d14a5d1%3A0x83555cd1f3b0b95c!2sArk%20Stitches%20and%20Fashion%20Academy!5e0!3m2!1sen!2sng!4v1709569629275!5m2!1sen!2sng"
          className="w-full h-full"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-balance text-center mt-5 dark:text-gray-50/90 px-4 lg:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        consequuntur dicta distinctio corrupti neque nobis blanditiis ipsam
        eligendi sit sequi pariatur sunt, magnam eaque labore cupiditate eum
        ullam dolorem. Repellendus.
      </p>
    </section>
  );
};
