export const ChangeQuantity = ({quantity, setQuantity}) => {

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    return(
        <div>
           <button className="quantityButton" onClick={removeQuantity}>-</button>
           <span>{quantity}</span>
           <button className="quantityButton" onClick={addQuantity}>+</button>
        </div>
    )
}