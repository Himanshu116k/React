import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Font from '../Components/Font';
import Home from '../Home/Home';
import Login from '../Components/Login';
import Admin from '../Components/Admin';
import Messages from '../Components/Messages';
import Left from '../Home/Left';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Font /> 
  },
  {
    path: "/home",
    element:<> <Home />  <Left/></>
  },
  {
    path: "/login",
    element: <Login />  
  },
  {
    path: "/admin",
    element: <Admin />  
  },
  {
    path: "/messages",
    element: <Messages /> 
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
