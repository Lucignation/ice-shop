import { FC, useState, useEffect } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../../common/interfaces';
import Input from '../../components/Input/input.component';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../../store/Reducer';

import styles from './user.module.scss';

import axiosInstance from '../../axios/index';
import { RootState } from '../../store/store';

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentState = useSelector((state: RootState) => state.user);
  const { id } = useParams();

  const { user } = currentState;

  console.log(id);
  useEffect(() => {
    const fetchUser = async () => {
      const url = `/users/${id}`;

      try {
        const res = await axiosInstance.get(url);
        dispatch(setUser(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [num, setNum] = useState<number>(0);
  const [zipcode, setZipcode] = useState<string>('');
  const [lat, setLat] = useState<string>('');
  const [long, setLong] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const user = {
      email,
      username,
      password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: city,
        street: street,
        number: num,
        zipcode: zipcode,
        geolocation: {
          lat: lat,
          long: long,
        },
      },
      phone: phone,
    };
    const url = `/users/${id}`;
    const res = await axiosInstance.put(url, user);

    if (res.status === 200) {
      navigate('/users');
    }
    console.log(res);
  };

  console.log(user);
  return (
    <div className={styles.user_main}>
      <form onSubmit={handleSubmit}>
        <Input
          formType='text'
          placeholder='Email'
          name='email'
          setValue={setEmail}
          value={user ? user.email : email}
        />

        <Input
          formType='text'
          placeholder='Username'
          name='username'
          setValue={setUsername}
          value={user ? user.username : username}
        />

        <Input
          formType='password'
          placeholder='Password'
          name='password'
          setValue={setPassword}
          value={user ? user.password : password}
        />

        <Input
          formType='text'
          placeholder='First Name'
          name='firstName'
          setValue={setFirstName}
          value={user ? user.name.firstname : firstName}
        />

        <Input
          formType='text'
          placeholder='Last Name'
          name='lastName'
          setValue={setLastName}
          value={user ? user.name.lastname : lastName}
        />

        <Input
          formType='text'
          placeholder='City'
          name='city'
          setValue={setCity}
          value={user ? user.address.city : city}
        />

        <Input
          formType='text'
          placeholder='Street'
          name='street'
          setValue={setStreet}
          value={user ? user.address.street : street}
        />

        <Input
          formType='number'
          placeholder='Number'
          name='num'
          setValue={setNum}
          value={user ? user.address.number : num}
        />

        <Input
          formType='text'
          placeholder='Zipcode'
          name='zipcode'
          setValue={setZipcode}
          value={user ? user.address.zipcode : zipcode}
        />

        <Input
          formType='text'
          placeholder='Lat'
          name='lat'
          setValue={setLat}
          value={user ? user.address.geolocation.lat : lat}
        />

        <Input
          formType='text'
          placeholder='Long'
          name='long'
          setValue={setLong}
          value={user ? user.address.geolocation.long : long}
        />

        <Input
          formType='text'
          placeholder='phone'
          name='phone'
          setValue={setPhone}
          value={user ? user.phone : phone}
        />

        <div className='row'>
          <div className='col'>
            <input
              type='submit'
              value='update user'
              className='btn btn-primary'
            />
          </div>
          <div className='col'>
            <NavLink to='/add-user'>
              <input
                type='submit'
                value='add user'
                className='btn btn-secondary'
              />
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default User;
