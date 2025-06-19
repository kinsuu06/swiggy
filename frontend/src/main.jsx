import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Offer from './components/Offer';
import Help from './components/Help';
import Signin from './components/Signin';
import Body from './components/Body';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantDetail from './components/RestaurantDetail';
import Clock from './components/Clock';

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <Error/>,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/offers',
        element: <Offer />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetail/>,
      },
      {
        path: '/clock',
        element: <Clock/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);