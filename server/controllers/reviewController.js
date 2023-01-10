const asyncHandler = require('express-async-handler')
const Review = require("../models/reviewModel")



const getReviews = asyncHandler (async (req, res)=>{
    const reviews = await Review.find()
  
    res.status(200).json(reviews)
})

const createReview = asyncHandler( async (req, res)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error ("please enter text")
    }
        const review = await Review.create({
            title:req.body.title,
            // serviceProvider: req.body.serviceProvider,
            //  service: req.body.service,
            //  location: req.body.location,
            //  review: req.body.review,
              likes: 0
        })

    

    res.status(200).json(review)
})

// ry {
//     await Post.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $inc: { likes: 1 },
//       }
//     );
const updateReview = asyncHandler(async (req, res)=>{
    const review = await Review.findOneAndUpdate(
       {_id: req.params.id},
       {
        $inc: {likes: 1}
    }
     )
     console.log("1 like added")
    res.status(200).json({message: "1 like added"})
})

const deleteReview = asyncHandler( async (req, res)=>{
    const reviews = await Review.find()
    const review = await Review.findOneAndDelete({_id: req.params.id})
    res.status(200).json(reviews)
})





module.exports = {
    getReviews,
    updateReview,
    createReview,
    deleteReview
}