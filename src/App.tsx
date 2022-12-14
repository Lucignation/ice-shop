import {
  useRoutes,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//import from pages folders
import Signin from './pages/signin/signin.page';
import Products from './pages/products/products.page';
import Cart from './pages/cart/cart.page';
import Electronics from './pages/electronics/electronics.page';
import Jewelery from './pages/jewelery/jewelery.page';
import Men from './pages/men/men.page';
import Women from './pages/women/women.page';
import Users from './pages/users/users.page';
import AddUser from './pages/add-user/add-user.page';

//import from components folder
import User from './pages/user/user.component';
import Navbar from './components/navbar/navbar.component';

//Auth
import { PrivateRoute } from './utils/Auth';

import './App.scss';

import { RootState } from './store/store';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/cart'
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path='/user/:id'
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />

          <Route
            path='/user'
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />

          <Route
            path='/add-user'
            element={
              <PrivateRoute>
                <AddUser />
              </PrivateRoute>
            }
          />

          <Route
            path='/electronics'
            element={
              <PrivateRoute>
                <Electronics />
              </PrivateRoute>
            }
          />

          <Route
            path='/jewelery'
            element={
              <PrivateRoute>
                <Jewelery />
              </PrivateRoute>
            }
          />

          <Route
            path='/men'
            element={
              <PrivateRoute>
                <Men />
              </PrivateRoute>
            }
          />

          <Route
            path='/women'
            element={
              <PrivateRoute>
                <Women />
              </PrivateRoute>
            }
          />

          <Route path='/users' element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

// export default App;
function useSelector(arg0: (state: RootState) => any) {
  throw new Error('Function not implemented.');
}
