import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default:""},
    teacherId: { type: String, required: true },
    teacherName: { type: String, required: true },
    dueDate: {type: Date, required: true},
    classroom: {type: String, required: true},
    submissions: [
      {
        studentName: { type: String, required: true },
        studentId: { type: String, required: true },
        date: {type: Date, required: true},
        fileUrl: {type: String, }
      }
    ],
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Assignment", AssignmentSchema);
