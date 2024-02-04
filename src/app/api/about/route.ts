import mongoose from "mongoose";
import About from "@/models/about";
import ConnectToDb from "@/database";
import { NextResponse } from "next/server";

export async function GET(req:Request){
  
    try{
        await ConnectToDb()
        const data=await About.find({})
        console.log(data)
        if(!data){
            return NextResponse.json({
                success:false,
                message:"data could not be fetched"
            })
        }else{
            return NextResponse.json({
                success:true,
                message:data
            })
        }

    }catch(error){
        return NextResponse.json({
            success:false,
            message:"something went wrong"
        })

    }``
    
}