import express from "express";
import {getAllUser,getUser,updateUser,deleteUser} from "../controller/user.controller.js"

const router = express.Router();

//GET ALL USER ROUTES 
router.get("/",getAllUser);

//DELETE USER ROUTE
router.delete("/:id", deleteUser);

//UPDATE USER ROUTE
router.put("/:id",updateUser);

//GET ONE USER ROUTE
router.get("/find/:userId",getUser);

export default router;