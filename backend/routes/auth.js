
const express  = require('express')
const router = express.Router();    
require('../db/conn')
const Controller = require('../controllers/controller')
const userRegValidator = require('../validators/userRegValidator')
const userLoginValidator = require('../validators/userLoginValidator')
const validator = require('../middlewares/valid')
const authForLogin = require('../middlewares/authForLogin')


router.get("/", Controller.home)
router.post("/userregister", validator.userRegValid(userRegValidator), Controller.userregister)
router.post("/userlogin", validator.userLoginValid(userLoginValidator), Controller.userlogin)
router.get("/user", authForLogin, Controller.user)
router.post("/bookyourapp", Controller.booking)


module.exports = router