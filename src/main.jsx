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
import ErrorPage from './Pages/ErrorPage.jsx';
import MyTutorials from './Pages/MyTutorials.jsx';
import FindTutors from './Pages/FindTutors.jsx';
import UpdateTutorials from './Pages/UpdateTutorials.jsx';
import TutorDetails from './Pages/TutorDetails.jsx';
import MyTutors from './Pages/MyTutors.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, 
        Component: Home
        
      },
      {
        path: '/findtutors',
        Component: FindTutors,
        
      },
      {
        path: '/updatetutorials/:id',
        Component: UpdateTutorials,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/tutorials/${params.id}`)
      },
      {
        path: '/tutordetails/:id',
        element: <PrivateRoutes>
          <TutorDetails></TutorDetails>
        </PrivateRoutes>,
        
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
       
      },
      {
        path: '/mytutorials/:email',
        element: <PrivateRoutes>
            <MyTutorials></MyTutorials>
        </PrivateRoutes>,
      },
      {
        path: '/mytutors/:email',
        element: <PrivateRoutes>
            <MyTutors></MyTutors>
        </PrivateRoutes>,
      }

      
    ]
  },
  {
          path: '/*',
          element: <ErrorPage></ErrorPage>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
<RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
