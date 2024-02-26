import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"

export const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
           <img className="cartIcon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="icon"/>
           <h2 className="total">TOTAL: € {totalPrice}</h2>
           <hr/>
           {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        </div>
    )
}