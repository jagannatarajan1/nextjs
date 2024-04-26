import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
  {
    image: String,
    title: String,
    address: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const meeting =
  mongoose.models.Meeting || mongoose.model("Meeting", meetingSchema);
export default meeting;
