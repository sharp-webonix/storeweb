import express from "express";
import { getAllBanners, deleteBanner, createBanner, getRandomBanner } from "../controller/banner.controller.js"
const router = express.Router();


//CREATE BANNER ROUTE
router.post("/", createBanner);

//GET ALL BANNER ROUTE
router.get("/", getAllBanners);

//DELETE BANNER ROUTES
router.delete("/:id", deleteBanner);

//GET RANDOM BANNER ROUTE
router.get("/random", getRandomBanner);
export default router;