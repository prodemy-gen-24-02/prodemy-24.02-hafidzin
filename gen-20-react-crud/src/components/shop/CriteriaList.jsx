import React from 'react'

export default function CriteriaList({criteria}) {
    if(criteria == "sort"){
        return (
            <div className='flex flex-col absolute mt-1 z-10 w-full bg-gray-100 '>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
            </div>
        )
    }

    if(criteria == "roast"){
        return(
            <div className='flex flex-col absolute mt-1 z-10 w-full bg-gray-100'>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
            </div>
        )
    }

    if(criteria == "taste"){
        return(
            <div className='flex flex-col absolute mt-1 z-10 w-full bg-gray-100'>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
                <button className='hover:bg-gray-300 w-full h-9'>High to Low</button>
            </div>
        )
    }
}
