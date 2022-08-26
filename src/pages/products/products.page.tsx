import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import from interface
import { IProduct } from '../../common/product.interface';

//import from components
import Product from '../../components/product/product.component';
import { GetProducts } from '../../store/Reducer';

//import styles
import styles from './products.module.scss';
import globalStyles from '../../assets/css/styles.module.scss';

import axiosInstance from '../../axios/index';
import { RootState } from '../../store/store';

const Products = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: RootState) => state.user);

  const { products } = currentState;

  //   const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const url = 'products';
    try {
      const fetchProducts = async () => {
        const res = await axiosInstance.get(url);
        dispatch(GetProducts(res.data));
      };

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(products);

  return (
    <div className={globalStyles.products}>
      {products.length > 1 ? (
        products.map((product: IProduct) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
