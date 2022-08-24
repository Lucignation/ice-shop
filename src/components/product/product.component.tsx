import { FC } from 'react';
import { IProduct } from '../../common/product.interface';

type props = {
  product: IProduct;
};

const Product: FC<props> = ({ product }) => {
  const { title, description, image, price, category } = product;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <div>
          <span>${price}</span>
          <span>{category}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
