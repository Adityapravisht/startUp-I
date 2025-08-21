import { uploadVideoBuffer } from "../utils/cloudinaryUploader.js";
import * as videoServices from "../services/videoServices.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const file = req.file;

    if (!file)
      return res.status(400).json({ message: "No video file provided" });
    if (!title || !description || !category) return res.status(400).json({ message: "all field  is required" });

    // Upload buffer to Cloudinary
    const fileName = `${req.user.id}_${Date.now()}`;
    const fileBuffer = req.file.buffer;
    const result = await uploadVideoBuffer(fileBuffer, fileName);

    // Cloudinary returns resource data
    // result.secure_url (video url), result.public_id, result.eager (array) for generated thumbnail
    const video_url = result.secure_url;
    const video_public_id = result.public_id;
    const thumbnail_url =
      (result.eager && result.eager[0] && result.eager[0].secure_url) || null;
    const mime_type = result.resource_type + "/" + result.format;
    const size_bytes = result.bytes;
    // Save metadata in DB
    const newVideo = await videoServices.createVideo({
      user_id: req.user.id,
      title,
      description,
      category,
      video_url,
      video_public_id,
      thumbnail_url,
      mime_type,
      size_bytes ,
    });

    return res.status(201).json({ message: "Video uploaded", video: newVideo });
  } catch (error) {
    console.error("Upload error:", error);
    return res
      .status(500)
      .json({ message: "Upload failed", error: error.message });
  }
};

export const listUserVideos = async (req, res) => {
  try {
    const videos = await videoServices.getVideosByUser(req.user.id);
    return res.status(200).json(videos);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not fetch videos", error: error.message });
  }
};

export const listAllVideos = async (req, res) => {
  try {
    const videos = await videoServices.getAllVideos();
    return res.status(200).json(videos);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not fetch videos", error: error.message });
  }
};

export const getVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const video = await videoServices.getVideoById(id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    return res.status(200).json(video);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not fetch video", error: error.message });
  }
};