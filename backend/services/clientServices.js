import { query } from "../db.js";
import bcrypt from "bcryptjs";

export const getALlClients = async () => {
  const { rows } = await query("SELECT * FROM users");
  return rows;
};

export const createClient = async (name, email, password) => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  const result = await query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email`,
    [name, email, hashedPassword]
  );
  return result.rows[0];
};

export const authenticateUser = async (email, password) => {
  console.log("Looking for user:", email);
  const { rows } = await query("SELECT * FROM users WHERE email = $1", [email]);

  if (rows.length === 0) {
    console.log("User not found in DB");
    throw new Error("User not found");
  }

  // console.log(rows);

  const user = rows[0];
  // console.log("Stored password hash:", user.password, password);

  const isValid = bcrypt.compareSync(password, user.password);
  console.log("Password match:", isValid);

  if (!isValid) {
    throw new Error("Invalid password");
  }

  return { id: user.id, name: user.name, email: user.email };
};

export const getClientByEmail = async (email) => {
  const { rows } = await query("SELECT * FROM users WHERE email = $1 ", [
    email,
  ]);
  if (rows.length === 0) {
    console.log("users not found");
  }
  const user = rows[0];
  return user;
};
