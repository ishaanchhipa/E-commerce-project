import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';

const Collection = () => {

  const { products } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10'>

    </div>
  )
}

export default Collection