import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser, IAccount } from '../common/interfaces';
import { IProduct } from '../common/product.interface';
import { ICart } from '../common/interfaces';

const initialState: IAccount = {
  user: {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: '',
      },
    },
    phone: '',
  },
  token: '',
  products: [],
  product: {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  },
  cart: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IAccount, action: PayloadAction<IAccount>) => {
      //   localStorage.setItem('token', action.payload.token);
      //   // localStorage.removeItem('token');
      //   state.user = action.payload.msg;
    },
    setLogin: (state: IAccount, action: PayloadAction<IAccount>) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
    },
    GetProducts: (state: IAccount, action: PayloadAction<IProduct[]>) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    RemoveItem: (state: IAccount, action: PayloadAction<IProduct>) => {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    },
    AddItem: (state: IAccount, action: PayloadAction<IProduct>) => {
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    },

    AddUser: (state: IAccount, action: PayloadAction<IUser>) => {
      return {
        ...state,
        user: action.payload,
      };
    },

    UpdateUser: (state: IAccount, action: PayloadAction<IUser>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logOut: () => {
      localStorage.removeItem('token');
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  logOut,
  setLogin,
  GetProducts,
  RemoveItem,
  AddItem,
  AddUser,
  UpdateUser,
} = userSlice.actions;

export default userSlice.reducer;
