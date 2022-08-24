import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import Logo from '../../components/Logo';

import axiosInstance from '../../axios/index';
import { setLogin } from '../../store/Reducer';

//styles
import styles from './signin.module.scss';
import Button from '../../components/Button/button.component';
import Input from '../../components/Input/input.component';

type props = {};
const Signin: FC<props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setErrors] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setErrors('');
    }, 2000);
  }, [error]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!username && !password) {
      return setErrors("Username/Password can't be empty.");
    }
    const signinObj = {
      username,
      password,
    };

    const url = 'auth/login';
    console.log(signinObj);

    const res = await axiosInstance.post(url, signinObj);

    if (res.status == 200) {
      dispatch(setLogin(res.data));
      navigate('/cart');
    }

    console.log(res);
  };
  return (
    <div>
      <div className={styles.login_container}>
        <div className={styles.login_right}>
          <p className={styles.login_sub_heading}>Hello there,</p>
          <h3 className={styles.login_heading}>Welcome Back!</h3>

          <form onSubmit={handleSubmit}>
            <Input
              formType='input'
              placeholder='Username'
              name='agentId'
              setSignin={setUsername}
              signin={username}
            />
            <Input
              formType='password'
              placeholder='Password'
              name='password'
              setSignin={setPassword}
              signin={password}
            />

            <div className={styles.horizontal_line}></div>

            <Button btnText='Sign in' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
