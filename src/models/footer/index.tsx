import mongoose from "mongoose";

const FooterSchema=new mongoose.Schema({
       titleA:String,
       titleB:String,
       para:String,
       address:String,
       email:String,
       phoneB:String,
       phoneA:String,
       imageUrl:String,
       linkA:String, 
       linkB:String,
       linkC:String,
       linkD:String,
       linkE:String,
       pathA:String,
       pathB:String,
       pathC:String,
       pathD:String,
       pathE:String,
})

const Footer=mongoose.models.Footers || mongoose.model("Footers",FooterSchema)

export default Footer