import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home.jsx';
import Phones from './components/Phones/Phones.jsx';
import About from './components/About/About.jsx';
import PhoneDetail from './components/PhoneDetail/PhoneDetail.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phones')
      },
      {
        path: 'phones',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phones')
      },
      {
        path: 'phone/:phoneId',
        element: <PhoneDetail></PhoneDetail>,
        loader: ({params}) => fetch(`http://localhost:3000/phone/${params.phoneId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
