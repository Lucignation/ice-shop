import { FC } from 'react';

import styles from './button.module.scss';

type props = {
  btnText?: string;
  btnType?: string;
};

const Button: FC<props> = ({ btnText, btnType }) => {
  return (
    <div>
      <input
        type='submit'
        value={btnText}
        className={
          btnType === 'primary'
            ? styles.submit_btn
            : styles.submit_btn_secondary
        }
      />
    </div>
  );
};

export default Button;
