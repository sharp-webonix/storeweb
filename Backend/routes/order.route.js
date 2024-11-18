import express from "express";
const router = express.Router();
import {getAllOrders,createOrder,getUserOrder,deleteOder,updateOrder} from "../controller/order.controller.js";
import protect from "../Middleware/auth.middleware.js";
//CREATE ORDER ROUTE
router.post("/",createOrder);
//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);
//GET ALL ORDER ROUTE
router.get("/",protect,getAllOrders);
//DELETE ORDR ROUTE
router.delete("/:id",deleteOder);
//GET USER'S ORDER ROUTE
router.get("/find/:userId", getUserOrder);
export default router;