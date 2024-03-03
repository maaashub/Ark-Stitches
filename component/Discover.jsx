import React from 'react'

export const Discover = () => {
  return (
    <section className='flex w-full flex-col justify-center text-center my-12'>
        <pre className='text-2xl leading-snug font-bold'>
            Discover Your Signature 
            <br/>
            <span>Style</span> & <span>Elevate</span> Your
            <br/>
            Wardrobe
        </pre>

        <p className='text-balance w-[400px] self-center mt-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea praesentium voluptatum quisquam. Eius possimus odio blanditiis illum architecto repellat deserunt cumque totam ipsum.
        </p>

        <form className='border-black mt-5 border w-6/12 self-center rounded-xl py-4 px-4 flex justify-between'>
            <input type="text" placeholder='Send us a message' required className='outline-none bg-transparent pr-10'/>
            <button type='submit'>send</button>
        </form>
    </section>
  )
}
