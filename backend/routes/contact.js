
const express  = require('express')
const router = express.Router();    
require('../db/conn')
const Controller = require('../controllers/controller')


router.post("/contact", Controller.contactform)


module.exports = router