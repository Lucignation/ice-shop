import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//import from interface
import { IProduct } from '../../common/product.interface';

//import from components
import Product from '../../components/product/product.component';
import { GetProducts } from '../../store/Reducer';

//import styles
import styles from './products.module.scss';

import axiosInstance from '../../axios/index';

const Products = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const url = 'products';
    const fetchProducts = async () => {
      const res = await axiosInstance.get(url);

      setProducts(res.data);
      dispatch(GetProducts(res.data));
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className={styles.products}>
      {products ? (
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
