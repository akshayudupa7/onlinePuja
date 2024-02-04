import mongoose from "mongoose";

const HomeSchema=new mongoose.Schema({
       title:String,
       description:String,
       imageUrl:String,
       para:String,
       main:String
})

const Occassion=mongoose.models.Occassions || mongoose.model("Occassions",HomeSchema)

export default Occassion