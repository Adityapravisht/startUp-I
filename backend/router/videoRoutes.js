import express from "express";
import { uploadVideo, listUserVideos, listAllVideos, getVideo } from "../controllers/videosController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multerConfig.js";

const router = express.Router();

// Protected route to upload a video
// form-data fields: title, description, category, video (file)
router.post("/upload", authenticate, upload.single("video"), uploadVideo);
// router.post("/upload", uploadVideo);


// Get videos of logged-in user
router.get("/my", authenticate, listUserVideos);

// Get all videos
router.get("/", authenticate, listAllVideos);

// Get single video by id
router.get("/:id", authenticate, getVideo);

export default router;
