import cloudinary from "./cloudinary.js";
import streamifier from "streamifier";

export const uploadVideoBuffer = (buffer, filename) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "video",
        folder: "videos", 
        public_id: filename ? filename.replace(/\.[^/.]+$/, "") : undefined,
        // request an eager transformation to generate a JPEG thumbnail
        eager: [
          { width: 640, height: 360, crop: "fill", format: "jpg" } // first eager transform -> thumbnail
        ],
        eager_async: false,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};
