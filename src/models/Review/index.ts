import mongoose from "mongoose";

const  ReviewSchema=new mongoose.Schema({
       name:String,
       para:String,
       imageUrl:String,
      
})

const Review=mongoose.models.Reviews || mongoose.model("Reviews",ReviewSchema)

export default Review