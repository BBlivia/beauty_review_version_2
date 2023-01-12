const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    userName:{
        type: String,
        
    }, 
    email:{
        type: String,
        unique: true
    },
    password:{
         type:String,
       
       
    },
    pic: {
        type: "String",
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },

     
   
},
{ timestaps: true }
)






  module.exports = mongoose.model("User", UserSchema);
  



// UserSchema.pre("save", async function save(next) {
//     const user = this;
//     if (!user.isModified("password")) {
//       return next();
//     }
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, (err, hash) => {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   });
  
//   // Helper method for validating user's password.
  
//   UserSchema.methods.comparePassword = function comparePassword(
//     candidatePassword,
//     cb
//   ) {
//     bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//       cb(err, isMatch);
//     });
//   };
  
  