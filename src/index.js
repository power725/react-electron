import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import Toast from './components/common/Toast';

import './services/axios';
import 'font-awesome/css/font-awesome.min.css';
import './css/index.css';
import './css/form.css';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toast />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
