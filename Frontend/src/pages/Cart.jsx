import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
const Cart = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className=" text-[18px] font-bold mb-6">Shopping Cart</h2>
      <div className=" flex gap-8 ">
        {/*LEFT */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">YOUR ITMES</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-grey-200 pb-4">
              <img src="../asset/sass.png" className="w-32 h-32 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">HP 15s FD 0061TU </h3>
                <p className=" text-grey-600 mb-2">wwkfjwv v vn jvn sjdnvjsn vksndvklsad v</p>
                <div className=" flex items-center my-5 p-4">
                  <FaMinus className="bg-[#62d7fa] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className=" text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#62d7fa] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />

                </div>


              </div>
              <div className="text-right">
                <p className=" text-xl font-bold mb-6">540RS</p>
                <FaTrash className="text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-grey-200 pb-4">
              <img src="../asset/sass.png" className="w-32 h-32 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">HP 15s FD 0061TU </h3>
                <p className=" text-grey-600 mb-2">wwkfjwv v vn jvn sjdnvjsn vksndvklsad v</p>
                <div className=" flex items-center my-5 p-4">
                  <FaMinus className="bg-[#62d7fa] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className=" text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#62d7fa] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />

                </div>


              </div>
              <div className="text-right">
                <p className=" text-xl font-bold mb-6">540RS</p>
                <FaTrash className="text-red-600 cursor-pointer" />
              </div>
            </div>


            <button className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold"> Clear cart</button>
          </div>
        </div>


        {/*RIGHT */}
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium "> Subtotal:</span>
              <span className="text-lg font-medium "> 540RS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium "> Shipping:</span>
              <span className="text-lg font-medium "> 540RS</span>
            </div>
            <button className="bg-[#62d7fa] text-white p-3 w-full rounded-lg font-semibold">Proceed to Checkout</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Cart
