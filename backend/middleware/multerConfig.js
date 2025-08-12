import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 500 * 1024 * 1024, // 500 MB
  },
  fileFilter: (req, file, cb) => {
    // Allow common video mime types
    const allowed = [
      "video/mp4",
      "video/quicktime", // mov
      "video/x-msvideo", // avi
      "video/x-matroska", // mkv
      "video/webm"
    ];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Unsupported file type. Only mp4/mov/avi/mkv/webm allowed."));
  },
});
