import React from "react";
import { Button } from "./Button";

export const ContactForm = () => {
  return (
    <section className="flex justify-center xl:w-7/12 md:w-9/12 w-11/12 h-auto px-4 py-5 flex-col mt-12 bg-[#38363694]/30 rounded-2xl">
      <form
        action="https://formspree.io/f/xqkrbvgz"
        method="post"
        className="flex flex-col gap-5 lg:p-5 p-3"
      >
        <input
          type="text"
          placeholder="First Name"
          name="First Name"
          className="lg:p-5 p-3 rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="Last Name"
          className="lg:p-5 p-3 rounded-xl"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="Email"
          className="lg:p-5 p-3 rounded-xl"
          required
        />
        <textarea
          name="message"
          className="lg:p-5 p-3 rounded-xl lg:h-[200px] h-[100px]"
          placeholder="Message"
          required
        />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
};
