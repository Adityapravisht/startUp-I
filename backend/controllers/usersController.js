import * as usersService from "../services/usersServices.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import passport from "passport";

dotenv.config();

// export const createUserDetails = async (req, res) => {
//   try {
//     const userData = req.body;
//     const newUser = await usersService.createUserDetails(userData);
//     res
//       .status(201)
//       .json({ message: "User details created successfully", newUser });
//   } catch (error) {
//     console.error("Error creating user details:", error);
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// };

export const getUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUserDetails();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all user details:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Get User Details by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "id is missing" });
    }
    const user = await usersService.getUserDetailsById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user details by id:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

///////////////////////

export const insertUserAndSubscription = async (req, res) => {
  try {
    const {
      planType,
      title,
      fname,
      lname,
      email,
      countryCode,
      areaCode,
      mobileNo,
      address1,
      address2,
      town,
      city,
      postCode,
      hashedPassword,
    } = req.body;

    const result = await usersService.insertUserAndSubsData({
      planType,
      title,
      fname,
      lname,
      email,
      countryCode,
      areaCode,
      mobileNo,
      address1,
      address2,
      town,
      city,
      postCode,
      hashedPassword,
    });

    console.log("userhj", result);
    return res.status(201).json({
      message: "User and subscription created successfully",
      result,
    });
  } catch (error) {
    console.error("Error inserting user and subscription:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
