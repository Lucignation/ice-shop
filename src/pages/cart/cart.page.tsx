import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IProduct } from '../../common/product.interface';
import { RootState } from '../../store/store';

import { RemoveItem } from '../../store/Reducer';

//import from folders
import CartItem from '../../components/cart-item/cart-item.component';

type props = {};

const Cart: FC<props> = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: RootState) => state.user);

  let { cart } = currentState;

  const handleRemoveItem = (_product: IProduct) => {
    dispatch(RemoveItem(_product));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>N/S</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product: IProduct, index: number) => (
              <CartItem
                index={index}
                product={product}
                key={product.id}
                removeItem={() => handleRemoveItem(product)}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
