import React from 'react'

export default function Main() {
  return (
    <div className='mx-32 my-32'>
        <h1 className='text-6xl font-bold mb-8'>Community of Coffee Experts</h1>
        <p class="main-p mb-8 text-3xl w-2/3">
            Sometimes we find ourselvesin a tricky situation: urgently need coffe but have no brewing tools in hand.
        </p>
        <div class="flex gap-4">

        <button class="bg-black text-white rounded-full w-44 h-14 font-bold text-2xl hover:bg-green-600 hover:text-white">
                Read blog
            </button>
            <button class="bg-color-primary border-2 border-black text-black rounded-full w-60 h-14 font-bold text-2xl hover:bg-green-600 hover:text-white">
                Make purchases
            </button>
        </div>
    </div>
  )
}
