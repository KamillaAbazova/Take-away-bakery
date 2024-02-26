import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";


export const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();
    
    return(
        <div>
            <p className="cartText head">{dishes.name}</p>
            <p className="cartText">{cartItem.quantity} portion(s)</p>
            <p className="cartText">Price: € {dishes.price * cartItem.quantity}</p>
            <span onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}><img className="deleteIcon" src="https://img.icons8.com/?size=24&id=98134&format=png" alt="icon"/></span>
        </div>
    )
}