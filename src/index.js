import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useParams } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import RootLayout from './layouts/rootLayout';
import DirectMessageLayout from './layouts/directMessageLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<App />} />
      <Route path=':userId' element={<DirectMessageLayout />}>
        {/* <Route index element={} /> */}
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
