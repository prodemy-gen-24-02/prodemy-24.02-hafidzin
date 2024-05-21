import React from 'react'

export default function MenuListDrop() {
  return (
    <div className="absolute h-screen w-8/12 bg-white border opacity-0
          group-focus:opacity-100 group-focus:left-0 group-focus:top-0 group-focus:z-10 -z-10">
        <ul className="flex flex-col items-center w-full text-base pt-10">
            <li className="hover:bg-gray-200 py-4 px-6 w-full">Blog</li>
            <li className="hover:bg-gray-200 py-4 px-6 w-full">Shop</li>
            <li className="hover:bg-gray-200 py-4 px-6 w-full">City coffe guide</li>
            <li className="hover:bg-gray-200 py-4 px-6 w-full">About</li>
            <li className="hover:bg-gray-200 py-4 px-6 w-full">Contact Us</li>
        </ul>
    </div>
  )
}
