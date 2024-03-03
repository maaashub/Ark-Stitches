import React from 'react'

export const Button = ({children}) => {
  return (
    <button type='button' className='bg-black hover:bg-transparent hover:border-black border border-transparent hover:text-black transition-all rounded-2xl px-4 py-2 text-white'>
        {children}
    </button>
  )
}
