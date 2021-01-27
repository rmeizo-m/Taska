import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getIp} from './redux/action'

store.dispatch(getIp)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
