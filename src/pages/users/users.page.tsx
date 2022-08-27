import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getUsers } from '../../store/Reducer';

import axiosInstance from '../../axios/index';

import User from '../../components/user/user.component';
import { IUser } from '../../common/interfaces';

//import styles
import styles from './users.module.scss';

const Users = () => {
  const dispatch = useDispatch();

  const currentState = useSelector((state: RootState) => state.user);

  const { users } = currentState;

  useEffect(() => {
    const fetchUsers = async () => {
      const url = '/users';

      try {
        const res = await axiosInstance.get(url);
        dispatch(getUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);
  return (
    <div className={styles.users}>
      {users.length > 1 ? (
        users.map((user: IUser) => <User user={user} key={user.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Users;
