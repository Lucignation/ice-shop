import { FC } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import globalStyles from '../../assets/css/styles.module.scss';

import axiosInstance from '../../axios/index';

import Product from '../../components/product/product.component';
import { GetProducts } from '../../store/Reducer';

//import from interface
import { IProduct } from '../../common/product.interface';

import { RootState } from '../../store/store';

type props = {};
const Electronics: FC<props> = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: RootState) => state.user);

  const { products } = currentState;

  useEffect(() => {
    const url = 'products/category/electronics';

    try {
      const fetchElectronics = async () => {
        const res = await axiosInstance.get(url);
        //   setProducts(res.data);
        dispatch(GetProducts(res.data));
      };
      fetchElectronics();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h3>Electronics</h3>
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

export default Electronics;
