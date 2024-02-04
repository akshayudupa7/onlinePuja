import mongoose from "mongoose";
import ConnectToDb from "@/database";
import { NextResponse } from "next/server";
import Footer from "@/models/footer";

export async function GET(req:Request){
  
    try{
        await ConnectToDb()
        const data=await Footer.find({})
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

    }
    
}