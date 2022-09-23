import Notice from "../../../model/Notice";
import connectDb from "../../middleware/mongoose";
import  Jwt  from "jsonwebtoken";

const handler = async (req, res) => {

    const token = req.body;
    const user = Jwt.decode(token,"jwtsecret")

    if(!user.teacher){
        res.status(500).json({ message: "You are not a teacher" });
    }

    if (req.method == 'POST') {

        const { title, description, classroom, uploadedby } = req.body;

        try {
            let notice = new Notice({ title, description, classroom, uploadedby });
            await notice.save();
            res.status(201).json({ message: "Notice Uploaded" })

        } catch (error) {
            res.status(500).json({ message: error })
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)