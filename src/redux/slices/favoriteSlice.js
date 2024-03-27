import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
    const serializedState = localStorage.getItem('favorite');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  };
  
  const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('favorite', serializedState);
  };
const initialState = loadState() || {
  favoriteItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.favoriteItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex === -1) {
        state.favoriteItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
      } else {
        state.favoriteItems[existingItemIndex].quantity++;
        state.favoriteItems[existingItemIndex].totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalAmount = state.favoriteItems.reduce((total, item) => total + Number(item.totalPrice), 0);

      saveState(state);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.favoriteItems.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        state.totalQuantity -= state.favoriteItems[existingItemIndex].quantity;
        state.totalAmount -= state.favoriteItems[existingItemIndex].totalPrice;

        state.favoriteItems.splice(existingItemIndex, 1);
      }

      saveState(state);
    },
  },
});

export const  favoriteActions  = favoriteSlice.actions;

export default favoriteSlice.reducer;