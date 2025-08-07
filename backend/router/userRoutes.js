import express from "express";
import { createClient, getClients, login, register } from "../controllers/usersController.js";

const router = express.Router();

router.route('/getClient').get(getClients);
router.route('/AddClient').post(createClient);
router.route('/login').post(login);
router.route('/signup').post(register);

export default router;