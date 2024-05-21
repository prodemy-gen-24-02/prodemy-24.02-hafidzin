import React from 'react'
import Card from './Card'
import { CaretRight } from '@phosphor-icons/react'
import { products } from './objectList'

export default function Catalogue() {
  return (
    <div name="Catalogue" className="mx-32 my-16">
    <h2 className='flex justify-between text-5xl font-bold mb-4'>
        Catalogue
        <span className='text-3xl underline '>
            <a href="" className='flex items-center'>Shop all <CaretRight size={32} color="#110404" weight="bold" /> </a>
        </span>
    </h2>
    <div className="grid-cols-4 grid gap-4">
        <Card type={products}/>
      </div>
    </div>
  )
}
