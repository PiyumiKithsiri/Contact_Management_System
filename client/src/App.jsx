import React, { useEffect, useState } from 'react'; // Import React and hooks
import Home from './pages/Home'; // Import Home page
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; // Import router components
import Register from './pages/Register'; // Import Register page
import Login from './pages/Login'; // Import Login page
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { createContext } from 'react'; // Import createContext for global state
import axios from 'axios'; // Import axios for HTTP requests
import Dashboard from './pages/Dashboard';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Logout from './Components/Logout';
import ProtectedRoutes from './Components/ProtectedRoutes';
import NotFound from './pages/NotFound';

export const UserContext = createContext(null); // Create UserContext for user state

const router = createBrowserRouter([ // Define app routes
  {
    path: '/', // Home route
    element: <Home/>,
  },
  {
    path: '/register', // Registration route
    element: <Register/>,
  },
  {
    path: '/login', // Login route
    element: <Login/>,
  },
  {
    path: '/dashboard', // Dashboard route
    element: <ProtectedRoutes><Dashboard/></ProtectedRoutes>,
    children: [
      {
        index: true,
        element: <Contacts/>,
      },
      {
        path: '/dashboard/add-contact',
        element: <AddContact />,
      },
      {
        path: '/dashboard/edit-contact/:id',
        element: <EditContact />,
      }
    ]
  },
  {
    path: '/logout', // Logout route
    element: <Logout/>,
  },
  {
    path: '*', // Catch-all route
    element: <NotFound/>,
  }
]);

const App = () => {
  const [user, setUser] = useState(); // State to hold user info
  useEffect(() => { // Fetch user verification on mount
    axios.get('http://127.0.0.1:3000/contactmsyt/verify', { // API call to verify user
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Send token in headers
      }
    })
  .then(res =>{ // On success
    if(res.data.success){ // Check if verification is successful
      setUser(res.data.user); // Set user state
    }
  }).catch(err =>{ // On error
    console.log(err); // Log error
  });
},[]) // Empty dependency array for one-time fetch

  return (
    <>
    <ToastContainer/> {/* Toast notifications container */}
    <UserContext.Provider value={{user, setUser}}> {/* Provide user context */}
      <RouterProvider router={router}/> {/* Render router */}
    </UserContext.Provider>
    </>
  )
}

export default App; // Export App component
