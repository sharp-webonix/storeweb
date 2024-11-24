const Category = () => {
    return (
        <div className="flex items-center m-3">
            <div className="relative bg-[url('../asset/banner.jpg')] bg-no-repeat bg-cover bg-cente bg-slate-800 h-[200px] w-[250px] flex items-center justify-center m-[20px]">
                <div className="absolute inset-0 bg-gradient-to-1 from-black/50 to-transparent" />
                <div className="relative flex items-center justify-center">
                    <h2 className="font-semibold text-[30px] text-white">Laptops</h2>
                </div>
            </div>
            <div className="relative bg-[url('../asset/banner.jpg')] bg-no-repeat bg-cover bg-cente bg-slate-800 h-[200px] w-[250px] flex items-center justify-center m-[20px]">
                <div className="absolute inset-0 bg-gradient-to-1 from-black/50 to-transparent" />
                <div className="relative flex items-center justify-center">
                    <h2 className="font-semibold text-[30px] text-white">Printes</h2>
                </div>
            </div>
            <div className="relative bg-[url('../asset/banner.jpg')] bg-no-repeat bg-cover bg-cente bg-slate-800 h-[200px] w-[250px] flex items-center justify-center m-[20px]">
                <div className="absolute inset-0 bg-gradient-to-1 from-black/50 to-transparent" />
                <div className="relative flex items-center justify-center">
                    <h2 className="font-semibold text-[30px] text-white">QLED TV</h2>
                </div>
            </div>
            <div className="relative bg-[url('../asset/banner.jpg')] bg-no-repeat bg-cover bg-cente bg-slate-800 h-[200px] w-[250px] flex items-center justify-center m-[20px]">
                <div className="absolute inset-0 bg-gradient-to-1 from-black/50 to-transparent" />
                <div className="relative flex items-center justify-center">
                    <h2 className="font-semibold text-[30px] text-white">Desktops</h2>
                </div>
            </div>
        </div>
    )
}

export default Category
