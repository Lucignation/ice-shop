import axiosInstance from '../../axios/index';
import { IProduct } from '../../common/product.interface';

const fetchData = async () => {
  const res = await axiosInstance.get('products');
  return res.data;
};

const mockData: any = fetchData();

test('the data is array products', async () => {
  const data: Array<IProduct> = await fetchData();
  expect(data).toMatchSnapshot(mockData);
});
