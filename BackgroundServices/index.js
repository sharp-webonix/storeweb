import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailServices/sendPendingOrderEmail.js";
import sendDeliveredOrder from "./EmailServices/sendDeliveredorderEmail.js";
import sendPromotionEmail from "./EmailServices/sendPromotionEmail.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

//SCHEDULE SERVICES
const services = () => {
    cron.schedule('* * * * * *', () => {
        sendWelcomeEmail();
        sendPendingOrderEmail();
        sendDeliveredOrder();
    });
};
const promotionservices = () => {
    cron.schedule('00 5 * * 1', () => {
        sendPromotionEmail();
    });
};
 services();
 promotionservices();
app.listen(PORT, () => {
    console.log(`Background Services at ${PORT}`);
    dbConnection();
})