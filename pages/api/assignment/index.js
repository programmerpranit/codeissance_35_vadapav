import Assignment from "../../../model/Assignment"
import connectDb from "../../../middleware/mongoose";

import jwt from "jsonwebtoken";

const handler = async (req, res) => {

    const { token } = req.body;
    const user = jwt.decode(token, "jwtsecret");

    if (!user.teacher) {
        return res.status(401).json({ message: "You are not teacher" });
    }

    if (req.method == 'POST') {
        const { title, description, dueDate, classroom } = req.body;

        try {

            let assignment = new Assignment({
                title, description, teacherId: user.id, teacherName:user.name, dueDate, classroom
            })

            await assignment.save()
            return res.status(201).json(assignment);


        } catch (error) {
            return res.status(500).json({message: error});
        }
    } else {
        return res.status(405).json({ message: "This method is not allowed" });
    }

}

export default connectDb(handler);