import Image from 'next/image'

export const DesignCard = ({title, desc, img}) => {
  return (
    <section className='flex flex-col'>
        <div className='relative aspect-square'>
            <Image src={img} fill alt='Designs' className='object-cover'/>
        </div>

        <div className=''>
            <div className='border-dashed border-pink-400 border w-10 mt-8'/>
            <h3 className='my-1 font-semibold lg:text-lg text-base text-black/80'>{title}</h3>
            <p className='lg:text-base font-light text-balance text-sm'>
                {desc}
            </p>
        </div>
    </section>
  )
}
