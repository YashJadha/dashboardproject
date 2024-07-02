import mongoose from "mongoose";

export async function DBConnection(){
    try{
        await mongoose.connect("mongodb+srv://yj0034046:PFcx8gYubT6ET933@cluster0.ymsogh5.mongodb.net/dashnotes"); 
        console.log("Connection is succeed :-(");
    }
    catch(error){
        return console.log("Connection Cannot Succeed :-(", error)
    }
}

