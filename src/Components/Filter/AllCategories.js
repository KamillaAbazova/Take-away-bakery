import { Category } from "./Category"

export const AllCategories = () => {
    return(
        <div>
            <h1>TAKE AWAY BAKERY</h1>
            <div className="cont-categories">
            {['SWEET BREAKFAST', 'PASTRIES', 'CAKES', 'COOKIES', 'ALL'].map(category => <Category category={category}/>)}
            </div>
        </div>
    )
}