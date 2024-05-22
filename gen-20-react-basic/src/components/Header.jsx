import React from 'react'

export default function Header() {
  return (
    <div>
        <header className=" border-b-gray-300 border-b-[1px] font-medium">
            <ul className='flex justify-center text-gray-500 text-lg'>
              <li className='bg-color-primary p-3 border-b-color-accent border-b-2'>Speciality coffee</li>
              <li className='hover:bg-color-primary p-3 hover:border-b-color-accent border-b-2'>Brewing accessories</li>
              <li className='hover:bg-color-primary p-3 hover:border-b-color-accent border-b-2'>Equipment</li>
            </ul>
        </header>
    </div>
  )
}
