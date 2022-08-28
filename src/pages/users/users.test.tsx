import axiosInstance from '../../axios/index';

const fetchData = async () => {
  const res = await axiosInstance.get('/users');
  return res.data;
};

const mockData = fetchData();

test('the data is a array of users', async () => {
  const data = await fetchData();
  expect(data).toMatchSnapshot(mockData);
});
