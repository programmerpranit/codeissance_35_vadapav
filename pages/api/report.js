import Report from "../../model/Report";
import connectDb from "../../middleware/mongoose"
import User from "../../model/User";

const handler = async (req, res) => {


    if (req.method == 'POST') {

        const { id } = req.body;

        try {
            
            let user = await User.findById(id)
            let prn = user.prn

            let report = await Report.find({prn: prn})
            
            res.status(200).json({report: report, user:user})

        } catch (error) {
            res.status(500).json({ message: "error" })
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)