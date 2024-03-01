import { createSlice } from "@reduxjs/toolkit";

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: 'ALL',
        searchTerm: ''
       
    },
    reducers:{
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setDishes: (state, action) => {
            state.data = action.payload;
          },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
          }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const getSearchTerm = state => state.dishes.searchTerm;
export const {filterCategory, setDishes, setSearchTerm} = dishesSlice.actions;
export default dishesSlice.reducer;