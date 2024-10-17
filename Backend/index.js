import app from "./App.js";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
dotenv.config();


const PORT = process.env.PORT;
app.listen(PORT,() =>{
    console.log(`server ok ${PORT}`);
    dbConnection();
})