import { Category } from "./Category"

export const AllCategories = () => {
    return(
        <div>
            <div className="cont-categories">
            {['SWEET BREAKFAST', 'PASTRIES', 'CAKES', 'COOKIES', 'ALL'].map(category => <Category key={category} category={category}/>)}
            </div>
        </div>
    )
}