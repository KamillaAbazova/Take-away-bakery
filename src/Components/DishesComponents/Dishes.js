import { useDispatch, useSelector } from "react-redux";
import dataDishes from "../../data/dataDishes"
import { Dish } from "./Dish"
import { getSearchTerm, getSelectedCategory, setDishes } from "../../redux/dishesSlice";
import { useEffect } from "react";

export const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    const searchTerm = useSelector(getSearchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDishes(dataDishes));
      }, [dispatch]);
    return(
        <div>
            {dataDishes
            .filter(dish => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === dish.category;
            }) 
            .filter(dish => {
                if (!searchTerm || searchTerm.trim() === '') return true;
                return dish.name.toLowerCase().includes(searchTerm.toLowerCase());
              })
            .map(dish => <Dish key={dish.id} dish={dish}/>)}
        </div>
    )
}