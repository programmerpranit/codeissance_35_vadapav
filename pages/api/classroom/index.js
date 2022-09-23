import Classroom from "../../../model/Classroom";
import connectDb from "../../../middleware/mongoose";
import  jwt  from "jsonwebtoken";

const handler = async (req, res) => {

    const { token } = req.body
    const user =  jwt.decode(token,"jwtsecret");

    if (!user.teacher) {
        return res.status(401).json({ message: "You are not Teacher" });
    }

    if (req.method == 'POST') {
        
        const { title, semester } = req.body;
        try {
            
            let classroom = new Classroom({ title, teacherId:user.id, teacherName: user.name, semester });
            await classroom.save();
            res.status(201).json({ message: "Classroom created successfully!", id: classroom._id })

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Some internal error occured try after some time" })
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)