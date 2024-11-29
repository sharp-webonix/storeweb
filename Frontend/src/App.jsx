import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Announcement from "./components/Announcement";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

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
        },
        {
          path:"/myaccount",
          element:<Myaccount/>,
        },
        {
          path:"/product/:productId",
          element:<Product/>,
        },
        {
          path:"/products/:searchterm",
          element:<ProductList/>,
        },
        {
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/create-account",
          element:<Register/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        {
          path:"/myorders",
          element:<Order/>,
        },
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
