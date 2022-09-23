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
        
        try {
            
            let classrooms = await Classroom.find({teacherId:user.id});
            
            res.status(200).json({  classrooms:classrooms })

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Some internal error occured try after some time" })
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)