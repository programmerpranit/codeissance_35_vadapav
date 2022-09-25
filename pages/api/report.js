import Report from "../../model/Report";
import connectDb from "../../middleware/mongoose"
import User from "../../model/User";

const handler = async (req, res) => {

    if (req.method == 'POST') {

        const { sid } = req.body;
        console.log(req.body)

        try {
            
            let user = await User.findById(sid)
            console.log(user)
            let prn = user.prn

            let report = await Report.find({prn: prn})
            console.log(report)
            
            res.status(200).json({report: report[0], user:user})

        } catch (error) {
            res.status(500).json({error})
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)