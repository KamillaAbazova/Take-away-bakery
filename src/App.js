
import './App.css';
import { Cart } from './Components/Cart/Cart';
import { Dishes } from './Components/DishesComponents/Dishes';
import { Field } from './Components/Field/Field';
import { AllCategories } from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block-dishes'>
      <Field/>
      <AllCategories/>
      <Dishes/>
      </div>
      <div className='block-cart'>
      <Cart/>
      </div>
    </div>
  );
}

export default App;
