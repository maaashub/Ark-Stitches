import Image from 'next/image'
import logo from '@/public/asset/Ark.jpg' 
import { Button } from '../Button'

export const Navbar = () => {
  return (
    <nav className='flex justify-between font-light text-[#a5a4a4] items-center max-w-full bg-white px-8 py-4'>
      <section className='w-4/12'>
        <Image src={logo} alt='logo' className='object-cover w-[50px]'/>
      </section>
        
      <section className='w-4/12'>
        <ul className='flex justify-between'>
            {
                ['Home', 'Shop', 'About Us'].map((item) => {
                    return(
                        <li key={item} className='cursor-pointer'>{item}</li>
                    )
                })
            }
        </ul>
      </section>
      <section className='w-4/12 flex justify-end'>
        <Button>Contact Us</Button>
      </section>
    </nav>
  )
}
