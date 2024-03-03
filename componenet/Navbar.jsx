import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full bg-white'>
      <section className='w-4/12'>
        <Image src='../asset/Ark.jpg' alt='logo '/>
      </section>
      <section className='w-4/12 bg-teal'></section>
      <section className='w-4/12 bg-green'></section>
    </nav>
  )
}
