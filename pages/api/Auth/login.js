import User from "../../../model/User";
import connectDb from "../../../middleware/mongoose";
import jwt from "jsonWebToken";
// var AES = require('crypto-js/aes');
var CryptoJS = require('crypto-js');

const handler = async (req, res) => {

    if (req.method == 'POST') {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email })

        if (user) {

            const bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
            const pass = bytes.toString(CryptoJS.enc.Utf8);

            if (email == user.email && pass == password) {
                var token = jwt.sign(
                    { name: user.name, email: user.email, teacher: user.teacher, id: user._id },
                    'jwtsecret',
                    { expiresIn: "30d" })

                res.status(200).json({token, teacher:user.teacher});
            }
            else {
                res.status(400).json({ message: "Invalid Credentials" });
            }
        }
        else {
            res.status(404).json({ message: "User Not Found" });
        }
    }
    else {
        res.status(500).json({ message: "Bad request" });
    }
}

export default connectDb(handler)
