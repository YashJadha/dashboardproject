import TopicSchema from "@/Database/models/topics";
import { NextResponse } from "next/server";
import { DBConnection } from "@/Database/DBconnect";

DBConnection();
export async function PATCH(req, context){
    try{    
        const id = context.params.id;
        const update = await req.json();
        const res = await TopicSchema.findByIdAndUpdate(id, update);
        return NextResponse.json({status: 200, msg: "Your data is updated : ", data: res});
    }   
    catch(error){
        return NextResponse.json({status: 500, msg: "Your data is not Updated !"});
    }
}


export async function DELETE(req, context){
    try{
        const id = context.params.id;
        const res = await TopicSchema.findByIdAndDelete(id);
        return  NextResponse.json({status: 200, msg: "Your data is Deleted :-("});
    }
    catch(error){
        return  NextResponse.json({status: 500, msg: "Your data is not Deleted :-("});
    }
}


export async function GET(req, context){
    try{
        const id = context.params.id;
        const res = await TopicSchema.findById(id);
        return NextResponse.json({status: 200, msg: "Your data : ", data: res});
    }
    catch(error){
        return NextResponse.json({status: 500, msg: "Your data is not find :-("});
    }
}