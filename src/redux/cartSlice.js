import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existsItem = state.find((item) => item.id === action.payload.id);
      if (existsItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.push(action.payload);
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IcrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    },
    DecrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
    // 🔹 NEW: Clears all cart items
    ClearCart: () => {
      return [];
    },
  },
});

export const { AddItem, RemoveItem, IcrementQty, DecrementQty, ClearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
