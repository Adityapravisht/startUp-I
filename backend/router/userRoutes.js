import express from "express";
import {
  getUserById,
  getUsers,
  insertUserAndSubscription,
  
} from "../controllers/usersController.js";


const router = express.Router();

router.route("/getUsers").get(getUsers);
router.route("/createDetail").post(insertUserAndSubscription);
router.route("/getById/:id").get(getUserById);


export default router;