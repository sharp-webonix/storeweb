import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] shadow-md px-6">
      <Link to='/'>
        <div className="cursor-pointer m-2">
          <img src="../asset/logo1.png" height="150px" width="150px" alt="" />
        </div>
      </Link>
      <div className="flex items-center m-2">
        <input type="text" placeholder="Search" className="p-[15px] border-2 border-[#62d7fa] border-solid w-[500px] outline-none rounded-lg mr-[-30px]" />
        <FaSearch className="text-[20px] cursor-pointer" />
      </div>
      <div className="flex items-center">
        <Link to="/cart">
          <div className="mr-[20px] cursor-pointer">
            <Badge badgeContent={2} color="primary">
              <ShoppingBasketIcon className="text-[#62d7fa]" />
            </Badge>
          </div>
        </Link>
        <Link to="/login">

        <div className="flex items-center cursor-pointer space-x-2 border border-[#62d7fa] p-2 rounded-lg hover:bg-[#b4f2ff] duration-300">
          <FaUser className="text-[#62d7fa] transition duration-300" />
          <span className="text-[#62d7fa] font-semibold">Login</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
