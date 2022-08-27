import Summary from './summary.component';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Summary: ', () => {
    const totals = ['20','40']
    const allTotal = totals.reduce(function(previousValue, currentValue){
  return Number(previousValue) + Number(currentValue);
}, 0);

  it('renders a snapshot of <Summary /> when showing total ', () => {
    const summary = renderer
      .create(
        <Provider store={store}>
          <Summary />
        </Provider>
      )
      .toJSON();

      expect(summary).toMatchSnapshot()
  });
});
