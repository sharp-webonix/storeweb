import StarRatings from "react-star-ratings";
const Product = ({img}) => {
  return (
    <div>
      <div className="flex flex-wrap mx-[30]">
            <div className="flex-col items-center justify-center h-[10px] mt-[80px] mb-[280px] mx-[30px] cursor-pointer ">
                <img src={img} className="h-[250px] w-[270px] object-cover"/>
                <h2 className="font-semibold text-[18px]">laptop</h2>
                <span>100Rs</span>
                <span className="flex items-center">
                    <StarRatings
                        rating={2.50}
                        starRatedColor="orange"
                        starDimension="18px"
                        starSpacing="5px"
                    />
                </span>
            </div>

        </div>
    </div>
  )
}

export default Product
