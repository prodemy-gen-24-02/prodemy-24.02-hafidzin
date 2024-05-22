import React from 'react'


export default function CardShop({type}) {
  return (
    <>
        {type().map((p) => (
            
            <div className="text-lg relative shadow-md" key={p.id}>
                <img src={p.src}  alt="" />
                <div className="px-2 from-color-secondary to-color-primary bg-gradient-to-t">
                    <h3 className='font-bold text-2xl pb-1 pt-4'>{p.name}</h3>
                    <p className='text-base line-clamp-2'>{p.desc}</p>
                </div>
                <p className='absolute top-1 left-1 bg-color-secondary text-sm p-1 font-medium'>{p.category}</p>
                {p.condition && <p className='absolute top-2 right-2 bg-color-accent text-xs p-2  text-white '>{p.condition}</p>}
                <div className='flex items-center justify-between py-2 font-bold text-2xl mx-2 '>
                    €{p.price}
                    <button className='bg-color-primary py-2 rounded-full w-28 font-semibold border-[1px] border-color-dark mt-2 hover:bg-color-dark hover:text-white text-sm'>Add to cart</button>
                </div>

            </div>
        ))}
    </>
  )
}
