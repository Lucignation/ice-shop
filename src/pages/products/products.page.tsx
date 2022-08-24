import { useState, useEffect } from 'react';

//import from interface
import { IProduct } from '../../common/product.interface';

//import from components
import Product from '../../components/product/product.component';

import axiosInstance from '../../axios/index';

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const url = 'products';
    const fetchProducts = async () => {
      const res = await axiosInstance.get(url);

      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      {products ? (
        products.map((p: IProduct) => <Product product={p} key={p.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
