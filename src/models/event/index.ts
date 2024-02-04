import mongoose from "mongoose";

const EventSchema=new mongoose.Schema({
       name:String,
       imageUrl:String,
       description:String,
       para:String,
       price:String,
       help:String,
       icon:String,
       category:String,
       slug:String
})

const Event=mongoose.models.Events || mongoose.model("Events",EventSchema)

export default Event