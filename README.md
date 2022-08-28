# ICE SHOP

An e-commerce website built with [Api](https://fakestoreapi.com). The homepage displays the list of products, sign-in page allows a user to sign-in, all categories are electronics, jewelery, men and women. Add user and Update users are on a private routes. User page shows all users and only authenticated users can view cart and add to cart.

## Frameworks and Libraries

1. React
2. SCSS
3. TypeScript
4. Redux Toolkit
5. Bootstrap
6. Jest
7. React-test-renderer

## Getting Started

First, run the development server:

```bash
npm i

then

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

### Post add a new user

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

### Put update an existing user

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

- [Home](https://ice-shop.vercel.app/) (http://localhost:3000)

- [Users](https://ice-shop.vercel.app/users) (http://localhost:3000/users)

- [Login](https://ice-shop.vercel.app/signin) (http://localhost:3000/signin)

## Private Pages

- [Cart](https://ice-shop.vercel.app/cart) (http://localhost:3000/cart)

- [Add User](https://ice-shop.vercel.app/add-user) (http://localhost:3000/add-user)

- [Update User](https://ice-shop.vercel.app/user/2) (http://localhost:3000/user/2)

### Categories Pages

- [Electronics](https://ice-shop.vercel.app/electronics) (http://localhost:3000/electronics)

- [Jewelery](https://ice-shop.vercel.app/jewelery) (http://localhost:3000/jewelery)

- [Men](https://ice-shop.vercel.app/men) (http://localhost:3000/men)

- [Women](https://ice-shop.vercel.app/women) (http://localhost:3000/women)

### Follow Gerald Olumide

- [LinkedIn](https://linkedin.com/in/geraldolumide) - [Twitter](https://twitter.com/lucignation) - [GitHub](https://github.com/lcuignation) -[Medium](https://medium.com/@lucignation)
