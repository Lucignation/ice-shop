import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logOut } from '../../store/Reducer';
import { RootState } from '../../store/store';

const Navbar = () => {
  const dispatch = useDispatch();

  const currentState = useSelector((state: RootState) => state.user);

  const { cart } = currentState;

  const userToken: string | null = localStorage.getItem('token');

  const [token, setToken] = useState<string | null>(userToken);

  useEffect(() => {
    setToken(userToken);
  }, [token]);

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <h1>ICE SHOP</h1>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/electronics'>
                Electronics
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/jewelery'>
                Jewelery
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/men'>
                Men
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='/women'>
                Women
              </a>
            </li>
          </ul>
          <NavLink to='/cart'>
            <span className='navbar-text'>Cart</span>
            <span className='navbar-text'>{cart.length}</span>
          </NavLink>
          {token ? (
            <span className='navbar-text' onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <span className='navbar-text'>Login</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
