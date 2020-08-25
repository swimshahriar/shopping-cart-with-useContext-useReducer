import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import CartContextProvider from './Context/CartContext';
import './index.css';

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById('root')
);
