import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext.jsx';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#171717',
              color: '#F5F2F0',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              borderRadius: '4px',
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
