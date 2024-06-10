import React from 'react'

export default function Main() {
  return (
    <div className='px-32 py-32'>
        <h1 className='text-6xl font-bold mb-8'>Community of Coffee Experts</h1>
        <p class="main-p my-10 pb-4 text-3xl w-2/3 font-medium text-gray-800">
            Sometimes we find ourselvesin a tricky situation: urgently need coffe but have no brewing tools in hand.
        </p>
        <div class="flex gap-4">

        <button class="bg-color-dark text-white rounded-full w-44 h-14 font-semibold text-2xl hover:bg-green-600 hover:text-white">
                Read blog
            </button>
            <button class="bg-color-primary border-2 border-black text-black rounded-full w-60 h-14 font-semibold text-2xl hover:bg-green-600 hover:text-white">
                Make purchases
            </button>
        </div>
    </div>
  )
}
