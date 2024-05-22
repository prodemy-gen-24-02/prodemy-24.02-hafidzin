import React from 'react'
import { CaretDown } from '@phosphor-icons/react'

export default function NavbarList() {
  return (
    <ul className="flex gap-8 font-bold max-md:hidden lg:text-xl">
        <li className="hover:bg-gray-200 hover:cursor-pointer">Blog</li>
        <li className="hover:bg-gray-200 hover:cursor-pointer flex items-center gap-1">Shop <CaretDown size={18} weight="fill" /></li>
        <li className="hover:bg-gray-200 hover:cursor-pointer flex items-center gap-1">City coffe guide <CaretDown size={18} weight="fill" /></li>
        <li className="hover:bg-gray-200 hover:cursor-pointer">About</li>
      </ul>
  )
}
