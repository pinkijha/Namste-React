import React from 'react'
import { CDN_LINK } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = (items) => {
    // console.log(items.items)

    const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    //dispatch an action
    dispatch(addItem(item));
    // console.log(item)

  }
  return (
    <div>
    { items?.items?.map((item) => (
      <div key={item?.card?.info?.id} className='p-2 m-4 border-gray-300 border-b-2'>

         <div className='flex justify-between py-2  m-5'> 

            <div className='m-2 text-left'>
            <h1 className='font-bold'>{item?.card?.info?.name}</h1>
            <span className='text-sm font-medium'>
                 ₹ {item?.card?.info?.defaultPrice ?
                  item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price /100}</span>
            <p className='text-xs font-thin text-gray-500'>{item?.card?.info?.description}</p>            
            </div>

          <div className='p-1 m-2'>
                <img className='cursor-pointer absolute shadow-sm h-[120px] w-[120px] rounded-lg    '
                 src={CDN_LINK + item?.card?.info?.imageId} />
                <button className='my-1 relative top-[100px] left-[16px] w-[80px] font-bold cursor-pointer text-green-600
                 bg-white shadow-inner rounded-md' 
                 onClick={() => handleAddItem(item)}>Add +</button>
            </div>

         </div>

      </div>
    ))}
    </div>
  )
}

export default ItemList
