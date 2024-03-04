import React from 'react'
import { ContactForm } from '../ContactForm'

const Contact = () => {
  return (
    <section className='bg-[#4d4c4c] md:px-20 xl:px-36 py-8 flex flex-col items-center' id='Contact Us'>
      <div className='flex flex-col items-center justify-center gap-2 text-white'>
        <h3 className='text-2xl capitalize font-semibold'>Send us a message</h3>
        <p className='text-base text-balance italic text-center font-normal text-gray-50/90'>Your dress is as unique as you and ArkStitches wants to tell the
            story behind your dress. I believe that when a woman looks good, she
            feels good and she will do GOOD.</p>
      </div>
      <ContactForm/>
    </section>
  )
}

export default Contact