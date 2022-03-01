import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='ultimateform'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
