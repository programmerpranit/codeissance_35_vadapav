import User from "../../../model/User"
import connectDb from "../../../middleware/mongoose"
import  jwt  from "jsonwebtoken";
// var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {

        const { name, email, role, prn } = req.body;

        try {
            let user = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password,'secret123').toString(), teacher:role, prn:prn })
            await user.save();
            var token = jwt.sign(
                { name: user.name, email: user.email, teacher: user.teacher, id: user._id},
                'jwtsecret',
                { expiresIn: "30d" })

            res.status(201).json(token);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    } else {
        res.status(500).json({ message: "method is not allowed" });
    }
}

export default connectDb(handler);