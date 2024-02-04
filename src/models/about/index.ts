import mongoose from "mongoose";

const AboutSchema=new mongoose.Schema({
       title:String,
       description:String,
       imageUrl:String
})

const About=mongoose.models.Abouts || mongoose.model("Abouts",AboutSchema)

export default About