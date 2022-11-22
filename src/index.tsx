import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import './index.css';
import App from './pages/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

