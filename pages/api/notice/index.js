import Notice from "../../../model/Notice";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {

    if (req.method == 'POST') {

        const { title, description, classroom, uploadedby } = req.body;

        try {
            let notice = new Notice({ title, description, classroom, uploadedby });
            await notice.save();
            res.status(201).json({ message: "Notice Uploaded" })

        } catch (error) {
            res.status(500).json({ message: "Some internal error occured try after some time" })
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)