# ICE SHOP

A React Js e-commerce website. The homepage displays the list of products, signin page allows a user to signin and a token is stored in a localStorage.

## Tech Stack

1. React
2. SCSS
3. TypeScript
   4.Redux Toolkit

## Frameworks and Libraries

1. React

## API's

### Get all products

```javascript
const res = await axios.get('https://fakestoreapi.com/products');

console.log(res.data);
```

### Get a single product

```javascript
const res = await axios.get('https://fakestoreapi.com/products/1');

console.log(res.data);
```

### Post login

```javascript
const loginObj = {
  username: '',
  password: '',
};
const res = await axios.post('https://fakestoreapi.com/auth/login', loginObj);

console.log(res.data);
```
