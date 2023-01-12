
const express = require("express")
const router = express.Router()
//const { } = require('../middleware/authMiddleware')
const {getAllReviews, createReview, updateReview, deleteReview, getMyReviews} = require("../controllers/reviewController")


router.route("/").get( getAllReviews).post( createReview)
router.route("/:id").put(updateReview).delete(deleteReview) 
router.route('/myreviews').get( getMyReviews)



module.exports = router