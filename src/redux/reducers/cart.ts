import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/models/Cart';
import { secureStorage } from '@/utils/secureStorage';

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.subtotal = state.items.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
        return total + (price * item.quantity);
      }, 0);
      
      // Save to async storage
      secureStorage.setObject('CART_DATA', state);
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        
        // Update totals
        state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
        state.subtotal = state.items.reduce((total, item) => {
          const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
          return total + (price * item.quantity);
        }, 0);
        
        // Save to async storage
        secureStorage.setObject('CART_DATA', state);
      }
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.subtotal = state.items.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
        return total + (price * item.quantity);
      }, 0);
      
      // Save to async storage
      secureStorage.setObject('CART_DATA', state);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      
      // Save to async storage
      secureStorage.setObject('CART_DATA', state);
    },
    
    loadCartFromStorage: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.subtotal = action.payload.subtotal;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer; 