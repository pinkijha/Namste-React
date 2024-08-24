import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js"
import { clearItem } from "../utils/cartSlice.js"

const Cart = () =>{
    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearItem())
    }

    return(
        <div className="text-center m-4 p-4">
            <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className='ml-[460px] w-[80px] font-bold cursor-pointer text-green-600
                 bg-white shadow-inner rounded-md' onClick={ handleClearCart}>Clear Cart</button>
                 
            </div>
            <div className='ml-[460px] my-10 text-center w-[500px] font-bold  text-red-600
                 bg-white shadow-md rounded-md' >{cartItem.length === 0 && <h1>Your Cart is empty. Add Items to the cart</h1>}</div>

            <div className="w-6/12 m-auto">
                <ItemList items={cartItem} />
            </div>
        </div>
    )
}

export default Cart;