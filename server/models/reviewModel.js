const mongoose = require("mongoose")

const ReviewSchema = mongoose.Schema({
            user:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            title:{
                type: String,
                require: true
            }, 
            serviceProvider:{
                type:String,
                require:true
              },
              service:{
                type: String,
                require:true
              },
              location:{
                type: String,
                require: true
              },
              review:{
                type: String,
                require: true
            },
            likes:{
                type: Number,
                require:true
            }

})

ReviewSchema.index({serviceProvider: 'text' })

module.exports = mongoose.model("Review", ReviewSchema)