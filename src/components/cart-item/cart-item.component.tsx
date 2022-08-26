import { FC } from 'react';
import { IProduct } from '../../common/product.interface';
import { useDispatch } from 'react-redux';

import styles from './cart-item.module.scss';

import { RemoveItem } from '../../store/Reducer';

type props = {
  index: number;
  product: IProduct;
  removeItem: (product: IProduct) => void;
};

const CartItem: FC<props> = ({ index, product, removeItem }) => {
  const dispatch = useDispatch();

  const { title, image, price } = product;

  const handleRemove = (product: IProduct) => {
    console.log('product = ', product);
    dispatch(RemoveItem(product));
  };
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td className={styles.product_image}>
        <img src={image} alt={title} />
      </td>
      <td className={styles.product_title}>{title}</td>
      <td className={styles.product_price}>${price}</td>
      {/* <td onClick={() => removeItem(product)}>Remove</td> */}
      <td onClick={() => handleRemove(product)}>
        <p className={`btn btn-danger`}>Remove</p>
      </td>
    </tr>
  );
};

export default CartItem;
