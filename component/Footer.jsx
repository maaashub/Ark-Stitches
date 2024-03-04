import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center my-4'>
        <footer className='px-36 py-2 font-medium text-base border-t-[3px] border-dotted border-gray-400 text-gray-600'>
            &copy; {new Date().getFullYear()} Ark Stitches
        </footer>
    </footer>
  )
}
