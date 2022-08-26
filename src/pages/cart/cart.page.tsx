import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../common/product.interface';
import { RootState } from '../../store/store';

import { RemoveItem } from '../../store/Reducer';

//import from folders
import CartItem from '../../components/cart-item/cart-item.component';
import Summary from '../../components/summary/summary.component';

import styles from './cart.module.scss';
import { ICart } from '../../common/interfaces';

type props = {};

const Cart: FC<props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentState = useSelector((state: RootState) => state.user);

  let { cart } = currentState;

  const handleRemoveItem = (_product: IProduct) => {
    dispatch(RemoveItem(_product));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={` ${styles.cart_main}`}>
      {cart.length > 0 ? (
        <div className={`row`}>
          <div className={`col-8`}>
            <table className={`table caption-top`}>
              <caption>{cart.length} Items in the Cart</caption>
              <thead>
                <tr>
                  <th scope={`col`}>N/S</th>
                  <th scope={`col`}>Product Image</th>
                  <th scope={`col`}>Product Name</th>
                  <th scope={`col`}>Price</th>
                  <th scope={`col`}>Action</th>
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
            <p onClick={handleGoBack} className={styles.backBtn}>
              &larr; Continue Shopping
            </p>
          </div>
          <div className={`col-4 ${styles.summary}`}>
            <Summary />
          </div>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
