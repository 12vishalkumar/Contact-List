//----------------------------- importing required libaries --------------------------//
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Add from "./Pages/AddContact/add";
import Edit from "./Pages/EditContact/edit";
import CustomContext from './Context/context';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


//----------------------------- App function -----------------------------------------//
function App() {
  //--------------------------- Creating Routes --------------------------------------//
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/> ,
      children : [
        {path: '/', element: <Home/>},
        {path: '/add', element: <Add/>},
        {path: '/edit/:id', element: <Edit/>}
      ]}
  ]);

  return (
    <>
      <CustomContext>
        <ToastContainer />
        <RouterProvider router={router} />
      </CustomContext>
    </>
  );
}

//---------------------------- default exportor function ---------------------------//
export default App;