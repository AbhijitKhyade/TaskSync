import mongoDB from "../../../libs/db";
import { Topic } from "../../../models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // console.log('Request: ',await request.json());
        const { title, description } = await request.json();
        await mongoDB();
        await Topic.create({ title, description });
        return NextResponse.json({ message: 'Task created Successfully!' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error creating Task!' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await mongoDB();
        const topics = await Topic.find();
        return NextResponse.json({ topics }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error Fetching Tasks!' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        // console.log('Id: ', id);
        await mongoDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json({ messgae: 'Task deleted Successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting Task!' }, { status: 500 });
    }
}