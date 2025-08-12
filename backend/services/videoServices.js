import { query } from "../db.js";

export const createVideo = async ({
  user_id,
  title,
  description,
  category,
  video_url,
  video_public_id,
  thumbnail_url,
  mime_type,
  size_bytes
}) => {
  const result = await query(
    `INSERT INTO videos (
      user_id, title, description, category,
      video_url, video_public_id, thumbnail_url,
      mime_type, size_bytes
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *`,
    [
      user_id,
      title,
      description,
      category,
      video_url,
      video_public_id,
      thumbnail_url,
      mime_type,
      size_bytes
    ]
  );
  return result.rows[0];
};


export const getVideosByUser = async (userId) => {
  const { rows } = await query("SELECT * FROM videos WHERE user_id = $1 ORDER BY created_at DESC", [userId]);
  return rows;
};

export const getAllVideos = async () => {
  const { rows } = await query("SELECT v.*, u.name as uploader_name, u.email as uploader_email FROM videos v JOIN users u ON u.id = v.user_id ORDER BY v.created_at DESC");
  return rows;
};

export const getVideoById = async (id) => {
  const { rows } = await query("SELECT * FROM videos WHERE id = $1", [id]);
  return rows[0];
};
