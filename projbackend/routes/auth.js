var express=require('express');
const { Router } = require('express');
var router=express.Router();
const {signout}=require("../controllers/auth");
const {signup}=require("../controllers/auth");
const {signin}=require("../controllers/auth");
const {update}=require("../controllers/auth");
const {food}=require("../controllers/auth");


router.post("/signup",signup)
router.get("/signout",signout);
router.post("/signin",signin);
router.put("/update",update);

router.post("/food",food);

module.exports=router;