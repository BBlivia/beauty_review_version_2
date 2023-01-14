
const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/authMiddleware")
const {getAllReviews, createReview, updateReview, deleteReview, getMyReviews} = require("../controllers/reviewController")


router.route("/").get(protect, getAllReviews).post(protect, createReview)
router.route("/:id").put(protect,updateReview).delete(protect,deleteReview) 
router.route('/myreviews').get(protect, getMyReviews)



module.exports = router