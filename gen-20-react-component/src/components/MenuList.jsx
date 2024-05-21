import React from 'react'

export default function MenuList() {
  return (
    <ul className="flex gap-8 font-bold max-md:hidden lg:text-xl">
        <li className="hover:bg-gray-200 hover:cursor-pointer">Blog</li>
        <li className="hover:bg-gray-200 hover:cursor-pointer">Shop</li>
        <li className="hover:bg-gray-200 hover:cursor-pointer">City coffe guide</li>
        <li className="hover:bg-gray-200 hover:cursor-pointer">About</li>
      </ul>
  )
}
