
const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/authMiddleware")
const {getAllReviews, createReview, updateReview, deleteReview, getMyReviews, searchReview} = require("../controllers/reviewController")


router.route("/").get(protect, getAllReviews).post(protect, createReview)
router.route("/:id").put(protect,updateReview).delete(protect,deleteReview) 
router.route('/myreviews').get(protect, getMyReviews)
router.route("/search").post(protect, searchReview)



module.exports = router