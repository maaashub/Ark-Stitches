import React from "react";
import { Button } from "./Button";

export const ContactForm = () => {
  return (
    <section className="flex justify-center w-7/12 h-auto px-4 py-5 flex-col mt-12 bg-[#38363694]/30 rounded-2xl">
      <form
        action="https://formspree.io/f/xqkrbvgz"
        method="post"
        className="flex flex-col gap-5 p-5"
      >
        <input
          type="text"
          placeholder="First Name"
          name="First Name"
          className="p-5 rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="Last Name"
          className="p-5 rounded-xl"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="Email"
          className="p-5 rounded-xl"
          required
        />
        <textarea
          name="message"
          className="p-5 rounded-xl h-[200px]"
          placeholder="Message"
          required
        />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
};
