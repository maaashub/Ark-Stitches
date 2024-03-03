import React from 'react'

export const Button = ({children}) => {
  return (
    <button type='button' className='bg-black/80 hover:bg-transparent  dark:hover:text-[#a5a4a4]  hover:border-black/85 border border-transparent hover:text-black transition-all rounded-2xl px-4 py-2 text-white'>
        {children}
    </button>
  )
}
