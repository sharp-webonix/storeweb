import StarRatings from "react-star-ratings"
import { FaMinus, FaPlus } from "react-icons/fa";
const Product = () => {
  return (
    <div className=" h-auto flex justify-stretch p-[30px]">
      {/*LEFT */}
      <div className=" flex-1 h-[250px] w-[300px]">
        <img src="../asset/spotify.png" className="h-[100%] w-[100%] object-cover" />

      </div>
      {/*RIGHT */}
      <div className=" flex flex-1 flex-col ml-10">
        <h2 className=" text-[25px] font-semibold mb-[20px] "> HP 15s FD 0061TU</h2>
        <span>
          - I3
          -8gb
          -512gb
        </span>
        <h3 className=" font-semibold mt-2 text -[20px]">$90</h3>
        <span className="flex items-center">
          <StarRatings
            rating={2.50}
            starRatedColor="orange"
            starDimension="18px"
            starSpacing="5px"
          />
        </span>
        <div className=" h-52 w-96 border-2 border-grey rounded-lg shadow-md my-4 p-6 ">
          <h2 className=" flex items-center justify-center font-semibold text-lg text-gray-700  mb-4">ITEMS IN THE BOX</h2>
          <hr className="mb-2" />
          <span className="block text-grey-600 text-base text-[18px]"> 1 Laptop , 1 Adapter, 1 PowerCable</span>
        </div>

        <div className=" inline-flex items-center bg-[#62d7fa] text-white font-semibold text-sm p-4 rounded-full shadow-md">
          sale
        </div>
        <div className=" flex items-center my-5 p-4">
          <FaMinus className="bg-[#62d7fa] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
          <span className=" text-lg font-semibold mx-4">1</span>
          <FaPlus className="bg-[#62d7fa] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />

        </div>
        <button className="bg-[#7d7e7f] p-[10px] w-[200px] text-white cursor-pointer">Add To cart</button>
        <hr className=" my-6" />
        <div className=" flex flex-col">
          <h2 className=" font-semibold text-[18px]">Reviews</h2>
          <div className="flex items-center">
            <StarRatings
              rating={2.50}
              starRatedColor="orange"
              starDimension="18px"
              starSpacing="5px"
            />
            <span className="font-semibold mx-[20px]"> Nishant</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
