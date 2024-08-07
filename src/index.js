import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`the server is running on port ${process.env.PORT}`)
        })
    })

    .catch(() => {
        console.log("mongodb connection failed in main file of index.js");
    })