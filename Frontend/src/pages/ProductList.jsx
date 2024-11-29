import Products from "../components/Products"

const ProductList = () => {
    return (
        <div className=" min-h-screen bg-gray-50 p-8">
            <div className="flex justify-between m-4">
                {/*LEFT */}
                <div className=" flex flex-col sm:flex-row sm:items-center ">
                    <span className="text-lg font-semibold mr-4">Filter Product</span>
                    <select name="concern" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4">
                        <option disabled selected>
                            Concern
                        </option>
                        <option>Laptops</option>
                        <option>Printers</option>
                        <option>Desktops</option>
                        <option>Smart TV</option>
                        <option>Accessories</option>

                    </select>
                    <select name="brand" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4">
                        <option disabled selected>
                            Popular Brands
                        </option>
                        <option>HP</option>
                        <option>Acer</option>
                        <option>AcerPure</option>
                    </select>
                </div>

                {/*RIGHT */}
                <div className="flex felx-col sm:flex-row sm:items-center">
                    <span className="text-lg font-semibold mr-4">Sort Products:</span>
                    <select>
                        <option value="newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default ProductList
