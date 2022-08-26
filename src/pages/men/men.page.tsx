import { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axiosInstance from '../../axios/index';

import globalStyles from '../../assets/css/styles.module.scss';

import Product from '../../components/product/product.component';
import { GetProducts } from '../../store/Reducer';

//import from interface
import { IProduct } from '../../common/product.interface';

import { RootState } from '../../store/store';
import { ICart } from '../../common/interfaces';

type props = {};
const Men: FC<props> = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: RootState) => state.user);

  const { products } = currentState;

  useEffect(() => {
    const url = "products/category/men's clothing";

    try {
      const fetchMenWears = async () => {
        const res = await axiosInstance.get(url);
        dispatch(GetProducts(res.data));
      };
      fetchMenWears();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h3>Men's Clothing</h3>
      <div className={globalStyles.products}>
        {products.length > 1 ? (
          products.map((product: IProduct) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))
        ) : (
          <p>LOading</p>
        )}
      </div>
    </div>
  );
};

export default Men;
