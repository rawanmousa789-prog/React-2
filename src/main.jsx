import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router";
import Home from './Home.jsx';
import {DataProvider} from "./context/data.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </DataProvider>
    
  </StrictMode>,
)
