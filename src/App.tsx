import {
  useRoutes,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//import from componenets folders
import Signin from './pages/signin/signin.page';
import Products from './pages/products/products.page';
import Cart from './pages/cart/cart.page';

import { PrivateRoute } from './utils/Auth';

import './App.scss';
import { RootState } from './store/store';

const App = () => {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
};

export default App;
function useSelector(arg0: (state: RootState) => any) {
  throw new Error('Function not implemented.');
}
