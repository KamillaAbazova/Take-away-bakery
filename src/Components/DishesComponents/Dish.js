import { useState } from "react"
import { ChangeQuantity } from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div>
            <img src={`${dish.img}.jpeg`} alt="dish"/>
            <h3>{dish.name}</h3>
            <p>€ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="addButton" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>ADD TO CART</button>
        </div>
    )
}