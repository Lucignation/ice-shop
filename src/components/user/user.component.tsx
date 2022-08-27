import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../../common/interfaces';

//import styles
import styles from './user.module.scss';

type props = {
  user: IUser;
};

const User: FC<props> = ({ user }) => {
  const { id, address, email, phone, username, name } = user;
  return (
    <div className={`card ${styles.user_card}`}>
      <div className='card-body'>
        <h5 className='card-title'>
          <span className={styles.title}>Full Name</span>: {name.firstname}{' '}
          {name.lastname}
        </h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          {' '}
          <span className={styles.title}>Username</span>: {username}
        </h6>
        <h6 className='card-subtitle mb-2 text-muted'>
          <span className={styles.title}>Address</span>: {address.number},{' '}
          {address.street}, {address.city}, {address.zipcode}
        </h6>
        <h6 className='card-subtitle mb-2 text-muted'>
          {' '}
          <span className={styles.title}>Phone</span>: {phone}
        </h6>
        <h6 className='card-subtitle mb-2 text-muted'>
          {' '}
          <span className={styles.title}>Email</span>: {email}
        </h6>
        <h6 className='card-subtitle mb-2 text-muted'>
          <span className={styles.title}>Lat</span>: {address.geolocation.lat}{' '}
          <span className={styles.title}>Long</span>: {address.geolocation.long}
        </h6>
        <NavLink to={`/user/${id}`} className='btn btn-info'>
          Edit
        </NavLink>
      </div>
    </div>
  );
};

export default User;
