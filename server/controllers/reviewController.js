const asyncHandler = require('express-async-handler')
const Review = require("../models/reviewModel")
const User = require("../models/userModel")



const getAllReviews = asyncHandler (async (req, res)=>{
    const reviews = await Review.find()
  
    res.status(200).json(reviews)
})

const getMyReviews = asyncHandler(async(req, res)=>{
      
   // const myReviews = await Review.find({user: req.user.id})

  res.status(200).json({myReviews})
  
  
})

const createReview = asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error ("please enter text")
    }
        const review = await Review.create({
            user: req.user.id,
            title:req.body.title,
             serviceProvider: req.body.serviceProvider,
            //  service: req.body.service,
            //  location: req.body.location,
            //  review: req.body.review,
              likes: 0
        })

    

    res.status(200).json(review)
})


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

const searchReview = asyncHandler(async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error ("please enter text")
    }
    let searchTerm = req.body.searchTerm
    let reviews = await Review.find({ $text: { $search: searchTerm, $diacriticSensitive: true} })
    res.status(201).json(reviews)
    console.log(reviews)
})







const deleteReview = asyncHandler( async (req, res)=>{
    const reviews = await Review.find()
    const review = await Review.findOneAndDelete({_id: req.params.id})
    res.status(200).json(reviews)
})





module.exports = {
    getAllReviews,
    getMyReviews,
    updateReview,
    createReview,
    deleteReview,
    searchReview
}