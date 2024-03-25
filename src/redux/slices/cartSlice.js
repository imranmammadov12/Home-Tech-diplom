import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  };
  
  const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  };
const initialState = loadState() || {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state, action) => {
            const newItem = action.payload
            const existingItemIndex = state.cartItems.find((item)=> item.id === newItem.id);

            state.totalQuantity++;

            if(existingItemIndex === -1) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }


            else{
                state.cartItems[existingItemIndex].quantity++;
                state.cartItems[existingItemIndex].totalPrice += newItem.price;
            }

            state.totalQuantity++;
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.totalPrice), 0);

            saveState(state);
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
      
            if (existingItemIndex !== -1) {
              state.totalQuantity -= state.cartItems[existingItemIndex].quantity;
              state.totalAmount -= state.cartItems[existingItemIndex].totalPrice;
      
              state.cartItems.splice(existingItemIndex, 1);
            }
      
            saveState(state);
          },
    }
});

export const  cartActions  = cartSlice.actions;

export default cartSlice.reducer;