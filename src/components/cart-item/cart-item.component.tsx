import { FC } from 'react';
import { IProduct } from '../../common/product.interface';
import { useDispatch } from 'react-redux';

import { RemoveItem } from '../../store/Reducer';

type props = {
  index: number;
  product: IProduct;
  removeItem: (product: IProduct) => void;
};

const CartItem: FC<props> = ({ index, product, removeItem }) => {
  const dispatch = useDispatch();

  const { title, image, price } = product;

  const handleRemove = (product:IProduct) => {
    console.log('product = ', product)
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
      {/* <td onClick={() => removeItem(product)}>Remove</td> */}
      <td onClick={() => handleRemove(product)}>Remove</td>
    </tr>
  );
};

export default CartItem;
