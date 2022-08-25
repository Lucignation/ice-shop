import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/js/bootstrap.js';

//styles
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
