import express from "express";
import {
  getUserById,
  getUsers,
  insertUserAndSubscription,
} from "../controllers/usersController.js";

const router = express.Router();
router.route("/get-users").get(getUsers);
router.route("/user-details").post(insertUserAndSubscription);
router.route("/:id").get(getUserById);

export default router;
