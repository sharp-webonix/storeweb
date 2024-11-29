import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="relative bg-[url('../asset/banner.jpg')]  bg-no-repeat bg-cover h-[75vh] px-[200px]">

  {/*          <div className="absolute inset-0 bg-black opacity-50"/>*/}
            <div className="realtive flex flex-col w-[65%] pt-[13%] text-[#ffffff]">
                <span className="text-[20px] mt-3"> the original words and form body of printed or written matter on a page</span>
                <h1 className="text-3xl mt-3">testing</h1>
                <div className="flex items-center mt-[20px]">
                    <button className="bg-[#0780cc] p-[10px] w-[200px] text-white cursor-pointer mr-9 hover:bg-slate-500">Shop Now</button>
                    <Link to="/contact">
                    <button className="bg-gray-400 p-[10px] w-[200px] text-white cursor-pointer hover:bg-gray-500">Find US</button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Banner;
