import { query } from "../db.js";
import bcrypt from "bcryptjs";

// Create User deatils
export const insertUserAndSubsData = async (userData) => {
  const {
    planType,
    title,
    fname,
    lname,
    email,
    countryCode,
    areaCode,
    mobileNo,
    address1,
    address2,
    town,
    city,
    postCode,
    hashedPassword,
  } = userData;

  const userResult = await query(
    `INSERT INTO users
      (title, fname, lname, email, countryCode, areaCode, mobileNo, address1, address2, town, city, postCode, hashedPassword)
     VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
     RETURNING *`,
    [
      title,
      fname,
      lname,
      email,
      countryCode,
      areaCode,
      mobileNo,
      address1,
      address2,
      town,
      city,
      postCode,
      hashedPassword,
    ]
  );

  const newUser = userResult.rows[0];

  const subscriptionResult = await query(
    `INSERT INTO subscription
      (user_id, planType, dateOfOrder, validTill)
     VALUES
      ($1, $2, CURRENT_DATE, CURRENT_DATE + INTERVAL '30 days')
     RETURNING *`,
    [newUser.user_id, planType]
  );

  return {
    user: newUser,
    subscription: subscriptionResult.rows[0],
  };
};

// Get all user details
export const getAllUserDetails = async () => {
  const { rows } = await query(
    "SELECT u.*,s.* from users u LEFT JOIN subscription s on u.user_id = s.user_id ORDER BY u.user_id"
  );
  return rows;
};

// Geta a user by id
export const getUserDetailsById = async (id) => {
  const { rows } = await query(
    "SELECT u.*, s.* FROM users u LEFT JOIN subscription s ON u.user_id = s.user_id WHERE u.user_id = $1 ORDER BY u.user_id",
    [id]
  );
  return rows[0];
};
