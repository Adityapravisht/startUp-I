import { query } from "../db.js";

// Create category
export const insertCategoryData = async ({ image, name, language, skuId }) => {
  const result = await query(
    `INSERT INTO category (image, name, language, "skuId") 
     VALUES ($1, $2, $3, $4) 
     RETURNING *`,
    [image, name, language, skuId]
  );
  return result.rows[0];
};

// Get all categories
export const getAllCategories = async () => {
  const result = await query(`SELECT * FROM category ORDER BY created_at DESC`);
  return result.rows;
};

// Get category by id
export const getCategoryById = async (id) => {
  const result = await query(`SELECT * FROM category WHERE id = $1`, [id]);
  return result.rows[0];
};

// Update category
export const updateCategory = async (id, { image, name, language, skuId }) => {
  const result = await query(
    `UPDATE category 
     SET image = $1, name = $2, language = $3, "skuId" = $4
     WHERE id = $5
     RETURNING *`,
    [image, name, language, skuId, id]
  );
  return result.rows[0];
};

// Delete category
export const deleteCategory = async (id) => {
  const result = await query(`DELETE FROM category WHERE id = $1 RETURNING *`, [
    id,
  ]);
  return result.rows[0];
};
