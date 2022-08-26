import Button from './button.component';
import renderer from 'react-test-renderer';

const mockProps = {
  btnText: 'mock BtnText',
};
describe('Button : ', () => {
  it('renders a snapshot of <Button /> when btnType is primary ', () => {
    const button = renderer
      .create(<Button btnType='primary' {...mockProps} />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });


    it('renders a snapshot of <Button /> when btnType is something other primary ', () => {
      const button = renderer
        .create(<Button {...mockProps} />)
        .toJSON();
      expect(button).toMatchSnapshot();
    });
});
