import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

const handleClearItem = () => {
    dispatch(clearCart());
};

    return (
        <div>
           <h2 className="text-center font-bold text-2xl m-2">Cart</h2>
          <div className="w-6/12 m-auto border border-black p-2">
         <button className="bg-black text-white items-end p-2 rounded-lg" onClick={handleClearItem}>Clear cart</button>
          {cartItems.length === 0 && <h1 className="text-center text-2xl">Your Cart is Empty!!</h1>}
           <ItemList items={cartItems}/>
           </div>
        </div>
    )
}

export default Cart;