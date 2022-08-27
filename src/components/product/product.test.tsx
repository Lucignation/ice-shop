import Product from './product.component';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';

const mockProps = {
  id: 1,
  title: 'product title',
  price: '10',
  category: 'product category',
  image: 'product image url',
  description: 'product description',
};

describe('Product: ', () => {
  it('renders a snapshot of <Product /> when each item is passed to the component', () => {
    const product = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Product product={mockProps} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(product).toMatchSnapshot();
  });
});
