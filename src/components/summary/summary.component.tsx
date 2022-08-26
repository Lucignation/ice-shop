import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ICart } from '../../common/interfaces';
import { IProduct } from '../../common/product.interface';
import { RootState } from '../../store/store';
import Input from '../Input/input.component';

import styles from './summary.module.scss';

const Summary = () => {
  const currentState = useSelector((state: RootState) => state.user);

  const [promoCode, setPromoCode] = useState<string>('');

  const { cart } = currentState;

  const prices = cart.map((product: IProduct) => Number(product.price));

  const total = Number(prices.reduce((acc, price) => acc + price).toFixed(2));

  console.log(total);
  return (
    <div className={styles.summary_main}>
      <h4 className={styles.summary_heading}>Order Summary</h4>
      <div className={styles.horizontal_line}></div>

      <div className={`row ${styles.summary_item_info}`}>
        <div className='col'>ITEM {cart.length}</div>
        <div className='col'>${total}</div>
      </div>

      <div className={`row ${styles.summary_vat_info}`}>
        <div className='col'>VAT</div>
        <div className='col'>$2</div>
      </div>

      <div className={styles.promo_code}>
        <h5>PROMO CODE</h5>
        <Input
          formType='input'
          placeholder='promocode'
          name='Enter your code'
          setValue={setPromoCode}
          value={promoCode}
        />
      </div>

      <div className={styles.horizontal_line}></div>

      <div className={`row ${styles.summary_total_info}`}>
        <div className='col'>TOTAL COST</div>
        <div className='col'>${total + 2}</div>
      </div>

      <input type='submit' value='CHECKOUT' className={`btn btn-info`} />
    </div>
  );
};

export default Summary;
