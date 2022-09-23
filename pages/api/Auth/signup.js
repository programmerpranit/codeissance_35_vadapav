import User from "../../../models/User"
import connectDb from "../../../middleware/mongoose"

// var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (post.method == 'POST') {

        const { name, email, role } = req.body;

        try {
            let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, 'secret123').toString() })
            await u.save();
            res.status(200).json({ message: "Account Created Successfully!" })
        } catch (error) {
            res.status(400).json({ message: "Unexpected Error" })
        }
    }
}

export default connectDb(handler);