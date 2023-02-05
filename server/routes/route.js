const {Router}=require("express");
const authcontroller=require("../controller/authcontroller")

const router=Router();

router.get("/",authcontroller.signup_get)

router.post("/signup",authcontroller.signup_post)


module.exports=router