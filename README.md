# ICE SHOP

A React Js e-commerce website. The homepage displays the list of products, signin page allows a user to signin and a token is stored in a localStorage.

## Tech Stack

1. React
2. SCSS
3. TypeScript
4. Redux Toolkit
5. Bootstrap

## Frameworks and Libraries

1. React
2. Bootstrap

## API's

### Get all products

```javascript
const res = await axios.get('https://fakestoreapi.com/products');

console.log(res.data);
```

## User must be logged in to view other category pages

### Post login

```javascript
const loginObj = {
  username: '',
  password: '',
};
const res = await axios.post('https://fakestoreapi.com/auth/login', loginObj);

console.log(res.data);
```

### Get products from Electronic Category

```javascript
const res = await axios.get(
  'https://fakestoreapi.com/products/category/electronics'
);

console.log(res.data);
```

### Get products from Jewelery Category

```javascript
const res = await axios.get(
  'https://fakestoreapi.com/products/category/jewelery'
);

console.log(res.data);
```

### Get products from Men's Clothing Category

```javascript
const res = await axios.get(
  "https://fakestoreapi.com/products/category/men's clothing"
);

console.log(res.data);
```

### Get products from Women's Clothing Category

```javascript
const res = await axios.get(
  "https://fakestoreapi.com/products/category/women's clothing"
);

console.log(res.data);
```

### Global State interface

```javascript
export interface IAccount {
  user: IUser;
  token: string;
  products: IProduct[];
  product: IProduct;
  cart: IProduct[];
}
```

### IUser interface

```javascript
export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string,
    lastname: string,
  };
  address: {
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation: {
      lat: string,
      long: string,
    },
  };
  phone: string;
}
```

### IProduct interface

```javascript
export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
```
