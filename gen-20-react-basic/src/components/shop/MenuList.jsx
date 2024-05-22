import React from 'react'
import { CoffeeBean } from '@phosphor-icons/react'

export default function MenuList() {
  return (
    <>
    <div className='grid grid-cols-3 mt-6'>
        <div className='font-semibold'>
                Origin
            <form action="" className='grid mt-4 font-normal text-gray-500 gap-1'>
                <label htmlFor=""><input type="checkbox"  className='accent-color-primary appearance-none border-2 w-4 h-4 border-color-dark checked:w-4 checked:h-4 checked:appearance-auto checked:border-2 checked:border-color-dark'/> Brazil</label> 
                <label htmlFor=""><input type="checkbox" /> Colombia</label> 
                <label htmlFor=""><input type="checkbox" /> Costa Rica</label> 
            </form>
        </div>
        <div className='font-semibold'>
                Origin
            <form action="" className='grid mt-4 font-normal text-gray-500 gap-1'>
                <label htmlFor=""><input type="checkbox" /> Brazil</label> 
                <label htmlFor=""><input type="checkbox" /> Colombia</label> 
                <label htmlFor=""><input type="checkbox" /> Costa Rica</label> 
            </form>
        </div>
        <div className='font-semibold'>
                Origin
            <form action="" className='grid mt-4 font-normal text-gray-500 gap-1'>
                <label htmlFor=""><input type="checkbox" /> Brazil</label> 
                <label htmlFor=""><input type="checkbox" /> Colombia</label> 
                <label htmlFor=""><input type="checkbox" /> Costa Rica</label> 
            </form>
        </div>
    </div>
    <div className='mt-12 flex justify-between mb-8'>
        <div>
            <form action="" className='grid mt-4 font-medium text-color-dark gap-2'>
                <label htmlFor=""><input type="checkbox" /> Bitterness</label>
                <div className='flex'>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} /> 
                </div>
            </form>
        </div>
        <div>
            <form action="" className='grid mt-4 font-medium text-color-dark gap-2'>
                <label htmlFor=""><input type="checkbox" /> Bitterness</label>
                <div className='flex'>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} /> 
                </div>
            </form>
        </div>
        <div>
            <form action="" className='grid mt-4 font-medium text-color-dark gap-2'>
                <label htmlFor=""><input type="checkbox" /> Bitterness</label>
                <div className='flex'>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} /> 
                </div>
            </form>
        </div>
        <div>
            <form action="" className='grid mt-4 font-medium text-color-dark gap-2'>
                <label htmlFor=""><input type="checkbox" /> Bitterness</label>
                <div className='flex'>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} weight='fill'/>
                    <CoffeeBean size={24} /> 
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
