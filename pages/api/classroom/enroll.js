import Classroom from "../../../model/Classroom";
import connectDb from "../../../middleware/mongoose";
import  jwt  from "jsonwebtoken";

const handler = async (req, res) => {

    const { token, id } = req.body
    const user =  jwt.decode(token,"jwtsecret");


    if (user) {

        
        if (req.method == 'PUT') {
            
            let classroom = await Classroom.findById(id);

            classroom.students.push({
                studentName: user.name,
                studentId: user.id
            })

            await classroom.save();
            return res.status(201).json({ message: "You have enrolled successfully" });
            
        } else {
            res.status(405).json({ message: "This method is not allowed" })
        }
    } else {
        res.status(405).json({ message: "user not found" })
    }
}

export default connectDb(handler)