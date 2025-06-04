import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Contexts/AuthProvider';
import AddTutorials from './Pages/AddTutorials.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/addtutorials',
        element: <PrivateRoutes>
            <AddTutorials></AddTutorials>
        </PrivateRoutes>
       
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
<RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
