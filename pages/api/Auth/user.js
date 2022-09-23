import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { token } = req.body;

    if (token) {
      
      const data = jwt.decode(token, "jwtsecret")

      res.status(200).json(data);
    } else {
        res.status(401).json({ message: "Invalid Token" });
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;