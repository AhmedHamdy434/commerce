import { createSlice } from "@reduxjs/toolkit";
export type CartProducts = {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  count: number;
  productPrice: number;
};

export type CartAccountType = {
  products: CartProducts[];
  totalPrice: number;
  totalCount: number;
};
type ActionType = {
  payload: CartProducts;
};
export type ActionAaacountType = {
  payload: CartAccountType;
};

export const initialState: CartAccountType = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    adding: (state, action: ActionType) => {
      const isThere = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (isThere !== -1) {
        state.products[isThere].count += action.payload.count;
        state.products[isThere].productPrice += action.payload.productPrice;
      } else {
        state.products.push(action.payload);
      }
      state.totalCount += action.payload.count;
      state.totalPrice += action.payload.productPrice;
    },
    addingOne: (state, action: ActionType) => {
      const isThere = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (isThere !== -1) {
        state.products[isThere].count++;
        state.products[isThere].productPrice += action.payload.price;
      } else {
        state.products.push(action.payload);
      }
      state.totalCount++;
      state.totalPrice += action.payload.price;
    },

    removeOne: (state, action: ActionType) => {
      const moreThanOne = state.products.findIndex(
        (product) => product.id === action.payload.id && product.count > 1
      );
      if (moreThanOne !== -1) {
        state.products[moreThanOne].count--;
        state.products[moreThanOne].productPrice -= action.payload.price;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
      state.totalCount--;
      state.totalPrice -= action.payload.price;
    },

    empty: (state) => {
      state.products = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },

    removeProduct: (state, action: ActionType) => {
      state.products = state.products.filter((product) => {
        if (product.id !== action.payload.id) return true;
        else {
          state.totalCount -= action.payload.count;
          state.totalPrice -= action.payload.productPrice;
          return false;
        }
      });
    },

    updating: (state, action: ActionAaacountType) => {
      state.products = [...action.payload.products];
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export default cartSlice.reducer;
export const { adding, removeOne, addingOne, empty, removeProduct, updating } =
  cartSlice.actions;
