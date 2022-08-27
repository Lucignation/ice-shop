# ICE SHOP

A React Js e-commerce website. The homepage displays the list of products, signin page allows a user to signin and a token is stored in a localStorage.

## Tech Stack

1. React
2. SCSS
3. TypeScript
4. Redux Toolkit
5. Bootstrap
6. Jest
7. React-test-renderer

## Frameworks and Libraries

1. React
2. Bootstrap

## Getting Started

First, run the development server:

```bash
npm i

npm start
```

To run run tests:

```bash
npm run test
```

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

### Get all users

```javascript
const res = await axios.get('https://fakestoreapi.com/users');

console.log(res.data);
```

### Get add a new user

```javascript
const user = {
  email,
  username,
  password,
  name: {
    firstname
    lastname,
  },
  address: {
    city,
    street,
    number,
    zipcode,
    geolocation: {
      lat,
      long,
    },
  },
  phone: phone,
};

const res = await axios.post('https://fakestoreapi.com/users', user);

console.log(res.data);
```

### Get update an existing user

```javascript
const user = {
  email,
  username,
  password,
  name: {
    firstname
    lastname,
  },
  address: {
    city,
    street,
    number,
    zipcode,
    geolocation: {
      lat,
      long,
    },
  },
  phone: phone,
};

const res = await axios.put('https://fakestoreapi.com/users/1', user);

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

## Public Pages

- Home [Public Route](https://ice-shop.vercel.app/) (http://localhost:3000)

- Users [Public Route](http://localhost:3000/users) (http://localhost:3000/users)

## Private Pages

- Cart [Private Route](https://ice-shop.vercel.app/cart) (http://localhost:3000/cart)

- Add User [Private Route](https://ice-shop.vercel.app/add-user) (http://localhost:3000/add-user)

- Update User [Private Route](https://ice-shop.vercel.app/user/2) (http://localhost:3000/user/2)

### Categories Pages

- Electronics [Private Route](https://ice-shop.vercel.app/electronics) (http://localhost:3000/electronics)

- Jewelery [Private Route](https://ice-shop.vercel.app/jewelery) (http://localhost:3000/jewelery)

- Men [Private Route](https://ice-shop.vercel.app/men) (http://localhost:3000/men)

- Women [Private Route](https://ice-shop.vercel.app/women) (http://localhost:3000/women)
