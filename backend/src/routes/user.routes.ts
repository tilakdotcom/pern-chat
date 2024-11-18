import { signup } from "@/controllers/user.controllers";
import {Router} from "express"

const router = Router()
//middlewares if have

//routes
router.route("/signup").post(signup)
export default router;