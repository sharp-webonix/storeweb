const Banner = () => {
    return (
        <div className="relative bg-[url('../asset/banner.jpg')]  bg-no-repeat bg-cover h-[75vh] px-[200px]">
            
            <div className="realtive flex flex-col w-[50%] pt-[10%] text-[#ffffff]">
                <span className="text-[20px] mt-3"> the original words and form body of printed or written matter on a page</span>
                <h1 className="text-3xl mt-3">testing</h1>
                <div className="flex items-center mt-[20px]">
                    <button className="bg-[#82cfff] p-[10px] w-[200px] text-white cursor-pointer mr-9">Shop Now</button>
                    <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer">Call Now</button>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;
