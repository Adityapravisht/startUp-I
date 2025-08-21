import express from "express";
import {
  createClient,
  getClients,
  login,
  register,
} from "../controllers/usersController.js";
import passport from "passport";

const router = express.Router();

router.route("/getClient").get(getClients);
router.route("/AddClient").post(createClient);
router.route("/login").post(login);
router.route("/signup").post(register);
router.get(
  "/googleAuth",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

export default router;