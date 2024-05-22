import React from 'react'
import { CaretRight } from '@phosphor-icons/react'
import Card from './Card'
import { equipment } from '../data/objectList'

export default function Equipment() {
  return (
    <div className='bg-color-[#F3EDE3ff]'>
        <div className='mx-32 '>
            <h2 className='flex justify-between text-5xl font-bold mb-4'>
                Equipment
                <span className='text-3xl underline '>
                    <a href="" className='flex items-center'>Shop all <CaretRight size={32} color="#110404" weight="bold" /> </a>
                </span>
            </h2>
            <div className='grid-cols-3 grid gap-4 mb-24'>
              <Card type={equipment}/>
            </div>
        </div>
      </div>
  )
}
