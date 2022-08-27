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

  const [email, setEmail] = useState<string>(user.email);
  const [username, setUsername] = useState<string>(user.username);
  const [password, setPassword] = useState<string>(user.password);
  const [firstName, setFirstName] = useState<string>(user.name.firstname);
  const [lastName, setLastName] = useState<string>(user.name.lastname);
  const [street, setStreet] = useState<string>(user.address.street);
  const [city, setCity] = useState<string>(user.address.city);
  const [num, setNum] = useState<number>(user.address.number);
  const [zipcode, setZipcode] = useState<string>(user.address.zipcode);
  const [lat, setLat] = useState<string>(user.address.geolocation.lat);
  const [long, setLong] = useState<string>(user.address.geolocation.long);
  const [phone, setPhone] = useState<string>(user.phone);

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
          value={email}
        />

        <Input
          formType='text'
          placeholder='Username'
          name='username'
          setValue={setUsername}
          value={username}
        />

        <Input
          formType='password'
          placeholder='Password'
          name='password'
          setValue={setPassword}
          value={password}
        />

        <Input
          formType='text'
          placeholder='First Name'
          name='firstName'
          setValue={setFirstName}
          value={firstName}
        />

        <Input
          formType='text'
          placeholder='Last Name'
          name='lastName'
          setValue={setLastName}
          value={lastName}
        />

        <Input
          formType='text'
          placeholder='City'
          name='city'
          setValue={setCity}
          value={city}
        />

        <Input
          formType='text'
          placeholder='Street'
          name='street'
          setValue={setStreet}
          value={street}
        />

        <Input
          formType='number'
          placeholder='Number'
          name='num'
          setValue={setNum}
          value={num}
        />

        <Input
          formType='text'
          placeholder='Zipcode'
          name='zipcode'
          setValue={setZipcode}
          value={zipcode}
        />

        <Input
          formType='text'
          placeholder='Lat'
          name='lat'
          setValue={setLat}
          value={lat}
        />

        <Input
          formType='text'
          placeholder='Long'
          name='long'
          setValue={setLong}
          value={long}
        />

        <Input
          formType='text'
          placeholder='phone'
          name='phone'
          setValue={setPhone}
          value={phone}
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
