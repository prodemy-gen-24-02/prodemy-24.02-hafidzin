import React, { useState } from 'react'
import Card from './Card'
import { CaretRight, ListBullets } from '@phosphor-icons/react'
import Criteria from '../shop/Criteria'
import MenuList from '../shop/MenuList'
import CardShop from '../shop/CardShop'
import { products } from '../data/objectList'

export default function Catalogue() {
  const [show, setShow] = useState(false)

  return (
    <div name="Catalogue" className="mx-32 my-16">
      {/* <h1 className='mt-16 mb-24 text-6xl font-bold text-center'>Shop</h1> */}
      <div className='flex justify-between items-cente'>

        <h2 className='flex text-5xl font-bold mb-4 items-baseline gap-6'>
            Speciality coffee <button onClick={() => setShow((prev) => !prev )}><ListBullets size={32} /></button>
        </h2>
            {/* <span className='text-3xl underline '>
                <a href="" className='flex items-center'>Shop all <CaretRight size={32} color="#110404" weight="bold" /> </a>
            </span> */}
      </div>
      {
        show && <MenuList />
      }
      <div>
          <Criteria />
      </div>
    <div className="grid-cols-3 grid gap-4">
        <CardShop type={products}/>
      </div>
    </div>
  )
}
