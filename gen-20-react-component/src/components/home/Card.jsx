import React from 'react'
// import { products, equipment } from './catalogue'

export default function Card({type}) {
  return (
    <>
        {type().map((p) => (
            
            <div className="text-lg relative" key={p.id}>
                <img src={p.src}  alt="" />
                <div className="">
                    <h3 className='font-bold text-2xl my-2'>{p.name}</h3>
                    <p>{p.desc}</p>
                </div>
                <button className='bg-color-secondary w-full py-2 font-bold mt-2 hover:bg-color-accent'>See All</button>

            </div>
        ))}
            
        </>
  )
}
