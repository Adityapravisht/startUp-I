import express from "express";
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.route("/add-category").post(createCategory);
router.route("/get-category").get(getAllCategories);
router.route("/:id").get(getCategory);
router.route("/:id").put(updateCategory);
router.route("/:id").delete(deleteCategory);



export default router;
