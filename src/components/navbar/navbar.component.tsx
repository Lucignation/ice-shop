import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

import { logOut } from '../../store/Reducer';
import { RootState } from '../../store/store';

import styles from './navbar.module.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const currentState = useSelector((state: RootState) => state.user);

  const { cart } = currentState;

  const token: string | null = localStorage.getItem('token');

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
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
              <a
                className={
                  location.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
                aria-current='page'
                href='/'
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={
                  location.pathname === '/electronics'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href='/electronics'
              >
                Electronics
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={
                  location.pathname === '/jewelery'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href='/jewelery'
              >
                Jewelery
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={
                  location.pathname === '/men' ? 'nav-link active' : 'nav-link'
                }
                href='/men'
              >
                Men
              </a>
            </li>

            <li className='nav-item'>
              <a
                className={
                  location.pathname === '/women'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href='/women'
              >
                Women
              </a>
            </li>
          </ul>
          <div>
            <a
              className={
                location.pathname === '/users' ? 'nav-link active' : 'nav-link'
              }
              href='/users'
            >
              <FaUserAlt />
            </a>
          </div>
          <div className={styles.cart}>
            <NavLink to='/cart'>
              <span className={`navbar-text ${styles.cart_link}`}>Cart</span>\
            </NavLink>
            <span className={`navbar-text ${styles.item_num}`}>
              {cart.length}
            </span>
          </div>
          {token ? (
            <span
              className='navbar-text text-white btn btn-dark'
              onClick={handleLogout}
            >
              Logout
            </span>
          ) : (
            <NavLink to='/signin' className=' btn btn-dark'>
              <span className='navbar-text text-white'>Login</span>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
