import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Home from './components/Home/Home'
import Error from './components/Error404/Error'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Corretores from './components/Corretores/Corretores';
import Servicos from './components/Servicos/Servicos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'corretores',
        element: <Corretores />,
      },
      {
        path: 'services',
        element: <Servicos />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
