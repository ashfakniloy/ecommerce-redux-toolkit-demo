import type { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = ProductProps & {
  quantity: number;
  itemPrice: number;
};

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  showCart: boolean;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: ProductProps; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const roundedPrice = parseFloat(product.price.toFixed(2));

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.itemPrice = parseFloat(
          (existingItem.price * existingItem.quantity).toFixed(2)
        );
      } else {
        state.items.push({
          ...product,
          price: roundedPrice,
          itemPrice: roundedPrice * quantity,
          quantity: quantity,
        });
      }

      state.totalQuantity += quantity;

      state.totalPrice = parseFloat(
        (state.totalPrice + roundedPrice * quantity).toFixed(2)
      );
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const itemToRemove = state.items[index];
        const quantityToRemove = itemToRemove.quantity;
        state.items.splice(index, 1);
        state.totalQuantity -= quantityToRemove;

        state.totalPrice = parseFloat(
          (state.totalPrice - itemToRemove.price * quantityToRemove).toFixed(2)
        );
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.itemPrice = parseFloat((item.price * item.quantity).toFixed(2));
        state.totalQuantity++;
        state.totalPrice = parseFloat(
          (state.totalPrice + item.price).toFixed(2)
        );
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.itemPrice = parseFloat((item.price * item.quantity).toFixed(2));
        state.totalQuantity--;
        state.totalPrice = parseFloat(
          (state.totalPrice - item.price).toFixed(2)
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.items;
export const selectTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectShowCart = (state: RootState) => state.cart.showCart;

export default cartSlice.reducer;
