import User from './user.component';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

const mockUser = {
  id: 1,
  email: 'lucignation@gmail.com',
  username: 'lucignation',
  password: 'password',
  name: {
    firstname: 'Gerald',
    lastname: 'Olumide',
  },
  address: {
    city: 'Lagos',
    street: 'my street',
    number: 45,
    zipcode: '434',
    geolocation: {
      lat: '-43556',
      long: '4688',
    },
  },
  phone: '345676543456',
};

const mockProps = {
  user: mockUser,
};

describe('User ', () => {
  it('renders a snapshot of <User /> when it it passed into a component ', () => {
    const user = renderer
      .create(
        <Router>
          <User {...mockProps} />
        </Router>
      )
      .toJSON();

    expect(user).toMatchSnapshot();
  });
});
