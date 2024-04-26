import meeting from "@/(models)/meeting";
import { connectMongoDB } from "@/utils/mongoDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDB();
    const meetingData = body.meetupData;
    await meeting.create(meetingData);
    return NextResponse.json({ message: "success", meetingData });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const allMeeting = await meeting.find();
  return NextResponse.json({ allMeeting });
}
