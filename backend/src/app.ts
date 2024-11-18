import express,{Express} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app : Express= express()

// Middlewares
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
// CORS middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true, // Enable cookies
}))
// Cookie Parser middleware
app.use(cookieParser())

//import Routes



//route declarations
//exampl
//url/api/v1/users/register



export {app}