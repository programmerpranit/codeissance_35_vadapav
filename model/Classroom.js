import mongoose from "mongoose";

const ClassroomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    teacherId: { type: String, required: true },
    teacherName: { type: String, required: true },
    students: [
      {
        studentName: { type: String },
        studentId: { type: String }
      }
    ],
    semester: {type: Number, required: true}
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Classroom", ClassroomSchema);
