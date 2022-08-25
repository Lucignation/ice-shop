import { FC, useState } from 'react';
import { IUser } from '../../common/interfaces';
import Input from '../../components/Input/input.component';

const User = () => {
  //   const [user, setUser] = useState<IUser>({
  //     id: 0,
  //     email: '',
  //     username: '',
  //     password: '',
  //     name: {
  //       firstname: '',
  //       lastname: '',
  //     },
  //     address: {
  //       city: '',
  //       street: '',
  //       number: 0,
  //       zipcode: '',
  //       geolocation: {
  //         lat: '',
  //         long: '',
  //       },
  //     },
  //     phone: '',
  //   });

  //input states
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

  const handleSubmit = (e: React.SyntheticEvent) => {
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
    console.log(user);
  };
  return (
    <div>
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

        <input type='submit' value='add' />
      </form>
    </div>
  );
};

export default User;
