import { addToCart, updateQuantity, removeFromCart, clearCart, loadCartFromStorage } from '../reducers/cart';
import { CartItem } from '@/models/Cart';
import { CartState } from '../reducers/cart';
import { secureStorage } from '@/utils/secureStorage';
import store from '../store';

const { dispatch } = store;

export const addItemToCart = (item: CartItem) => {
  return addToCart(item);
};

export const updateItemQuantity = (id: string, quantity: number) => {
  return updateQuantity({ id, quantity });
};

export const removeItemFromCart = (id: string) => {
  return removeFromCart(id);
};

export const clearCartAction = () => {
  return clearCart();
};

export const loadCartFromStorageAction = async () => {
  try {
    const cartData = await secureStorage.getObject<CartState>('CART_DATA');
    if (cartData) {
      dispatch(loadCartFromStorage(cartData));
    }
  } catch (error) {
    console.log('Error loading cart from storage:', error);
  }
}; 