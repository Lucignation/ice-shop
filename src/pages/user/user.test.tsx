import axiosInstance from '../../axios/index';

const fetchData = async () => {
  const res = await axiosInstance.get('/users/3');
  return res.data;
};

const mockData = fetchData();

test('the data is a single user', async () => {
  const data = await fetchData();
  expect(data).toMatchSnapshot(mockData);
});
