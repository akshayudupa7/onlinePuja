import mongoose from "mongoose";

const  ChooseSchema=new mongoose.Schema({
       title:String,
       para:String,
       imageUrlA:String,
       imageUrlB:String,
       imageUrlC:String,
       nameA:String,
       nameB:String,
       nameC:String

})

const Choose=mongoose.models.Chooses || mongoose.model("Chooses",ChooseSchema)

export default Choose