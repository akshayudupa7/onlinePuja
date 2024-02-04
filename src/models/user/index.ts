import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
          name:String,
          email:String,
          password:String,
          role:String

})

const User=mongoose.models.Users || mongoose.model('Users',userSchema)

export default User