import mongoose from "mongoose";

const ClassroomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    teacher: { type: String, required: true },
    teacherName: { type: String, required: true },
    students: [
      {
        studentName: { type: String },
        studentId: { type: String }
      }
    ],
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Project", ProjectSchema);
