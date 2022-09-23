import Notice from "../../../model/Notice";
import connectDb from "../../../middleware/mongoose";
import jwt from "jsonwebtoken";
import Classroom from "../../../model/Classroom";

const handler = async (req, res) => {
  const { token } = req.body;
  const user = jwt.decode(token, "jwtsecret");
  console.log(user)

  if (req.method == "POST") {
    try {
      let classrooms = await Classroom.find({
        students: { $elemMatch: { studentId: user.id } },
      });

      let notices = [];

      for (let i = 0; i < classrooms.length; i++) {
        const element = classrooms[i];
        let cid = element._id.toString()
        let n =  await Notice.find({classroom: cid})
        n.forEach(note => {
            notices.push(note)
        }); 
      }

      res.status(200).json(notices);
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "error" });
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
};

export default connectDb(handler);
