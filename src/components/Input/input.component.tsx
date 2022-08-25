import { FC, useState, useEffect, ChangeEvent } from 'react';

import HandleIcon from '../../assets/images/handleicon.svg';
import EyeIcon from '../../assets/images/eyeicon.svg';
import HideEye from '../../assets/images/eyehide.svg';
import styles from './input.module.scss';

type props = {
  formType?: string;
  placeholder?: string;
  value: string | number;
  setValue: any;
  name: string;
};

const Input: FC<props> = ({ formType, placeholder, name, setValue, value }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const showTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.input_container}>
      {formType === 'password' ? (
        <div className={`input-group ${styles.singleInput}`}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            className={`form-control ${styles.input}`}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className={`input-group-text`} onClick={showTogglePassword}>
            {showPassword ? (
              <img src={EyeIcon} alt='see password' />
            ) : (
              <img src={HideEye} alt='hide password' />
            )}
          </span>
        </div>
      ) : (
        <div className={`input-group ${styles.singleInput}`}>
          <input
            type='text'
            placeholder={placeholder}
            className={`form-control ${styles.input}`}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className={`input-group-text`}>
            <img src={HandleIcon} alt='handle' />
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
