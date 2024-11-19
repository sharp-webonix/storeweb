import Home from "./pages/Home";
import Cart from "./pages/cart";
import Myaccount from "./pages/Myaccount"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Announcement from "./components/Announcement";

function App() {
  const Layout = () => {
    return (
      <>
      <Announcement/>
        <Navbar />
        <Outlet/>
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/cart",
          element:<Cart/>,
        },{
          path:"/myaccount",
          element:<Myaccount/>,
        }
      ]
    },
    
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
