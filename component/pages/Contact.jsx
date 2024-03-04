import React from 'react'
import { ContactForm } from '../ContactForm'

const Contact = () => {
  return (
    <section className='bg-[#4d4c4c] px-36 py-8 flex flex-col items-center' id='Contact Us'>
      <div className='flex flex-col items-center justify-center gap-2 text-white'>
        <h3 className='text-2xl capitalize font-semibold'>Send us a message</h3>
        <p className='text-base text-balance text-center font-light text-gray-50/90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet consequatur officia, dolor quo, repellat iste similique ducimus saepe at illum quam tenetur harum iure vero debitis quis porro aut.</p>
      </div>
      <ContactForm/>
    </section>
  )
}

export default Contact