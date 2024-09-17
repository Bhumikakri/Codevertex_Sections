import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tutorial from '../src/pages/Tutorials/Tutorial';
import Layout from './Layout';
import TutorialCard from './pages/Tutorials/TutorialCard';
import Democourse from './pages/Course/About';
import Internship from './pages/Intership/Internship';
import Contact from './pages/ContactUs/Contact';
import TopicsDetails from './pages/Tutorials/TopicsDetails';
import Demohome from './pages/Home/Demohome';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Demohome />
        },
        {
          path: "/About",
          element: <Democourse />
        },
        {
          path: "/Internship",
          element: <Internship />
        },
        {
          path: "/Contact",
          element: <Contact />
        },
        {
          path: "/Tutorials",
          element: <Tutorial />,
        },
        {
          path: "/Tutorials/:TitleName",
          element:<TutorialCard />,
          children:[
            {
              path: "/Tutorials/:TitleName/:TitleNameTopic",
              element:<TopicsDetails />,
            },
          ]
        },
      ]
    }
  ])

  return (
    <>
    <div className='App h-fit'>
      < RouterProvider router={router} />
    </div>
    
    </>
  )
}

export default App
