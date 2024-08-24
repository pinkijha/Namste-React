import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurentCategories = ({data, showItem, setshowIndex}) => {
    // const [showItem, setshowItem] = useState(false);
    const handleClick = () => {
        // setshowItem(!showItem)
        setshowIndex();
    }
    // console.log(data);
  return (
    <div>
      {/* Accordion Header*/}
      <div className='p-3 bg-gray-100 
      w-6/12 mx-auto my-4 cursor-pointer shadow-lg'>
        <div className=' flex justify-between ' onClick={handleClick}> 
        <span className='font-bold text-lg'>{data?.title}
             ({data?.itemCards?.length})</span>
         <span>{showItem ? '🔼' : '🔽'}</span>
       
        </div>
        {/* Accordion Body*/}
       { showItem && <ItemList items = {data?.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurentCategories
