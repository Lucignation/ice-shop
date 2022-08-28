import axiosInstance from '../../axios/index';

const fetchData = async () => {
  const res = await axiosInstance.get("products/category/women's clothing");
  return res.data;
};

const mockData = fetchData();

test('the data is an array of products', async () => {
  const data = await fetchData();
  expect(data).toMatchSnapshot(mockData);
});
