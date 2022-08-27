import { IProduct } from '../common/product.interface';

export interface IAccount {
  user: IUser;
  token: string;
  products: IProduct[];
  product: IProduct;
  users: IUser[];
  cart: IProduct[];
}

export interface IState {
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export interface ICart {
  product: IProduct;
  quantity: number;
}
