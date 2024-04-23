import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = ProductProps & {
  quantity: number;
  itemPrice: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      const { id, price } = action.payload;
      const roundedPrice = parseFloat(price.toFixed(2));

      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({
          ...action.payload,
          price: roundedPrice,
          itemPrice: roundedPrice,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.itemPrice = parseFloat((item.price * item.quantity).toFixed(2));
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.itemPrice = parseFloat((item.price * item.quantity).toFixed(2));
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.items;

export const selectTotalPrice = (state: RootState) => {
  const totalPrice = state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice.toFixed(2);
};

export default cartSlice.reducer;
