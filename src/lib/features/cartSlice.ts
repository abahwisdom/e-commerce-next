import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../services/types/Product';

// Define the interface for an item in the cart
interface CartItem extends Product{
  quantity: number;
}

// Define the interface for the cart state
interface CartState {
  items: CartItem[];
  totalAmount: number;
}

// Initial state for the cart slice
const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

// Create the cart slice using Redux Toolkit's createSlice function
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.totalAmount += newItem.price * newItem.quantity;
    },
    // Reduce the quantity of an item in the cart by 1
    reduceItemQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
    // Remove an item from the cart
    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    // Clear the cart
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

// Export the actions and reducer from the cart slice
export const { addItem, removeItem, clearCart, reduceItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
