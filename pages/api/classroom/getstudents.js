import connectDb from "../../../middleware/mongoose";
import Classroom from "../../../model/Classroom";

const handler = async (req, res) => {
  

  if (req.method == "POST") {

    const { classroom} = req.body;

    try {
      let classrooms = await Classroom.findById(classroom)

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
