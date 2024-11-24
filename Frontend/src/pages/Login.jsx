import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="flex items-center justify-center mt-[10%]">
            <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
                {/*IMAGE */}
                <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
                    <img src="../asset/redux.png" alt="login" className="object-cover h-full w-full" />
                </div>

                {/*FORM */}
                <div className="p-10 w-[500px]">
                    <h2 className=" text-xl text-gray-700 mb-5 ">LOGIN</h2>
                    <form className="spay-y-5">
                        <div className="mb-5">
                            <label htmlFor="" className="block text-gray-600 mb-1">Email</label>
                            <input type="text" placeholder="example@email.com" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5faed5]"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="" className="block text-gray-600 mb-1">Password</label>
                            <input type="password" placeholder="********" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5faed5]"/>
                        </div>
                        <button className="w-full py-2 bg-[#5fbbd5] text-white font-bold rounded-md transition-transform duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105">Login</button>
                    </form>
                    <div className="mt-4 text-sm text-gray-600">
            <span>Don`t have an account? </span>
            <Link to="/create-account" className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </div>
                </div>
            </div>

        </div>
    )
}

export default Login
