import * as clientServices from "../services/clientServices.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json("All fields are required");
    }
    if (password.length < 6) {
      return res.json({ message: "password must contain more then 6 letter" });
    }

    const userRegistered = await clientServices.getClientByEmail(email);

    if (userRegistered) {
      return res.json({ message: "already registered use diffrent email" });
    }

    const newUser = await clientServices.createClient(name, email, password);

    return res.json({ newUser, message: "user created sucessfully" });
  } catch (error) {
    return res.json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const user = await clientServices.authenticateUser(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const payload = { id: user.id, email: user.email };

    jwt.sign(payload, process.env.JWT_SECRET, {}, (err, token) => {
      if (err) throw err;
      // const { password, ...userWithoutPassword } = user._doc;
      return res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, 
          sameSite: "lax",
          path: "/", 
        }).json({ message: "user logged in" });
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getClients = async (req, res) => {
  try {
    const client = await clientServices.getALlClients();
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const createClient = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newClient = await clientServices.createClient(name, email, password);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: "client not craeted", error });
  }
};
