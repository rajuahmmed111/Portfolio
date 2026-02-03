import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Banner from './Home/Shared/Banner.jsx';
import AboutMe from './Home/Shared/AboutMe.jsx';
import Projects from './Home/Shared/Projects.jsx';
import ProjectDetails from './Home/Shared/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/about',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/project/:projectId',
        element: <ProjectDetails></ProjectDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
