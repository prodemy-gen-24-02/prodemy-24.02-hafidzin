import React, { useState } from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import {products} from '../data/objectList'
import CriteriaList from './CriteriaList';

export default function Criteria() {
  const totalProduct = products().length;

  const [sort, setSort] = useState(false);
  const [roast, setRoast] = useState(false);
  const [taste, setTaste] = useState(false);
  
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-4 my-4 font-semibold'>
          <div className='relative'>
            <button onClick={() => setSort((prev) => !prev)} className='flex items-center gap-2 bg-white py-1 px-2'>Sort by price: low to high 
            {!sort ? <CaretUp size={18} weight="fill" /> : <CaretDown size={18} weight="fill" />}
            </button>
            {sort && <CriteriaList criteria="sort"/>  }
          </div>
          <div className='relative'>
            <button onClick={() => setRoast((prev) => !prev)}  className='flex items-center gap-2 bg-white py-1 px-6'>Roast: All 
            {!roast ? <CaretUp size={18} weight="fill" /> : <CaretDown size={18} weight="fill" />}
            </button>
            {roast && <CriteriaList criteria="roast" />  }
          </div>
          <div className='relative'>
            <button onClick={() => setTaste((prev) => !prev)} className='flex items-center gap-2 bg-white py-1 px-2'>Prefered taste: All 
            {!taste ? <CaretUp size={18} weight="fill" /> : <CaretDown size={18} weight="fill" />}
            </button>
            {taste && <CriteriaList criteria="taste"/>  }
          </div>
        </div>
      <p className='bg-color-primary p-1 font-semibold'>{totalProduct} products</p>
    </div>
  )
}
