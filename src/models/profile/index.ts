import mongoose from "mongoose";

const  ProfileSchema=new mongoose.Schema({
       name:String,
       place:String,
       imageUrl:String,
      
})

const Profile=mongoose.models.Profiles || mongoose.model("Profiles",ProfileSchema)

export default Profile