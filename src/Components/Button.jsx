import React from 'react'

const Button = ({label , iconUrl}) => {
  return (
    <button className='flex justify-center items-center
    gap-2 px-7 py-4 border font-monoserrat text-lg leading-none
    bg-coral-red rounded-full text-white border-coral-red hover:bg-transparent hover:text-coral-red'>
        {label}
        {iconUrl && <img 
         src={iconUrl}
         alt='arrow right icon'
         className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Button
