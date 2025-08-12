import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const authenticate = async(req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log("cookie", req.cookies);
    console.log("token", token);


    if (!token)
      return res.status(401).json({ message: "User not authenticated" });

    const decoded = await jwt.verify(token, process.env.JWT_SECRET); 

    if (!decoded) return res.status(401).json({ message: "Invalid token" });

    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
