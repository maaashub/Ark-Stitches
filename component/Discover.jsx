import { WhatsAppForm } from "./WhatsAppForm";

export const Discover = () => {

  return (
    <header className='flex w-full flex-col justify-center text-center my-12 mt-24' id="Home">
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
        <WhatsAppForm />
    </header>
  )
}
