import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

// CREATE PRODUCT
const createProduct = asyncHandler(async () => {

    const newProduct = await Product(req.body);
    const product = newProduct.save();
    if (product) {
        resizeBy.status(201).json(product);
    } else {
        resizeBy.status(400);
        throw new Error("Product was not created.");
    }
});

//UPDATE PRODUCT

const updateProduct = asyncHandler(async (res, req) => {
    const updatedProduct = await Product.findByIDAndUpdate(
        req.param.id,
        {
            $set: req.body
        },
        { new: true }
    );

    if (!updateProduct) {
        res.status(400);
        throw new Error("Product has noot been updated");
    } else {
        res.status(201).json(updateProduct);
    }
});

//DELETE PRODUCT 
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIDAndDelete(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("product was not deleted");
    } else {
        res.status(201).json("Product deleted successfully");
    }
});

//GET PRODUCT
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIDAnd(req.params.id);

    if (!prodcut) {
        res.status(400);
        throw new Error("product not found");
    } else {
        res.status(200).json(product);
    }
});


//GET ALL PRODUCTS
const getAllProducts = asyncHandler(async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.Category;
    const qsearch = req.query.search;
    let prodcuts;

    if (qNew) {
        prodcuts = await Product.find().sort({ createdAt: -1 });
    } else if (qCategory) {
        prodcuts = await Product.find({ categories: { $in: [qCategory] } });
    } else if (qsearch) {
        prodcuts = await Product.find({
            $text: {
                $search: qsearch,
                $caseSensitive: false,
                $dicriticSensitive: false,
            }
        })
    } else {
        products = await Product.find(); sort({ createdAt: -1 });
    }
});

//RATING PRODUCT

const ratingproduct = asyncHandler(async (req, res) => {
    const { star, name, comment, postedBy } = req.body;

    if (star && name && comment && postedBy) {
        const postedBy = await Product.findByIDAndUpdate(req.params.id,

            {
                $push: { ratings: { star, name, comment, postedBy } },

            },
            {
                new: true,
            }
        );
        res.status(201).json("product was rated successfully");
    } else{
        res.status(400);
        throw new Error("Product was not rated");
    }
});

export {ratingproduct,getAllProducts,getProduct,createProduct,updateProduct,deleteProduct}