import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: React.ReactElement;
}

export const PrivateRoute: FC<IProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log(token);
  return <>{token ? children : <Navigate to='/signin' />}</>;
};
