"use client";
import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { useRouter } from "next/navigation";


export const WhatsAppForm = () => {
    const router = useRouter()
    const [message, setMessage] = React.useState('')

  return (
    <form className="border-black mt-5 border lg:w-6/12 w-9/12 self-center rounded-xl py-2 lg:py-4 lg:px-4 px-2 flex justify-between" onSubmit={(e) => {
        e.preventDefault()
        const whatsApp_msg = String(message.split(' ').join('+'))
        router.push(`https://api.whatsapp.com/send?phone=2349160002302&text=${whatsApp_msg}`, )
    }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send us a message"
        required
        className="outline-none bg-transparent w-11/12"
      />
      <button type="submit">
        <LuSendHorizonal className="text-2xl" />
      </button>
    </form>
  );
};
