import  express  from "express";
import dotenv from "dotenv";
import dbConnection from "./src/config/database"
import CategoriesRouter from "./src/categories/categories.route";
import subcategoriesRoute from "./src/subcategories/subcategories.route";
import mountRoutes from "./src";
//create server
const app:express.Application = express()
app.use(express.json({limit:"10kb"}))
dotenv.config()
dbConnection();

mountRoutes(app);
app.listen(process.env.PORT , ()=>{
    console.log("server start on port 3000")
})