import { FC } from 'react';
import { IProduct } from '../../common/product.interface';
import { useDispatch } from 'react-redux';

import { RemoveItem } from '../../store/Reducer';

type props = {
  index: number;
  product: IProduct;
  removeItem: () => void;
};

const CartItem: FC<props> = ({ index, product, removeItem }) => {
  const dispatch = useDispatch();

  const { title, image, price } = product;

  const handleRemove = () => {
    dispatch(RemoveItem(product));
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>
        <img src={image} alt={title} />
      </td>
      <td>{price}</td>
      <td onClick={removeItem}>Remove</td>
    </tr>
  );
};

export default CartItem;
