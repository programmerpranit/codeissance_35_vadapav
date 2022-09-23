import Assignment from "../../../model/Assignment"
import connectDb from "../../../middleware/mongoose";

import jwt from "jsonwebtoken";

const handler = async (req, res) => {

    const { token } = req.body;
    const user = jwt.decode(token, "jwtsecret");

    if (!user) {
        return res.status(401).json({ message: "You are not a user" });
    }

    if (req.method == 'POST') {

        const { cid } = req.body;
        console.log(cid)

        try {

            let assignments = await Assignment.find({classroom: cid})
            console.log(assignments)
            return res.status(200).json(assignments);


        } catch (error) {
            return res.status(500).json({message: error});
        }
    } else {
        return res.status(405).json({ message: "This method is not allowed" });
    }

}

export default connectDb(handler);