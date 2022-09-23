
import connectDb from "../../../middleware/mongoose";
import Assignment from "../../../model/Assignment";


const handler = async (req, res) => {

    let id = req.query.id

    const { token, fileUrl } = req.body;
    const user = jwt.decode(token, "jwtsecret");

    try {
        
        let assignment = await Assignment.findById(id)
        assignment.submissions.push({
            studentName: user.name,
            studentId: user._id,
            date: Date.now(),
            fileUrl: fileUrl
        })

        assignment.save();

        return res.status(201).json({ message: "Assignment Submitted Successfully" });

    } catch (error) {
        return res.status(500).json({message: error});
    }

    

}

export default connectDb(handler);