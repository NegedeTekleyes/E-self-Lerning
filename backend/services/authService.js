import sql from "mssql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { poolPromise } from "../config/db.js"; // Import your DB connection

export const registerUser = async (userData) => {
  const { email, password } = userData;
  const pool = await poolPromise;
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool
      .request()
      .input("email", sql.NVarChar, email)
      .input("password", sql.NVarChar, hashedPassword)
      .query(
        "INSERT INTO dbo.[User] (email, password, role) VALUES (@email, @password, 'student')" // Changed [User] to [Users]
      );

    return { success: true, message: "User registered successfully!" };
  } catch (error) {
    console.error(error);
    throw new Error("Error registering user");
  }
};

export const loginUser = async (loginData) => {
  const { email, password } = loginData;
  const pool = await poolPromise;

  try {
    const result = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM dbo.[User] WHERE email = @email"); // Fixed syntax

    if (result.recordset.length === 0) {
      throw new Error("User not found");
    }

    const user = result.recordset[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      "c61955859bc1a75de8a7a8e4db08fa16d16a4144191701023e3b95e2337bd1037a21737e1a229b40b192f15e3e01b677f5f9463c1ed821b15790ea2001d4d985",
      { expiresIn: "1h" }
    );

    return { success: true, token };
  } catch (error) {
    console.error(error);
    throw new Error("Error logging in user");
  }
};
