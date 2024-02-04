import mongoose from "mongoose";

const ServiceSchema=new mongoose.Schema({
       title:String,
       description:String,
       imageUrl:String,
       path:String
})

const Service=mongoose.models.Services || mongoose.model("Services",ServiceSchema)

export default Service