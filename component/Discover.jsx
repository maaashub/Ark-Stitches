// import { LuSendHorizonal } from "react-icons/lu";

export const Discover = () => {
  return (
    <section className='flex w-full flex-col justify-center text-center my-12'>
        <h1 className='text-4xl leading-snug font-semibold text-black/80 dark:text-gray-200'>
            Discover Your Signature 
            <br/>
            <span className='text-green-500/40'>Style</span> & <span className='text-pink-400/40'>Elevate</span> Your
            <br/>
            Wardrobe
        </h1>

        <p className='text-balance w-[400px] self-center mt-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea praesentium voluptatum quisquam. Eius possimus odio blanditiis illum architecto repellat deserunt cumque totam ipsum.
        </p>

        <form className='border-black mt-5 border w-6/12 self-center rounded-xl py-4 px-4 flex justify-between'>
            <input type="text" placeholder='Send us a message' required className='outline-none bg-transparent pr-10'/>
            <button type='submit'>
              {/* <LuSendHorizonal  /> */}
            </button>
        </form>
    </section>
  )
}
