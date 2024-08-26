import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Insights from './pages/Insights.jsx'
import Industries from './pages/Industries.jsx'
import Services from './pages/Services.jsx'
import Careers from './pages/Careers.jsx'

const router = createBrowserRouter([
  {
      path:"/",
      element: <App />,
      children:[
          {
              path:"",
              element:<Home />
          },
          {
            path:"insights",
            element:<Insights />
          },
          {
            path:"industries",
            element : <Industries />
          },
          {
            path:"services",
            element  : <Services />
          },
          {
            path : "careers",
            element : <Careers />
          }

      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
