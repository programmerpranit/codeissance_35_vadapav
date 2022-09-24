import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    ia1: {type: Number},
    ia2: {type: Number},
    sem: {type: Number},
    prn: {type: Number, required: true},
    semester: {type: Number, required: true}

}, { timestamps: true })

mongoose.models = {}

export default mongoose.model("Report", ReportSchema);
