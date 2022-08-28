import CartItem from './cart-item.component';
import renderer from 'react-test-renderer';
import Cart from '../../pages/cart/cart.page';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const product = {
  id: 1,
  title: 'product title',
  price: '10',
  category: 'product category',
  image: 'product image url',
  description: 'product description',
};

const mockProps = {
  index: 0,
  product: product,
};

describe('Cart Item ', () => {
  it('renders a snapshot of <CartItem /> when it is passed into a component ', () => {
    const cartItem = renderer
      .create(
        <Provider store={store}>
          <CartItem {...mockProps} />
        </Provider>
      )
      .toJSON();

    expect(cartItem).toMatchSnapshot();
  });
});
