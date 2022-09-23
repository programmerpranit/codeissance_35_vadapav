import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    title: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: false },
    classroom: { type: String, required: true },
    uploadedby: { type: String, required: true },

}, { timestamps: true })

mongoose.models = {}

export default mongoose.model("Notice", NoticeSchema);



