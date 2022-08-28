import { FC } from 'react';
import { IProduct } from '../../common/product.interface';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//imports from folders
import { RemoveItem, AddItem } from '../../store/Reducer';

//styles
import styles from './product.module.scss';
import { RootState } from '../../store/store';

type props = {
  product: IProduct;
};

const Product: FC<props> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { title, description, image, price, category } = product;

  const currentState = useSelector((state: RootState) => state.user);

  let { cart } = currentState;

  const handleSelectItem = (_product: IProduct) => {
    if (!token) {
      navigate('/signin');
      return;
    }
    console.log(_product);
    if (cart.some((item: IProduct) => item.id === _product.id)) {
      dispatch(RemoveItem(_product)); //@RemoveItem -> this function removes item to cart in the reducer
      const removeNotify = () =>
        toast.warning(`${_product.title} removed`, {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      removeNotify();
    } else {
      dispatch(AddItem(_product)); //@AddItem -> this function adds item to cart in the reducer
      const selectedNotify = () =>
        toast.success(`${_product.title} selected`, {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      selectedNotify();
    }
  };

  const titleFirstPart = title.slice(0, 33);
  const titleShorten = titleFirstPart + '...';

  const descriptionFirstPart = description.slice(0, 91);
  const descriptionShorten = descriptionFirstPart + '...';
  return (
    <div className={styles.product_container}>
      <div className={styles.product_image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.product_info_container}>
        <h4 className={styles.product_title}>{titleShorten}</h4>
        <div className={` row ${styles.product_mid_main}`}>
          <span className={`col ${styles.product_price}`}>${price}</span>
          <span className={`col ${styles.product_category}`}>{category}</span>
        </div>
        <p className={styles.product_description}>{descriptionShorten}</p>
      </div>
      <p
        onClick={() => handleSelectItem(product)}
        className={`btn btn-outline-secondary ${styles.add_to_cart_btn}`}
      >
        {cart.some((item: IProduct) => item.id === product.id)
          ? 'Remove from cart'
          : 'Add to cart'}
      </p>
    </div>
  );
};

export default Product;
