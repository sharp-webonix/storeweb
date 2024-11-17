import Banner from "../models/banner.model.js";
import asyncHandler from "express-async-handler";


//CREATE BANNER
const createBanner = asyncHandler(async (req, res) => {
    const newBannner = Banner(req.body);
    const savedBanner = newBannner.save();

    if (!savedBanner) {
        res.status(400);
        throw new Error("banner was not created");
    } else {
        res.status(200).json(savedBanner);
    }
});
//DELETE BANNER
const deleteBanner = asyncHandler(async (req, res) => {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) {
        res.status(400);
        throw new Error("Banner was not deleted");
    } else {
        res.status(201).json("Banner was deleted successfully");
    }
});
//GET ALL BANNERS
const getAllBanners = asyncHandler(async (req, res) => {
    const banners = Banner.find();
    if (!banners) {
        res.status(400);
        throw new Error("Somthing Went Wrong");
    } else {
        res.status(200).json(banners);
    }
});
//GET RANDOM BANNER
const getRandomBanner = asyncHandler(async (req, res) => {
    const banners = await Banner.find();
    if (!banners) {
        res.status(400);
        throw new Error("Banners were not fetched")
    } else {
        const randomIndex = Math.floor(Math.random() * banners.length);
        const randomBanner = banners[randomIndex];
        res.status(200).json(randomBanner);
    }
});

export {getAllBanners,getRandomBanner,createBanner,deleteBanner};