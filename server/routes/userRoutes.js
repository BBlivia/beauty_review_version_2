const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/authMiddleware")
const {registerUser, getProfile, loginUser} = require("../controllers/userController")
router.route("/").get(protect, getProfile).post(registerUser)
router.route('/login').post(loginUser)






module.exports = router