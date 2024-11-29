import Product from "./Product";


const Products = () => {
    return (
        <div className=" flex flex-wrap mx-[30px]">
            <Product img= "../asset/figma.png"/>
            <Product img= "../asset/node.png"/>
            <Product img= "../asset/react.png" />
            <Product img= "../asset/skype.png"/>
            
        </div>
)
}

export default Products;
