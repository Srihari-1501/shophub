import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductPage from './pages/ProductPage.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import Cart from './pages/cart.jsx'
import Checkout from './pages/Checkout.jsx'


const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/product/:id',
    element: <ProductPage />
  },
  {
    path: '/cart',
    element: <Cart />,},
  {
    path: '/checkout',
    element: <Checkout />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
