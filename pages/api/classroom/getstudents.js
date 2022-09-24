import connectDb from "../../../middleware/mongoose";
import jwt from "jsonwebtoken";
import Classroom from "../../../model/Classroom";

const handler = async (req, res) => {
  const { token } = req.body;
  const user = jwt.decode(token, "jwtsecret");

  if (req.method == "POST") {
    try {
      let classrooms = await Classroom.findById({
        students: { $elemMatch: { studentId: user.id } },
      });

    //   let assignments = [];
    //   for (let i = 0; i < classrooms.length; i++) {
    //     const element = classrooms[i];
    //     let cid = element._id.toString()
    //     let n =  await Assignment.find({classroom: cid})
    //     n.forEach(note => {
    //         assignments.push(note)
    //     }); 
    //   }

      res.status(200).json(classrooms);
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "error" });
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
};

export default connectDb(handler);
