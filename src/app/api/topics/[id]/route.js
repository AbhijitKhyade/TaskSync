import mongoDB from '../../../../libs/db';
import { Topic } from '../../../../models/topic';
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { title, description } = await request.json();
        await mongoDB();
        const updatedTasks = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });
        // console.log(updatedTasks);
        return NextResponse.json({ message: 'Task Updated Successfully!', updatedTasks }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error Updating Task!' }, { status: 500 });
    }
}

// export async function DELETE(request, { params }) {
//     try {
//         const { id } = params;
//         await mongoDB();
//         await Topic.findByIdAndDelete(id);
//         return NextResponse.json({ messgae: 'Task deleted Successfully!' }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: 'Error deleting Task!' }, { status: 500 });
//     }
// }

export async function GET(_request, { params }) {
    try {
        const { id } = params;
        await mongoDB();
        const topic = await Topic.findById(id);
        // console.log("Topic:", topic);
        return NextResponse.json({ message: 'received ', topic }, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: 'Error Fetching Task!' }, { status: 500 });
    }
}