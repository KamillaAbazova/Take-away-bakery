import { useDispatch, useSelector } from "react-redux"
import { getSearchTerm, setSearchTerm } from "../../redux/dishesSlice";

export const Field = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(getSearchTerm);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(e.target.value));
      };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <h1>TAKE AWAY BAKERY</h1>
            <form className="input-button" onSubmit={handleSearchSubmit}>
              <input className="field" value={searchTerm} placeholder="Search..." onChange={handleSearch}/>
            </form>
        </div>
    )
}