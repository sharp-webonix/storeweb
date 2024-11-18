import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";

//CREATE ORDER
const createOrder = asyncHandler(async (req, res) => {

    const newOrder = Order(req.body);
    const savedOrder = await newOrder.save();
    if (!savedOrder) {
        res.status(400);
        throw new Error("order was not placed");
    } else {
        res.status(201).json(savedOrder);
    }
});

//UPDATE ORDER
const updateOrder = asyncHandler(async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(
        re.params.id,
        { $set: req.body },
        { $new: true }
    );
    if (!updatedOrder) {
        res.status(400);
        throw new Error("Order Was not updated");
    } else {
        res.status(201).json(updatedOrder);
    }
});

//DELETE ORDER
const deleteOder = asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
        res.status(400);
        throw new Error("Order was not Deleted");
    } else {
        res.status(200).json(order);
    }
});

//GET USER ORDER
const getUserOrder = asyncHandler(async (req, res) => {
    const orders = await Order.find({ userId: req.params.id }).reverse();
    if (!orders) {
        res.status(400);
        throw new Error("No orders was Found");
    } else {
        res.status(200).json(orders);
    }
});

//GET ALL ORDERS
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find();
    if (!orders) {
        res.status(400);
        throw new Error("No orders was Found");
    } else {
        res.status(200).json(orders);
    }
});

export {getAllOrders,createOrder,getUserOrder,deleteOder,updateOrder}