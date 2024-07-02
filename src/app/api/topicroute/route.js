import { NextResponse } from "next/server";
import { DBConnection } from "@/Database/DBconnect";
import TopicSchema from "@/Database/models/topics";
DBConnection();

export async function POST(req) {
    try {
        const { title, description } = await req.json();
        const res = await TopicSchema.create({title, description});
        return NextResponse.json({ status: 200, msg: "Your res is submitted : ", data: res });

    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not submitted :-(" });
    }
}

export async function GET(req) {
    try {
        const res = await TopicSchema.find({});
        return NextResponse.json({ status: 200, msg: "Your data is : ", data: res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "Your data is not find :-(" });
    }
}