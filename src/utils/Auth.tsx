import { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

interface IProps {
  children: React.ReactElement;
}

export const PrivateRoute: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token);
  return <>{token ? children : <Navigate to='/signin' />}</>;
};
