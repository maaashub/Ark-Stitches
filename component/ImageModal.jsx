import React from 'react'
import Image from "next/image";
import pic from "@/public/asset/1.jpg";

export const ImageModal = () => {
  return (
    <div className='absolute -top-24 w-full flex justify-center items-center min-h-full z-40 bg-black/80'>
        <div className='relative z-50 bg-black p-20 rounded-3xl'>
            <Image src={pic} alt='image' />
        </div>
    </div>
  )
}
